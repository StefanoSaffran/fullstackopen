import React from 'react';

const Filter = props => {
    return (
        <div>
            filter shown with <input onChange={props.handleFilter} />
        </div>
    );
};

export default Filter