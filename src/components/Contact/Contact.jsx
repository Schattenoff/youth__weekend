import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import classes from './contact.module.css';

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <PageContainer>
        <h1 className={classes.contact__title}>Контакты</h1>

        <div className={classes.contact__content}>

          <div className={classes.contact__profile}>
            <img className={classes.contact__circle} src="img/Sivolobov.JPG" alt="Sivolobov"></img>
            <div className={classes.profile__info}>
              <h2>Сиволобов Алексей Станиславович</h2>
              <p>Региональный пастор</p>
              <p className={classes.profile__mobile}>Телефон: <a href="tel:+375297118149">+375 (29) 711-81-49</a></p>
            </div>
          </div>

          <div className={classes.contact__profile}>
            <img className={classes.contact__circle} src="img/Xandriko.JPG" alt="Xandriko" ></img>
            <div className={classes.profile__info}>
              <h2>Хандрико Иван Анатольевич</h2>
              <p>Ответственный за молодежь Витебской области</p>
              <p className={classes.profile__mobile}>Телефон: <a href="tel:+375336949296">+375 (33) 694-92-96</a></p>
            </div>
          </div>

          <div className={classes.contact__social}>
            <p className={classes.contact__instagram}>
              <a className={classes.instagram__link} href='https://www.instagram.com/youth_weekend_vtb/' target="_target">
                <img className={classes.instagram__icon} src="img/instagram__icon.svg" alt="Instagram" /> @youth__weekend_vtb
              </a>
            </p>
          </div>


        </div>
      </PageContainer>
    </section>
  );
};

export default Contact;