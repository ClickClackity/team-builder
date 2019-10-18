import React from 'react';
import Member from './Member';

const DisplayMembers = ({members}) =>{
    return(
        <div className="team-members">
            {members.map((member, index) =>{
                return <Member key={index}  {...member}/>
            })}
        </div>
    );
};

export default DisplayMembers;