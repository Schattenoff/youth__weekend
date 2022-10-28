import React from 'react';
import classes from './footer.module.css';


const Footer = () => {
  const data = new Date();
  return (
    <footer className={classes.footer} id="footer">
      <p>{`Youth weekend. Все права защищены. ${data.getFullYear()}`}</p>
    </footer>
  );
};

export default Footer;