import React, { Component } from 'react'
import MyImage from '../../public/images/logo.png'
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        images: {
            float: 'left',
            position: 'fixed',
            width: '341px',
            height: '74px',
            left: '130px',
            top: '5px'
        }
    }),
);

export default function Logo(props) {
    const classes = useStyles(props.theme);

    return (
        <div className={classes.images}>
            <img src={MyImage} alt="torchlight in the sky" />
        </div>
    )
}
