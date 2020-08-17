import React from 'react';
import { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';

import TasksList from './TasksList';

const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"];

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const renderTaskList = () => {
    const {tasks} = props
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div className="col-md-3 card m-2 p-0" key={status} status={status} tasks={status.Tasks}>
          <TasksList key={status} status={status} tasks={statusTasks} onStatusChange={props.onStatusChange}/>
        </div>
      );
    }); 
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>
              <AddIcon />
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Task Manager
            </h2>
          </div>
          {cardForm && (
            <div className="container">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task Title"
                    onChange={onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Task Description"
                    onChange={onDescriptionChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div
        className="row d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}>
        {renderTaskList()}
      </div>
    </div>
  );
};

export default TasksPage;
