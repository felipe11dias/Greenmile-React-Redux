export default function user(state = {}, action) {
   
   switch(action.type) {
      case 'USER_CREDENCIALS':
         console.log();
         return [state, action.user];
      default:
         console.log(state);
         return state;
   }
}