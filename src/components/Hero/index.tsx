import React from 'react';
import classes from './styles.module.scss';

const Hero: React.FC<ScreenProps> = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.mainHeading}>Your Receipt</h1>
      <div className={classes.secondaryHeadingContainer}>
        <h2 className={classes.secondaryHeading}>Free.</h2>
        <h2 className={classes.secondaryHeading}>Intuitive.</h2>
        <h2 className={classes.secondaryHeading}>Quick.</h2>
      </div>
      <p className={classes.description}>
        A convenient tool to quickly generate receipts right from the browser
        and lets you save them easily to your system. It's completely
        <span className={classes.highlight}> free</span> to use, so get started
        on making those bills right away.
      </p>
    </section>
  );
};

export default Hero;
