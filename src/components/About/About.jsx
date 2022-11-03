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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
          </div>

        </div>
      </PageContainer>
    </section>
  );
};

export default About;