// import styles from './Contactheader.module.css';
// const ContactHeader = () => {
//   return (
//     <div className='container ${styles.contain_section}'>
//       <h1>CONTACT US</h1>
//       <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node = 14.0.0 and npm = 5.6 on your machine. To create a project, run:</p>
//     </div>
//   );
// }
// export default ContactHeader;// ContactHeader.jsx
import React from 'react';
import './ContactHeader.css';
const ContactHeader = () => {
    return (
        <div className='body'>
        <div className="contain_section">
            <h1>Contact us</h1>
          <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You ll need to have Node = 14.0.0 and npm = 5.6 on your machine. To create a project, run:</p>

        </div>
        </div>
    );
};

export default ContactHeader; 