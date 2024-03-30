import { get } from "lodash";
import BaseService from "./Base";
import apiUrls from "./ApiUrl";

class AuthService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_BASE_URL);
  }

  //   async getOtp(data: any, params = {}) {
  //     try {
  //       const response = await this.post(apiUrls.sendOTP, data, params);
  //       return get(response, "data.data", {});
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   async otpSignIn(data: Auth.SignInParams, params = {}) {
  //     try {
  //       const response = await this.post(apiUrls.login, data, params);
  //       return get(response, "data.data", {});
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  async signIn(data: any): Promise<any> {
    try {
      const response = await this.post(apiUrls.login, data);
      return get(response, "data", {});
    } catch (e: any) {
      throw e?.response?.data;
    }
  }

  async sentOtpByHash(data: any): Promise<any> {
    try {
      const response = await this.post(apiUrls.sentOtpByHash, data);
      return get(response, "data", {});
    } catch (e: any) {
      throw e?.response?.data;
    }
  }

 
}

export default AuthService;
