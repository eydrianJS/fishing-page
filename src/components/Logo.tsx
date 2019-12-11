import  * as React from 'react'
import MyImage from '../images/logo.png'
import { useLogoStyles } from '../styles/styles';

export default function Logo() {
    const classes = useLogoStyles();

    return (
        <div className={classes.images}>
            <img src={MyImage} alt="torchlight in the sky" />
        </div>
    )
}
