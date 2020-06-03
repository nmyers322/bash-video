import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    addOrRemoveParticipantsButton: {
        background: "rgba(255, 255, 255, .5)",
    },
    joinButton: {
        background: "rgba(255, 255, 255, .5)",
        marginTop: theme.spacing(1)
    },
    listItemText: {
        "& span": {
            fontWeight: "bold",
            fontSize: "1.3em",
            marginRight: theme.spacing(10),
            marginLeft: theme.spacing(2)
        }
    },
    paper: {
        background: "linear-gradient(45deg, rgba(255, 230, 0, .1), rgba(204, 217, 255, .4))",
        width: '20em'
    },
    participantListItem: {
        marginLeft: theme.spacing(4)
    },
    roomListItem: {
        alignItems: "flex-start",
        background: "rgba(255, 210, 0, .5)",
        marginBottom: theme.spacing(2)
    }
}));

const BashAppBar = ({addParticipant, removeParticipant, rooms}) => {
    const classes = useStyles();
    return <Drawer 
        open={true} 
        anchor={'right'} 
        classes={{paper: classes.paper}}
        variant={'persistent'}>
        <List>
            <ListItem key={'rooms'}>
                <ListItemText primary="Rooms" className={classes.listItemText} />
                <ListItemIcon>
                    <AddCircleIcon />
                </ListItemIcon>
            </ListItem>
            { rooms && rooms.map(room => 
                <ListItem key={room.name} className={classes.roomListItem}>
                    <List>
                        <ListItemText primary={room.name} className={classes.listItemText} />
                        { room.participants && room.participants.map(participant =>
                            <ListItemText primary={participant.name} className={classes.participantListItem} key={participant.id + '-listItemText'} />
                        )}
                    </List>
                    <Button variant={'contained'} className={classes.joinButton} onClick={(event) => event.stopPropagation()}>
                        Join
                    </Button>
                </ListItem>
            )}
            <ListItem key={'addParticipant'}>
                <Button 
                    variant={'contained'}
                    className={classes.addOrRemoveParticipantsButton} 
                    onClick={(event) => addParticipant()}>
                    <AddCircleIcon style={{marginRight: '.5em'}} /> Add Participant
                </Button>
            </ListItem>
            <ListItem key={'removeParticipant'}>
                <Button 
                    variant={'contained'}
                    className={classes.addOrRemoveParticipantsButton} 
                    onClick={(event) => removeParticipant()}>
                    <RemoveCircleIcon style={{marginRight: '.5em'}} /> Remove Participant
                </Button>
            </ListItem>
        </List>
    </Drawer>
}

BashAppBar.propTypes = {
    addParticipant: PropTypes.func,
    removeParticipant: PropTypes.func,
    rooms: PropTypes.array
}

const mapStateToProps = state => ({
    rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
    addParticipant: () => dispatch({ type: "ADD_PARTICIPANT" }),
    removeParticipant: () => dispatch({ type: "REMOVE_PARTICIPANT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(BashAppBar);
