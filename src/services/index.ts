import BaseService from "./Base";
import AuthService from "./AuthService";

const authService = new AuthService();
const baseService = new BaseService();

export {
  authService,
  baseService
};
