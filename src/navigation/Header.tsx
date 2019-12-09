import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Logo from '../components/Logo';
import UserAvatar from '../components/UserAvatar';
import LogButton from '../components/LogButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Header(props) {
  const classes = useStyles(props.theme);

  return (
      <>
        <Logo />
        <LogButton />
        <UserAvatar />
      </>
  );
}