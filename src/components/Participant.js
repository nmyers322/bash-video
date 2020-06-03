import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    media: {
        minHeight: '100%',
        minWidth: '100%',
        transform: 'translate(-20%, 0)'
    },
    root: {
        borderRadius: '50%',
        border: '5px solid #000000',
        height: '25em',
        margin: '3em',
        overflow: 'hidden',
        width: '25em'
    }
}));

const Participant = ({participant}) => {
    const classes = useStyles();
    return <div className={classes.root}>
        { participant && participant.image && <img src={participant.image} className={classes.media} alt="User Media" /> }
    </div>;
}

Participant.propTypes = {
    participants: PropTypes.shape()
}

export default Participant;