import React from 'react'
import DefaultAvatar from '../../public/images/avatar.png'
import { makeStyles, Theme, createStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userAvatar: {
      float:"right",
      width: '51.27px',
      height: '60px',
    },
    bigAvatar: {
      position: 'fixed',
      width: '51.27px',
      height: '60px',
      right: '293.73px',
      top: '17px',
      "& > img": {
        backgroundColor: '#ffffff'
      }
    }
  }),
);

export default function UserAvatar(props) {
  const classes = useStyles(props.theme);
    return (
        <div className={classes.userAvatar}>
            <Avatar src={DefaultAvatar} className={classes.bigAvatar} />
        </div>
    )
}
