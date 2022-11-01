import {addPostAC, deletePostAC,
    profileReducer, setUserStatusAC,
    UserMessageType, MyPostsItemPropsType} from "./profilePage-reducer";
import {v1} from "uuid";

let startState: MyPostsItemPropsType;

beforeEach(() => {
    startState = {
        myPosts: [
            {
                id: '1',
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all MTB Community',
                likes: 15,
                dislikes: 1
            },
            {
                id: '2',
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all Codewars',
                likes: 10,
                dislikes: 0
            },
            {
                id: '3',
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all FreeCodeCamp',
                likes: 105,
                dislikes: 10
            },
            {
                id: '4',
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all Incubators',
                likes: 105,
                dislikes: 10
            }
        ] as Array<UserMessageType>,
        profile: null,
        status: ''
    }
})

test('new post should be added', () => {
    const newPostMessage = 'new post message';
    // const newPost = {
    //     id: v1(),
    //     avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
    //     nickname: "Crash555",
    //     postMessage: newPostMessage,
    //     likes: 0,
    //     dislikes: 0
    // };
    const endState = profileReducer(startState, addPostAC(newPostMessage));

    expect(endState.myPosts.length).toBe(5);
    expect(endState.myPosts[0].postMessage).toBe('new post message');
    expect(endState.myPosts[0].postMessage.length).toBe(16);
    expect(endState.myPosts[0].likes).toBe(0);
})

test('new post should be deleted', () => {

    const endState = profileReducer(startState, deletePostAC('1'));

    expect(startState.myPosts.length).toBe(4);
    expect(endState.myPosts.length).toBe(3);
    expect(endState.myPosts[0].id).toBe('2');
})

test('new status should be added', () => {
    const newStatusMessage = 'this is my new profile status';
    const endState = profileReducer(startState, setUserStatusAC(newStatusMessage));

    expect(endState.status).toBe('this is my new profile status');
    expect(endState.status.length).toBe(29);
})