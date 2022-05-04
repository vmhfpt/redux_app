const initState = {
    show  : false
}
const showReducer = (state = initState, action) => {
    switch (action.type) {
        case "change" : {
         
             return ({
                       show : action.payLoad
             });
         }
        default : {
            return (state);
        }
    }
  
}
export default showReducer;
