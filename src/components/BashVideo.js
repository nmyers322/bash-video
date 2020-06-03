import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BashAppBar from './BashAppBar';
import ActiveRoom from './ActiveRoom';

const useStyles = makeStyles(theme => ({
    content: {
        marginRight: '20em'
    },
    root: {
        height: '100%',
        width: '100%',
        minHeight: '100%',
        margin: '0'
    }
}));

const BashVideo = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <BashAppBar />
        <div className={classes.content}>
            <ActiveRoom />
        </div>
    </div>;
}

export default BashVideo;