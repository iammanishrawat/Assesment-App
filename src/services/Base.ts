import { clearAll, getToken, setToken } from "../helpers/storage";
import axios, { AxiosInstance } from "axios";
import ApiUrls from "./ApiUrl";
import { toastError } from "helpers/toastHelper";

export enum Header {
  Authorization = "authorization",
  ProfileId = "x-profile-id",
}

class BaseService {
  protected axios: AxiosInstance;
  public static authToken: string;
  public static profileId: number;
  public static requestCount: number = 0;
  public static isRefreshing: boolean = false;
  public static subscribers: any[] = [];
  public abortTime: number = 5000;

  constructor(private baseURL = process.env.REACT_APP_API_BASE_URL) {
    const customFetch = axios.create({
      timeout: 30 * 1000,
      baseURL,
    });
    customFetch.interceptors.request.use(
      async (config) => {
        const token = BaseService.authToken
          ? BaseService.authToken
          : getToken();
        if(config?.url && ["/v2/press-release/generate-headline-for-open-event", "/v2/press-release/create-for-open-event"].includes(config.url)){
          config.headers["authorization"] = `${process.env.REACT_APP_BASIC_AUTH}`;
        }else if (token) {
          config.headers["authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    customFetch.interceptors.response.use(
      (response) => response,
      async (error) => {
        const {
          config,
          response: { status, data }
        } = error;
        const originalRequest = config;
        const errorCode = data?.errorCode;

        // if (
        //   status === 401 &&
        //   !originalRequest._retry && 
        //   BaseService.requestCount === 0
        // ) {
        //   if(errorCode === "token_blocked") {
        //     clearAll(); 
        //     !window?.location?.pathname?.includes("redirect-to-dashboard") && window.location.reload();
        //     return
        //   }else{
        //     originalRequest._retry = true;
        //     BaseService.requestCount += 1; 
        //     const resp = await this.refreshToken();
        //     const accessToken = resp?.token;
        //     setToken(accessToken);
        //     BaseService.setAuthToken(accessToken);
        //     customFetch.defaults.headers.common[
        //       Header.Authorization
        //     ] = `Bearer ${accessToken}`;
        //     return customFetch(originalRequest);
        //   }
        // } 
        if (status === 401) {
         if (!BaseService.isRefreshing && errorCode === "invalid_token") {
            BaseService.isRefreshing = true;
            const resp = await this.refreshToken();
            BaseService.isRefreshing = false;
            this.onRefreshed(resp?.token);
            setToken(resp?.token);
            BaseService.setAuthToken(resp?.token);
            BaseService.subscribers = [];
          } else if(errorCode === "token_blocked") {
            this.clearStates();
            return;
          }
          return new Promise(resolve => {
            this.subscribeTokenRefresh((token: string)=> {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(axios(originalRequest));
            });
          });
        } else if ([403, 422, 400].includes(status)) {
          if(data?.code === "invalid_token") return this.clearStates();
          let errorMsg = "Something went wrong!";
          const msg = data?.message;
          if (msg) {
            errorMsg = msg;
          }
          if (msg != "No active subscription plan found.") toastError(errorMsg);
        } else if (error?.code === "ERR_CANCELED") {
          // Handle API Pending
          return customFetch(originalRequest);
        }
        return Promise.reject(error);
      }
    );
    this.axios = customFetch;
  }

  public clearStates = () => {
    clearAll(); 
    !window?.location?.pathname?.includes("redirect-to-dashboard") && window.location.reload();
  }
  
  public onRefreshed = (token: string) => {
    BaseService.subscribers.map(cb => cb(token));
  }
  
  public subscribeTokenRefresh = (cb: any) => {
    BaseService.subscribers.push(cb);
  }
  
  public refreshToken = async () => {
    try {
      const response = await this.post(ApiUrls.refreshToken, {});
      if (response?.data) {
        setToken(response?.data?.token);
        BaseService.setAuthToken(response?.data?.token);
        return response?.data;
      }
    } catch (e) {}
  };

  public static getBaseUrl = () => {
    return process.env.REACT_APP_API_BASE_URL;
  };
  public static getTimeOut = () => {
    return process.env.API_TIMEOUT_ABORT_TIME;
  };
  public getInstance = (): AxiosInstance => {
    return axios.create({
      timeout: 180 * 1000,
      baseURL: this.baseURL,
      headers: {
        authorization: BaseService.authToken,
        // "x-profile-id": BaseService.profileId
      },
    });
  };

  protected setHeaderFromParams(params: any) {
    const headers: any = this.axios.defaults.headers.common;
    if (!!BaseService?.authToken)
      headers[Header.Authorization] = `Bearer ${BaseService.authToken}`;

    const res: any = {};
    res.headers = { ...headers, ...(params.headers || {}) };
    delete params.headers;
    if (params.responseType) {
      res.responseType = params.responseType;
    }
    if (params.signal) {
      res.signal = params.signal;
      delete params.signal;
    }
    res.params = params;
    return res;
  }

  public static setAuthToken(token: string) {
    BaseService.authToken = token;
  }

  public static resetAxios() {
    axios.defaults.headers.common[Header.Authorization] = null;
  }

  newAbortSignal(timeoutMs = this.abortTime || 5000) {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs || 0);
    return abortController.signal;
  }

  async get(url: string, params: any = {}) {
    params["signal"] = this.newAbortSignal(this.abortTime);
    const config = this.setHeaderFromParams(params);
    const response = await this.axios.get(url, config);
    return response;
  }

  async post(url: string, data: any, params: any = {}) {
    params["signal"] = this.newAbortSignal(this.abortTime);
    const config = this.setHeaderFromParams(params);
    const response = await this.axios.post(url, data, config);
    return response;
  }

  async put(url: string, data: any, params: any = {}) {
    params["signal"] = this.newAbortSignal(this.abortTime);
    const config = this.setHeaderFromParams(params);
    const response = await this.axios.put(url, data, config);
    return response;
  }

  async delete(url: string, params: any = {}) {
    params["signal"] = this.newAbortSignal(this.abortTime);
    const config = this.setHeaderFromParams(params);
    const response = await this.axios.delete(url, config);
    return response;
  }
}

export default BaseService;
