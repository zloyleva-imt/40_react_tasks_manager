import React from 'react';
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';

export default assignPropTypes({
    taskListName: PropTypes.string,
    tasks: PropTypes.array,
    setDone: PropTypes.func,
})((props) => {

    const {taskListName,tasks,setDone} = props;

    return (
        <div className="col-12 Task__List">
            <h2 className="h3">{ taskListName }</h2>

            {
                tasks.map(el => (
                    <TaskItem el={el} setDone={setDone} key={el.id}/>
                ))
            }

        </div>
    );
})