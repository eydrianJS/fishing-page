import React from 'react'
import { useButtonLogStyles } from '../styles/styles';

export default function LogButton(props) {
    const classes = useButtonLogStyles(props.theme);
    return (
        <div className={classes.userAvatar}>
            <button className={classes.button}>LOGOWANIE</button>
        </div>
    )
}
