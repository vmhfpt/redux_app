import { v4 as randomId } from "uuid";
const initState = [
  {
    id : 1,
    name: "Vũ Minh Hùng",
    poin: 4.3,
    age: 21,
    code: "DTC1954801030037",
  },
];
const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case "student/add": {
      return [
        ...state,
        {
          id : randomId(),
          name: action.payLoad.name,
          poin: action.payLoad.poin,
          age: action.payLoad.age,
          code: action.payLoad.code,
        },
      ];
    }
    case "student/delete": {
      var arrayDelete = state.filter((value, key) => value.id !== action.payLoad);
      return arrayDelete;
    }
    case "student/update" : {
     
        return (state.map((value, key) => value.id === action.key ? { 
          ...value,
           name: action.payLoad.name,
          poin: action.payLoad.poin,
          age: action.payLoad.age,
          code: action.payLoad.code } : value ));
    }
    default: {
      return state;
    }
  }
};
export default studentReducer;
