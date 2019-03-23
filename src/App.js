import React, { Component,Fragment } from 'react';

import './App.css';

export default () => {
  return (
      <Fragment>
          <div className="container">
              <div className="row">
                  <div className="col my-5">
                      <h1>Task manager</h1>
                  </div>
              </div>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-12  my-5 Add__New__Task">
                      <h2 className="h3">
                          Add new task
                      </h2>
                      <form className="">
                          <div className="form-group row">
                              <label htmlFor="taskName" className="col-sm-2 col-form-label">Task</label>
                              <div className="col-sm-10">
                                  <input type="text" className="form-control" id="taskName" placeholder="Enter task" />
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary">Add task</button>
                      </form>
                  </div>
                  <div className="col-12 Task__List">
                      <h2 className="h3">
                          Tasks list
                      </h2>
                      <div className="card my-2 Task__Item">
                          <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                          </div>
                      </div>
                      <div className="card my-2 Task__Item">
                          <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  );
};
