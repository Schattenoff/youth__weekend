import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import { schedule } from './components/ScheduleCart/schedule-cart.constants';
import ScheduleCart from './components/ScheduleCart/ScheduleCart';
import classes from './schedule.module.css';

const Schedule = () => {
  return (
    <section id="schedule" className={classes.schedule}>
      <PageContainer>
        <h1 className={classes.schedule__title}>Расписание</h1>

        <div className={classes.schedule__content}>
          {schedule.map((item) => (<ScheduleCart key={item.id} title={item.title} scheduleText={item.scheduleText} />))}
        </div>
      </PageContainer>
    </section>
  );
};

export default Schedule;