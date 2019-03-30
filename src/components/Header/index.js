import React from 'react';
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';

export default assignPropTypes({
    appName: PropTypes.object,
    locale: PropTypes.string,
})((props) => {
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
})