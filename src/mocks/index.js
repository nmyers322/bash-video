import { v4 as uuidv4 } from 'uuid';
import user1 from './user1.jpg';
import user2 from './user2.jpg';
import user3 from './user3.jpg';
import user4 from './user4.jpg';
import user5 from './user5.jpg';
import user6 from './user6.jpg';

const users = [
    {
        name: "Beth",
        image: user1
    },
    {
        name: "Sam",
        image: user2
    },
    {
        name: "Darrel",
        image: user3
    },
    {
        name: "John",
        image: user4
    },
    {
        name: "Jake",
        image: user5
    },
    {
        name: "Sue",
        image: user6
    }
];

export const getMockUser = () => ({
    id: uuidv4(),
    ...users[Math.floor(Math.random() * 6)]
});
    
