import { getMockUser } from '../mocks';
import { v4 as uuidv4 } from 'uuid';

const initialMockUsers = [
    getMockUser(),
    getMockUser(),
    getMockUser(),
    getMockUser(),
    getMockUser()
];

const initialState = {
    activeRoom: {
        id: 'c036417c-ddb0-451c-bb83-62f49513e4c0'
    },
    rooms: [
        {
            id: 'c036417c-ddb0-451c-bb83-62f49513e4c0',
            name: 'Room A',
            participants: [
                {
                    id: uuidv4(),
                    name: 'Your Name',
                    self: true
                },
                ...initialMockUsers
            ]
        },
        {
            id: '5ffda643-da86-4618-a724-9ca6142c8739',
            name: 'Room B',
            participants: [
                {
                    id: uuidv4(),
                    name: 'User 1'
                },
                {
                    id: uuidv4(),
                    name: 'User 2'
                }
            ]
        },
        {
            id: 'efed22d9-e442-48be-ab02-860dec1687e3',
            name: 'Room C',
            participants: [
                {
                    id: uuidv4(),
                    name: 'User 1'
                },
                {
                    id: uuidv4(),
                    name: 'User 2'
                }
            ]
        }
    ]
};

const reducer = (state = initialState, action) => {
    let activeRoomIndex, newParticipants, newRooms;
    switch(action.type) {
        case "ADD_PARTICIPANT": 
            newRooms = [...state.rooms];
            activeRoomIndex = state.rooms.findIndex(room => room.id === state.activeRoom.id);
            if (activeRoomIndex !== -1) {
                newParticipants = [...state.rooms[activeRoomIndex].participants];
                newParticipants.push(getMockUser());
                newRooms[activeRoomIndex] = {
                    ...newRooms[activeRoomIndex],
                    participants: newParticipants
                };
            }
            return {
                ...state,
                rooms: [
                    ...newRooms
                ]
            };
        case "REMOVE_PARTICIPANT":
            newRooms = [...state.rooms];
            activeRoomIndex = state.rooms.findIndex(room => room.id === state.activeRoom.id);
            if (activeRoomIndex !== -1) {
                newParticipants = [...state.rooms[activeRoomIndex].participants];
                newParticipants = newParticipants.slice(0, newParticipants.length - 1);
                newRooms[activeRoomIndex] = {
                    ...newRooms[activeRoomIndex],
                    participants: newParticipants
                };
            }
            return {
                ...state,
                rooms: [
                    ...newRooms
                ]
            };
        default:
            return state;
    }
}

export default reducer;