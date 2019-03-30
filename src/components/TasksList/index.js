import React from 'react';

import TaskItem from '../TaskItem';

export default (props) => {

    const {taskListName,tasks,setDone} = props;

    return (
        <div className="col-12 Task__List">
            <h2 className="h3">{ taskListName }</h2>

            {
                tasks.map(el => (
                    <TaskItem el={el} setDone={setDone}/>
                ))
            }

        </div>
    );
}