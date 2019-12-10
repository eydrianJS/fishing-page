import React, { Component } from 'react'
import MyImage from '../../public/images/logo.png'
import { useLogoStyles } from '../styles/styles';

export default function Logo(props) {
    const classes = useLogoStyles(props.theme);

    return (
        <div className={classes.images}>
            <img src={MyImage} alt="torchlight in the sky" />
        </div>
    )
}
