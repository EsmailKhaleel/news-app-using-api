import React from 'react';

const Footer = () => {

    return (
        <footer style={footerStyle}>
            <div style={footerTitleStyle}>
                NEWSLETTER
            </div>
            <ul style={footerLinks}>
                <li style={coprRightStyle}>&copy; 2023 Newsletter. All rights reserved</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Copyright Policy</li>
                <li>Data Policy</li>
                <li>Accessibility</li>
                <li>Help</li>
            </ul>

        </footer>
    );
};

export default Footer;
const footerTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '2px',
};
const footerStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: '#0a0f0f',
    margin: 0,
};
const footerLinks={
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
}
const coprRightStyle ={alignSelf:'flex-end'};