import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userAvatar: {
            float: "right"
        },
        button: {
            position: 'fixed',
            width: '175px',
            height: '50px',
            right: '95px',
            top: '16px',
            background: '#FBB040',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '25px',
            cursor: 'pointer'
        }
    }),
);

export default function LogButton(props) {
    const classes = useStyles(props.theme);
    return (
        <div className={classes.userAvatar}>
            <button className={classes.button}>LOGOWANIE</button>
        </div>
    )
}
