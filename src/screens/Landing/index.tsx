import React from 'react';
import Hero from '../../components/Hero';
import classes from './styles.module.scss';

const Landing: React.FC<ScreenProps> = () => {
  return (
    <header className={classes.heroContainer}>
      <Hero />
    </header>
  );
};

export default Landing;
