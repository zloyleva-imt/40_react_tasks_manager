import React from 'react';

export default (props) => {
    const {appName, locale} = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col my-5">
                    <h1>{ appName[locale] }</h1>
                </div>
            </div>
        </div>
    );
}