import React from 'react';
import classes from './schedule-cart.module.css';

const ScheduleCart = ({ title, scheduleText }) => {
  return (
    <div className={classes.schedule__cart}>
      <h2 className={classes.cart__title}>{title}</h2>
      <div className={classes.cart}>
        <article className={classes.cart__article}>
          {scheduleText.map((text) => (<p className={classes.cart__text} key={text}>{text}</p>))}
        </article>
      </div>
    </div>
  );
};

export default ScheduleCart;