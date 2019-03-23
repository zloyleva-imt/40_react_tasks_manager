import React from 'react';

export default (props) => {

    const {formName, hasError, inputTaskName, buttonName, inputTaskNameHandler, submitCreateNewTask} = props;

    return (
        <div className="col-12  my-5 Add__New__Task">
            <h2 className="h3">{ formName }</h2>
            <form className=""
                  onSubmit={submitCreateNewTask}
            >
                <div className="form-group row">
                    <label htmlFor="taskName" className="col-sm-2 col-form-label">Task</label>
                    <div className="col-sm-10">
                        <input type="text" className={`form-control ${hasError?'is-invalid':''}`}
                               id="taskName" placeholder="Enter task" value={inputTaskName}
                               onChange={inputTaskNameHandler}
                        />
                        <div className="invalid-feedback">
                            Please enter more characters.
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{ buttonName }</button>
            </form>
        </div>
    );
}