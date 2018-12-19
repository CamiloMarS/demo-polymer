//Actions
export const addTodo = "ADD_TODO";
export const deleteTodo = "DELETE_TODO";
export const updateTodo = "UPDATE_TODO";
export const setStatusTodo = "SET_STATUS_TODO";

//State
const initState = {
  listTodo: [],
  totalTodo: 0,
  todoCompleted: 0,
  message: ""
};

function todoReducer(state = initState, action) {
  switch (action.type) {
    case addTodo: {
      return {
        ...state,
        listTodo: [state.listTodo, { ...action.payload }],
        totalTodo: state.totalTodo++,
        message: "Todo added"
      };
    }
    case deleteTodo: {
      return {
        ...state,
        listTodo: state.listTodo.filter(todo => todo.id !== action.payload.id),
        totalTodo: state.totalTodo--,
        message: "Todo removed"
      };
    }
    default:
      return state;
  }
}

export default todoReducer;
