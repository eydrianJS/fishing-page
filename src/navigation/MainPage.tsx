import React from 'react';

import Body from './Body';
import Header from './Header';
import HeaderImage from '../components/HeaderImage';
import { useMainPageStyles } from '../styles/styles';

export default function MainPage(props) {
  const classes = useMainPageStyles(props.theme);

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.images}>
          <HeaderImage/>
        </div>
        <div className={classes.imagesLine}>
          <Header />
        </div>
      </header>
      <div className={classes.body}>
        <Body />  
      </div>
    </div>

  );
}