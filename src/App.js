import React, { Component,Fragment } from 'react';

import './App.css';

export default class App extends Component {

    state = {
        locale: "en",
        appName: {en: "Task manager", ru: "Менеджер задач"},
        formName: "Add new task",
        buttonName: "Add new task",
        taskListName: "Tasks list",
        tasks: [
            {id: 1, name:"Wake up"},
            {id: 2, name:"Clean your teeth"},
        ],
        inputTaskName: ""
    };

    render(){
        const { locale, appName, formName, buttonName, taskListName, tasks, inputTaskName } = this.state;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col my-5">
                            <h1>{ appName[locale] }</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12  my-5 Add__New__Task">
                            <h2 className="h3">{ formName }</h2>
                            <form className="" onSubmit={this.submitCreateNewTask}>
                                <div className="form-group row">
                                    <label htmlFor="taskName" className="col-sm-2 col-form-label">Task</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="taskName" placeholder="Enter task"
                                              value={inputTaskName} onChange={this.inputTaskNameHandler}/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">{ buttonName }</button>
                            </form>
                        </div>
                        <div className="col-12 Task__List">
                            <h2 className="h3">{ taskListName }</h2>

                            {
                                tasks.map(el => (
                                    <div className="card my-2 Task__Item" key={el.id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{ el.name }</h5>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    inputTaskNameHandler = (e) => {
        const {value} = e.target;

        this.setState({
            inputTaskName: value
        });
    };

    submitCreateNewTask = (e) => {
        e.preventDefault();
        const taskName = this.state.inputTaskName;
        console.log("submitCreateNewTask", e.target[0].value);

        this.setState((state, props) => ({
            tasks: [...state.tasks, {id:state.tasks.length+1, name: taskName}]
        }));
        e.target.reset();
    };
};
