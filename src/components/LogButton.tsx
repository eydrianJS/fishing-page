import * as React from 'react'
import { useButtonLogStyles } from '../styles/styles';

export default function LogButton() {
    const classes = useButtonLogStyles();
    return (
        <div className={classes.userAvatar}>
            <button className={classes.button}>LOGOWANIE</button>
        </div>
    )
}
