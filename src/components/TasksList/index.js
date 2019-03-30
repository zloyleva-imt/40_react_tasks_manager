import React from 'react';

export default (props) => {

    const {taskListName,tasks,setDone} = props;

    return (
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
                                            onClick={() => {setDone(el.id)}}>Done</button>
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    );
}