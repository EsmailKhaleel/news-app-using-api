import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9309add3b64744e78603af159068adea'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    getNews();
    console.log(news);
  }, []);

  if (news.length === 0 || !news) {
    return (
      <p>Loading news...</p>
    )
  }
  return (
    <>
    <Header/>
    <NavBar/>
    <section id='main-wrapper'>

      <div id='cards-wrapper'>
        {news.map((article, index) => (

          <div id="card">

            <div className="new-image">
              <img src={article.urlToImage} alt={article.title}/>
            </div>

            <div key={index} className="card-content">
                <h3>{article.author}</h3>
                <p>{article.title}</p>
                <p>{article.publishedAt.slice(0,10)}</p>
                <p>{article.description}</p>
            </div>

        </div>
        ))}
      </div>

      <aside style={asideStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Trending Headlines</h2>
        <button style={buttonStyle}>View All</button>
      </div>
      <ul style={listStyle}>
        {news.map((headline, index) => (
          <li key={index} style={itemStyle}>
            <img
              src={headline.urlToImage}
              alt={headline.title}
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h3 style={headlineTitleStyle}>{headline.title}</h3>
              <p style={descriptionStyle}>{headline.description}</p>
              <p style={authorStyle}>
                {headline.author} <span>{headline.publishedAt.slice(0,10)}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
    </section>
    <Footer/>
    </>
  )
}

export default App

// AsideBar Styles
const asideStyle = {
  with: '30%',
  margin: '20px',
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