import React from 'react';

const UserCount = (props) => {
    console.log(props);
    return (
        <div>
            <h4>count:  {props.userCounts.length}</h4>
        </div>
    );
};

export default UserCount;