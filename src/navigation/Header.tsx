import React from 'react';
import Logo from '../components/Logo';
import UserAvatar from '../components/UserAvatar';
import LogButton from '../components/LogButton';
import { useHeaderStyles } from '../styles/styles';

export default function Header(props) {
  const classes = useHeaderStyles(props.theme);

  return (
      <>
        <Logo />
        <LogButton />
        <UserAvatar />
      </>
  );
}