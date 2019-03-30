import React, { Component,Fragment } from 'react';

import './App.css';

import Header from './components/Header'
import AddNewTask from './components/AddNewTask'

export default class App extends Component {

    state = {
        locale: "en",
        appName: {en: "Task manager", ru: "Менеджер задач"},
        formName: "Add new task",
        buttonName: "Add new task",
        taskListName: "Tasks list",
        tasks: [
            {id: 1, name:"Wake up", isDone:false},
            {id: 2, name:"Clean your teeth", isDone:false},
        ],
        inputTaskName: "",
        hasError: false,
        tabsState: "all",
    };

    render(){
        const { locale, appName, formName, buttonName, taskListName, tasks, inputTaskName, hasError, tabsState } = this.state;

        return (
            <Fragment>
                <Header appName={appName} locale={locale}/>

                <div className="container">
                    <div className="row">

                        <AddNewTask {...{
                            formName,
                            hasError,
                            inputTaskName,
                            buttonName,
                            inputTaskNameHandler:this.inputTaskNameHandler,
                            submitCreateNewTask:this.submitCreateNewTask
                        }} />

                        <div className="col-12 mb-3">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className={`nav-link ${(tabsState === "all"?"active":"")}`} href="#"
                                        onClick={() => {this.changeTabs("all")}}>All</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${(tabsState === "active"?"active":"")}`} href="#"
                                       onClick={() => {this.changeTabs("active")}}>Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${(tabsState === "done"?"active":"")}`} href="#"
                                       onClick={() => {this.changeTabs("done")}}>Done</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 Task__List">
                            <h2 className="h3">{ taskListName }</h2>

                            {
                                tasks.map(el => (
                                    <div
                                        className={`card my-2 Task__Item ${(el.isDone?"bg-secondary text-white":"")}`} key={el.id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{ el.name }</h5>
                                            {
                                                el.isDone?
                                                    null
                                                    :
                                                    <button className="btn btn-primary"
                                                            onClick={() => {this.setDone(el.id)}}>Done</button>
                                            }
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

    changeTabs = (tabStatus) => {
        console.log("changeTabs");

        this.setState({
            tabsState: tabStatus
        })
    };

    setDone = (id) => {
        const {tasks} = this.state;
        this.setState({
            tasks: tasks.map(el => el.id === id?{...el, isDone:true}:el)
        });
    };

    inputTaskNameHandler = (e) => {
        const {value} = e.target;

        this.setState({
            inputTaskName: value,
            hasError: false
        });
    };

    submitCreateNewTask = (e) => {
        e.preventDefault();
        const taskName = this.state.inputTaskName;

        if(taskName.length > 3){
            this.setState((state, props) => ({
                tasks: [...state.tasks, {id:state.tasks.length+1, name: taskName, isDone:false}]
            }));
            this.setState({
                inputTaskName: ""
            });
        }else {
            this.setState({
                hasError: true
            });
        }

    };
};
