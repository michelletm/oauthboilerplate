import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./../actions/types";



export default function(state = 0, action){
   switch(action.type) {
      case INCREMENT_COUNTER:
         return state + 1;
      case DECREMENT_COUNTER:
         return state - 1;
      default:
         return state;
         

   }

}