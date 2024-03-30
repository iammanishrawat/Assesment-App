const ApiUrls = {
  //Auth APIs Url
  loginAs: "/v2/auth/login-as",
  login: "/v2/auth/sign-in",
  sendOTP: "/v1/auth/send-otp",
  resetPassword: "/v1/auth/reset-password",
  verifyPassword: "/v1/auth/verify-otp",
  refreshToken: "/v2/auth/refresh-token",
  register: "/v2/auth/register",
  sentOtpByHash: "/v2/auth/send-otp-hash",
  verifyOtpByHash: "/v2/auth/verify-otp-by-hash",
  setNewPassword: "/v2/auth/set-new-password",
  forgotPassword: "/v2/auth/forgot-password",
  changePassword: "/v2/auth/change-password",
  sentOtpByUserName: "/v2/auth/send-otp-by-username",
  generateTempToken: "/v2/auth/generate-temporary-token",
  getMe: "/v2/auth/get-me",
  signOut: "/v2/auth/sign-out",
  

};

export default ApiUrls;
