import React from "react";
import { connect } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import TasksPage from "./components/TasksPage";
import { editTask } from "./actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  return (
    <div className="App">
      <TasksPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
