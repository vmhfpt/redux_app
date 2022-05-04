const initState = {
    sort : false,
    rank : []
};
const filterReducer = (state = initState, action) => {
     switch (action.type) {
         case "changeSort" : {
             return {
                 ...state,
                 sort : action.payLoad
             }
         }
         case  'changeRank' : {
             if(state.rank.includes(action.payLoad)){
               var arrayDelete = state.rank.filter((value) => value !== action.payLoad);
              // console.log('change',arrayDelete);
              ///  return arrayDelete;
            
              return {
                ...state,
                rank :  arrayDelete
                
            }
             }else {
                return {
                    ...state,
                    rank : [
                        ...state.rank,
                        action.payLoad
                    ]
                }
             }
            
         }
         default : {
             return (state);
         }
     }
}
export default filterReducer;