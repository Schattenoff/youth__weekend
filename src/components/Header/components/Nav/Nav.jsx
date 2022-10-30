import React from 'react';
import { Link } from 'react-scroll';
import { useResize } from '../../../../hooks/useResize';
import MenuBurger from '../MenuBurger/MenuBurger';
import { navigationsItems } from './nav.constants';
import classes from './nav.module.css';

const Nav = () => {
  const { innerWidth: width } = useResize();
  return (
    <div>
      {width < 768 ? <MenuBurger /> : <ul className={classes.nav_ul}>
        {navigationsItems.map((item) => (
          <li key={item.id}>
            <Link
              activeClass='active'
              to={item.anchor}
              spy={true}
              smooth={true}
              duration={1000}
            >{item.title}
            </Link>
          </li>))
        }
      </ul>}

    </div>
  );
};

export default Nav;