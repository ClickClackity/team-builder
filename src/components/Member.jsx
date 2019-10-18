import React from 'react';

const Member = ({name, email, role}) =>{

    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>        
        </div>
    );
};

export default Member;