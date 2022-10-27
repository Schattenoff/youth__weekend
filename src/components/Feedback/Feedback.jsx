import React, { useRef } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import emailjs from '@emailjs/browser';
import classes from './feedback.module.css';
import { emailjsKeys } from './feedback.constants';
import { useForm } from 'react-hook-form';

const Feedback = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'all' });
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(emailjsKeys.serviceID, emailjsKeys.templateID, form.current, emailjsKeys.publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="feedback" className={classes.feedback}>
      <PageContainer>
        <h1 className={classes.feedback__title}>Отзыв</h1>
        <form className={classes.feedback__form} ref={form} onSubmit={handleSubmit(sendEmail)}>
          <label className={classes.form__label}>Имя</label>
          <input className={classes.form__input} type="text"{...register("user_name", { required: true })} />
          { }
          <label className={classes.form__label}>Комментарий</label>
          <textarea className={classes.form__textarea} {...register("message", { required: true })} />
          <button className={!isValid ? classes.button__disabled : classes.form__button} type="submit" disabled={!isValid}>Отправить</button>
        </form>
      </PageContainer>
    </section >
  );
};

export default Feedback;