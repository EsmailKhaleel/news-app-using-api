import React from 'react';

function AsideBar() {

  return (
    <aside style={asideStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Trending Headlines</h2>
        <button style={buttonStyle}>View All</button>
      </div>
      <ul style={listStyle}>
        {trendingHeadlines.map((headline, index) => (
          <li key={index} style={itemStyle}>
            <img
              src={headline.image}
              alt={headline.title}
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h3 style={headlineTitleStyle}>{headline.title}</h3>
              <p style={descriptionStyle}>{headline.description}</p>
              <p style={authorStyle}>
                {headline.author} <span>{headline.date}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const asideStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const buttonStyle = {
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '0.9rem',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const itemStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const contentStyle = {
  flex: 1,
};

const headlineTitleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#000',
  margin: '0 0 5px 0',
};

const descriptionStyle = {
  fontSize: '0.85rem',
  color: '#555',
  margin: '0 0 10px 0',
};

const authorStyle = {
  fontSize: '0.75rem',
  color: '#777',
};

export default AsideBar;
