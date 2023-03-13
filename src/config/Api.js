
const API = {
    Admin: {
      AdminLogin: "admin/login",
      Forgot_Password: "admin/forgot-password",
      GET_USER_LIST: "admin/getuser-list",
      USER_REGISTER: "user/register",
      USER_ADD_EDIT: "admin/add-edit-user",
      USER_REMOVE: "admin/remove-user",
      GET_COUNTRY_LIST: "admin/getcountry-list",
    },
    // User: {
    //   RegisterUser: "user/signup-user",
    //   EmailVerify: "user/email-verification",
    //   UserForgotPassword: "user/forgot-password",
    //   ResetPassword: "user/reset-password",
    //   UserLogin: "user/login",
    //   editUserProfile:"/user/edit-user",
    //   changeUserPassword:"/user/change-password",
    //   generateTwoFactor:'/user/generate-2FA',
    //   VerifyTwoFactor:'/user/verify-2FA',
    //   DisableTwoFactor:'/user/disable-2FA'
    // },
    Users:{
        RegisterUsers:"create",
        UserLogin:"login",
        Get_All_Users:"getall",
        GET_Users_Id:"getone",
        Edit_User:"edit",
        DELETE_USER:"delete"
    }
    
  };
  export { API };
  