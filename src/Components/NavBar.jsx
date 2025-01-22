import React, { useState } from 'react';

function NavBar() {
  const [active, setActive] = useState('World');

  const menuItems = [
    'Politics',
    'World',
    'Economy',
    'Science & Tech',
    'Business',
    'Travel',
    'Climate',
    'Lifestyle',
    'Food',
    'Sports',
  ];

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            style={{
              ...liStyle,
              ...(active === item ? activeStyle : {}),
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#0a0f0f',
  padding: '10px 20px',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
};

const liStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#fff',
  cursor: 'pointer',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const activeStyle = {
  backgroundColor: '#205a55', // Highlighted green
  color: '#fff',
};

export default NavBar;
