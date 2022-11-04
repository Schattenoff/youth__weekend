import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import classes from './about.module.css';

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <PageContainer>
        <div className={classes.about__container}>
          <div className={classes.about__content}>
            <div className={classes.cart}>
              <img className={classes.about__photo} src="img/main.png" alt="about" />
            </div>

            <article className={classes.about__article}>
              <h2 className={classes.about__title}>Youth weekend - это место силы</h2>
              <p className={classes.about__text}>
                Это христианские молодёжные выезды, конференции, лагеря, где можно вместе  отдыхать, общаться, назидаться и быть в присутствии Божьем.
                Тема нынешнего уик-энда - заповедь Иисуса, которая говорит о любви к ближнему. Кто мой ближний? Что значит любить его, как себя? Как это практически сделать?
                На эти вопросы мы будем искать ответы вместе!
              </p>
            </article>
          </div>

        </div>
      </PageContainer>
    </section>
  );
};

export default About;