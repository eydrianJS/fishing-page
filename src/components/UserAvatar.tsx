import  * as React from 'react'
import DefaultAvatar from '../../public/images/avatar.png'
import { Avatar } from '@material-ui/core';
import { useUserAvatarStyles } from '../styles/styles';

export default function UserAvatar(props) {
  const classes = useUserAvatarStyles(props.theme);
    return (
        <div className={classes.userAvatar}>
            <Avatar src={DefaultAvatar} className={classes.bigAvatar} />
        </div>
    )
}
