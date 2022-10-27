import React from 'react';
import { Link } from 'react-scroll';
import { navigationsItems } from './nav.constants';
import classes from './nav.module.css';

const Nav = () => {
  return (
    <div>
      <ul className={classes.nav_ul}>
        {navigationsItems.map((item) => (<li key={item.id}><Link
          activeClass='active'
          to={item.anchor}
          spy={true}
          smooth={true}
          duration={1000}
        >{item.title}</Link></li>))
        }

      </ul>
    </div>
  );
};

export default Nav;