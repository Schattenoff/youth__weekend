import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { navigationsItems } from '../Nav/nav.constants';
import classes from './menu-burger.module.css';

const MenuBurger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenMenu])

  return (
    <>
      <button className={classes.burger} onClick={openMenu}>☰</button>
      {isOpenMenu && <div className={classes.container__burger}>
        <button className={classes.burger__close} onClick={closeMenu}>+</button>
        <div className={classes.container_nav}>
          <ul className={classes.nav_ul}>
            {navigationsItems.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={closeMenu}
                  activeClass='active'
                  to={item.anchor}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >{item.title}
                </Link>
              </li>))
            }
          </ul>
        </div>
      </div>
      }
    </>
  );
};

export default MenuBurger;