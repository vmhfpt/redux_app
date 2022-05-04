const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn Yoga",
      active: false,
      priority: "Medium",
    },
  ],
};

const rootReducer = (state = initState, action) => {
   // console.log(state);
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: 8, name: "Play game", active: "true", priority: "Low" },
        ],
      };
    default: {
      return state;
    }
  }
};
 export default rootReducer;