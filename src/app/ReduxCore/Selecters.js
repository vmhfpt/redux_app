import { createSelector } from "@reduxjs/toolkit";

export const getShow = (state) => {
    return (state.getShow.show);
};
export const getList = (state) => {
   
    return (state.getListStudent);
}
export const getKeyBoardSearch = (state) => {
    return (state.getSearch.key);
}

export const getSort = (state) => {
         return (state.getSort.sort);
}

export const getAll = (state) => {
    return (state);
}
export const getRank = (state) => {
     return (state.getRank.rank);
}

/*export const filterSearch = createSelector(getList, getKeyBoardSearch, getSort ,(list, keyboard, typeSort) => {
    
      list = list.filter((value) => {
        return (value.name.includes(keyboard));
     }) ;
     if (typeSort !== false){
        if(typeSort === 'asc'){
            list.sort((a, b) => {
              return a.poin - b.poin;
          });
        }else {
          list.sort((a, b) => {
              return b.poin - a.poin;
          });
        }
   }
   
     return (list);
});*/

export const filterSearch = createSelector(getList, getKeyBoardSearch, getSort ,getRank ,(list, keyboard, typeSort, typeRank) => {
    list = list.filter((value) => {
      return (value.name.includes(keyboard));
   }) ;
   if (typeSort !== false){
      if(typeSort === 'asc'){
          list.sort((a, b) => {
            return a.poin - b.poin;
        });
      }else {
        list.sort((a, b) => {
            return b.poin - a.poin;
        });
      }
 } 
  if(typeRank.length !== 0){
      //var boleen = false;
    list = list.filter((value) => {
        if (typeRank.includes(1)){
           // return value.poin < 5
           if(value.poin < 5){
               return (true);
           }

        }
        if (typeRank.includes(5)){
         if (value.poin >= 5 && value.poin < 6.5){
             return (true);
         }
        }
        if (typeRank.includes(7)){
          if(value.poin >= 6.5 && value.poin <= 7.9){
              return (true);
          }
        }
        if (typeRank.includes(9)){
          if (value.poin >= 8 && value.poin <= 10) {
              return (true);
          }
        }
        return (false);
     }) ;
  }
 
   return (list);
});