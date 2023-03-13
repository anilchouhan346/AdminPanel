const IntialState = {
  UserData: [],
};

export const UserReducer = (state = IntialState, action) => {
  switch (action.type) {
    case "GET-DATA":
      //   const { id, UserData } = action.payload;
      console.log("actionpayload", action.payload);
      return {
        ...state,
        UserData: action.payload,
      };
    case "SIGNUP-DATA":
      return {
        ...state, 
        UserData: action.payload,
      };
   
    default:
      return state;
  }
};
