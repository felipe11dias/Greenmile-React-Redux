const INITIAL_STATE = {
   user: null,
};

export default function user(state = INITIAL_STATE, action) {

   switch(action.type) {

      case '@user/USER_SUCCESS':
         console.log(action.user);
         return {...state, user: action.user};

      case '@user/USER_FAILED':  
         return state;

      case '@user/USER_TESTE':
         return state;

      default:
         return state;
   }
}