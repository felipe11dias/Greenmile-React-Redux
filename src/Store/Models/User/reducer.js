export default function user(state = {}, action) {

   switch(action.type) {
      case '@user/USER_SUCCESS':
         return {...state, user: action.user};

      case '@user/USER_FAILED':
         return state;

      case '@user/USER_TESTE':
         return state;
         
      default:
         return state;
   }
}