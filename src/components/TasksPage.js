import React from "react";
import { useState } from "react";
// Material Icons
import AddIcon from "@material-ui/icons/Add";

const TasksPage = () => {
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
    </div>
  );
};

export default TasksPage;
