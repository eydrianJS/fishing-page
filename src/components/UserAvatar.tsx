import  * as React from 'react'
import DefaultAvatar from '../images/avatar.png'
import { Avatar } from '@material-ui/core';
import { useUserAvatarStyles } from '../styles/styles';

export default function UserAvatar() {
  const classes = useUserAvatarStyles();
    return (
        <div className={classes.userAvatar}>
            <Avatar src={DefaultAvatar} className={classes.bigAvatar} />
        </div>
    )
}
