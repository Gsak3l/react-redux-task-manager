/*----------REDUCER----------*/
const initialState = [
  {
    id: 1, 
    title: "Αντίο", 
    description: "Όπλο μία και Έξω", 
    status: "Unstarted"
  },
  {
    id: 2, 
    title: "Χάπια με Αλκοόλ", 
    description: "3 με κάθε ποτήρι Ουίσκι", 
    status: "In Progress"
  },
  {
    id: 3, 
    title: "Ξυράφι", 
    description: "Κόβεις Πάντα Παράλληλα", 
    status: "Completed"
  },
  
];

const tasks = (state = { tasks: initialState}, action) =>{
  if(action.type === "EDIT_TASK") {
    const {payload} = action;
    return {
      tasks: state.tasks.map((task) => {
        if(task.id === payload.id) {
          return Object.assign({}, task, payload.params);
        }
        return task;
      })
    }
  }
};

export default tasks;
