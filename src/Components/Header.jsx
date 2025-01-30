import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>NEWSLETTER</div>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search for headlines"
          style={inputStyle}
        />
        <button style={buttonStyle}>SEARCH</button>
      </div>
    </header>
  );
}

const headerStyle = {
  position:'absolute',
  zIndex:'-1',
  top:0,
  left:0,
  width:'100%',
  height: '500px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '10px 20px',
  backgroundColor: '#0a0f0f',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#fff',
  letterSpacing: '2px',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  padding: '10px',
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  width: '250px',
  backgroundColor: '#205a55', // Dark green background for input
  color: '#fff',
  borderRadius: '4px 0 0 4px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  fontSize: '1rem',
  backgroundColor: '#8d3a39', // Red button color
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '0 4px 4px 0',
  fontWeight: 'bold',
};

export default Header;
