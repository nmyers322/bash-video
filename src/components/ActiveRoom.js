import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Participant from './Participant';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
}));

const ActiveRoom = ({activeRoom, rooms}) => {
    const classes = useStyles();
    const participants = activeRoom && rooms && rooms
        .filter(room => room.id === activeRoom.id)
        .flatMap(room => room.participants)
        .filter(participant => !participant.self);
    return <div className={classes.root}>
        { participants && participants.map(participant => 
            <Participant participant={participant} key={participant.id} />
        )}
    </div>;
}

ActiveRoom.propTypes = {
    rooms: PropTypes.array
}

const mapStateToProps = state => ({
    activeRoom: state.activeRoom,
    rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoom);