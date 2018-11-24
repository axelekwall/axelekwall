import React, { Component } from 'react';

export const NavigationView = () => (
  <div
    style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      padding: '25px 0',
      width: '100vw',
      backgroundColor: 'white',
      zIndex: 100,
      transition: 'background-color 1s',
      display: 'grid',
      gridTemplateColumns: '25px 1fr 25px',
    }}
  >
    <div style={{
      gridColumnStart: '2'
    }}>
      <h2
        style={{
          margin: '10px auto',
        }}
      >
        axel ekwall
      </h2>
      <h4>developer and photographer</h4>
    </div>
  </div>
);

class Navigation extends Component {
  render() {
    return <NavigationView />;
  }
}

export default Navigation;
