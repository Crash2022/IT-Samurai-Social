import {addPostAC, MyPostsItemPropsType, profileReducer, UserMessageType} from "./profilePage-reducer";
import {v1} from "uuid";

let startState: MyPostsItemPropsType;

beforeEach(() => {
    startState = {
        myPosts: [
            {
                id: v1(),
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all MTB Community',
                likes: 15,
                dislikes: 1
            },
            {
                id: v1(),
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all Codewars',
                likes: 10,
                dislikes: 0
            },
            {
                id: v1(),
                avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
                nickname: 'Crash555',
                postMessage: 'Hello to all FreeCodeCamp',
                likes: 105,
                dislikes: 10
            },
            {
                id: v1(),
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

test('new post should be add', () => {
    const newPostMessage = 'new post message';
    const newPost = {
        id: v1(),
        avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
        nickname: "Crash555",
        postMessage: newPostMessage,
        likes: 0,
        dislikes: 0
    };
    const endState = profileReducer(startState, addPostAC(newPostMessage));

    expect(endState.myPosts.length).toBe(5);
    expect(endState.myPosts[0].postMessage).toBe('new post message');
})