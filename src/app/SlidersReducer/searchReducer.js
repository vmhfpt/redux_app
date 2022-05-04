const initState = {
    key : ''
}
const searchReducer = (state = initState, action) => {
   switch(action.type){
       case 'keyboard' :  {
          return ({
              key : action.payLoad
          });
       }
       default : {
           return (state);
       }
   }
}
export default searchReducer;