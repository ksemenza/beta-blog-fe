import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./user-action";

const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  posts: [
    {
      id: "",
      title: "",
      content: "",
      topic: "",
      user_id: "",
      comments: [
        {
          id: "",
          comment: "",
          post_id: "",
          notifications: [
            {
              id: "",
              reaction: "",
              comment_id: "",
            },
          ],
        },
      ],
    },
  ],
  isLoggedIn: false,
  isRegistered: false,
  isLoggingOut: false,
  isLoggingIn: false,
  isLoggedOut: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      console.log(state, action);
      return {
        ...state,
        isRegistered: false,
        isRegistering: true,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    //REGISTER START

    case REGISTER_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        isRegistered: true,
        isLoggingIn: false,
        id: action.payload.user.id,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        username: action.payload.user.username,
        email: action.payload.user.email,
        error: "REGISTER SUCCESSFUL",
      };

    case REGISTER_FAILURE:
      // console.log(state, action)
      return {
        ...state,
        isRegistered: false,
        err: "REGISTER FAILURE",
      };
    //LOGIN START

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };

    case LOGIN_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        isLoggedIn: true,
        isRegistered: true,
        isLoggingIn: false,
        id: action.payload.user.id,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        username: action.payload.user.username,
        email: action.payload.user.email,
        error: "",
      };
    case LOGIN_FAILURE:
      // console.log(state, action)
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        error: "Login User Failure",
      };
    //LOGOUT START

    case LOGOUT_REQUEST:
      console.log(state, action);
      return {
        ...state,
        isLoggingOut: true,
        isRegistered: true,
      };

    case LOGOUT_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        isLoggedOut: true,
        isLoggingOut: true,
        isLoggedIn: false,
        isRegistered: false,
      };
    //  LOGOUT
    case LOGOUT_FAILURE:
      console.log(state, action);
      return {
        ...state,
        isLoggingOut: false,
        isLoggedOut: false,
        isLoggedIn: true,
        error: "Logout Fail",
      };
    default:
      return state;
  }
};
export default userReducer;
