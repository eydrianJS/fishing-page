
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

export const useMainPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: '80px',
      width: '100%',
      float: 'left',
      position: 'fixed'
    },
    images: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden'
    },
    imagesLine: {
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '80px',
      backgroundColor: '#ffffff',
      zIndex: 2,
    },
    body: {
      position: 'relative',
      top: '260px'
    }
  }),
);

export const useBodyStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "calc(100% - 24px)"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export const useButtonLogStyles = makeStyles((theme: Theme) =>
  createStyles({
    userAvatar: {
      float: "right"
    },
    button: {
      position: 'relative',
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

export const useUserAvatarStyles = makeStyles((theme: Theme) =>
  createStyles({
    userAvatar: {
      float: "right",
      width: '51.27px',
      height: '60px',
    },
    bigAvatar: {
      position: 'relative',
      width: '51.27px',
      height: '60px',
      right: '103.73px',
      top: '23px',
      "& > img": {
        backgroundColor: '#ffffff'
      }
    }
  }),
);

export const useLogoStyles = makeStyles((theme: Theme) =>
  createStyles({
    images: {
      float: 'left',
      position: 'relative',
      width: '341px',
      height: '74px',
      left: '30px',
      top: '5px'
    }
  }),
);