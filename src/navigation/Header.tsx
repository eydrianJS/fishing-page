import  * as React from 'react';
import Logo from '../components/Logo';
import LoggingIn from '../components/LoggingIn';
import { Grid } from '@material-ui/core';

export default function Header(props) {

  return (
    <>
      <Grid container>
        <Grid item sm={12} md={9} lg={9}>
          <Logo />
        </Grid>

        <Grid item sm={12} md={3} lg={3}>
          <LoggingIn />
        </Grid>
      </Grid>
    </>
  );
}