import React from 'react';
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';

export default assignPropTypes({
    tabsState: PropTypes.string,
    changeTabs: PropTypes.func,
})((props) => {

    const {tabsState, changeTabs} = props;

    return (
        <div className="col-12 mb-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <button className={`btn nav-link ${(tabsState === "all"?"active":"")}`}
                       onClick={() => {changeTabs("all")}}>All</button>
                </li>
                <li className="nav-item">
                    <button className={`btn nav-link ${(tabsState === "active"?"active":"")}`}
                       onClick={() => {changeTabs("active")}}>Active</button>
                </li>
                <li className="nav-item">
                    <button className={`btn nav-link ${(tabsState === "done"?"active":"")}`}
                       onClick={() => {changeTabs("done")}}>Done</button>
                </li>
            </ul>
        </div>
    );
})
