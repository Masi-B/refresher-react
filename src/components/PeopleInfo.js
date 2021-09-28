import React from 'react'

function PeopleInfo({infoShow }) {
    return (
      <div>
        <h2>
          {infoShow.name}'s id is {infoShow.id}
        </h2>
      </div>
    );
}

export default PeopleInfo
