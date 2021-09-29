import React, { Component } from 'react'

const heading = {
    fontSize : '80px',
    color: 'blue'
  }

function inLine() {
  return (
    <div>
      <h1 style={heading}>inline styling</h1>
      <h1 className="error">No</h1>
    </div>
  );
}

export default inLine
