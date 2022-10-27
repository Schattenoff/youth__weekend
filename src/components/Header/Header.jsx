import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header} id="header">
      <PageContainer>
        <div className={classes.header__content}>
          <Logo />
          <Nav />
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;