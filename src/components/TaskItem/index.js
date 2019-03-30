import React from 'react';

export default (props) => {

    const {el,setDone} = props;

    return (
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
    );
}