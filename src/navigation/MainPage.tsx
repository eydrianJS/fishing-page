import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Body from './Body';
import Header from './Header';
import HeaderImage from '../components/HeaderImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: '80px',
      width: '100%',
      float: 'left'
    },
    images: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden'
    },
    imagesLine: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '80px',
      backgroundColor: '#ffffff',
      zIndex: 2,
    },
    body: {
      position: 'relative',
      top: '120px'
    }
  }),
);

export default function MainPage(props) {
  const classes = useStyles(props.theme);

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