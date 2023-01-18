import {
    followAC,
    setCurrentPageAC, setUsersAC,
    setUsersTotalCountAC,
    toggleIsLoadingAC,
    UsersArray,
    UsersPropsType,
    usersReducer
} from "./users-reducer";

let startState: UsersPropsType;

beforeEach(() => {
    startState = {
        users: [
            {
                id: '1',
                name: 'Craig Lee Scott',
                followed: true,
                status: 'Biketrials London UK!',
                photos: {
                    small: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg',
                    large: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'
                }
            },
            {
                id: '2',
                name: 'Thomas Remvik Aasen',
                followed: false,
                status: 'Biketrials of Norway',
                photos: {
                    small: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg',
                    large: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'
                }
            }
        ] as Array<UsersArray>,
        pageSize: 20, // количество пользователей на одной странице
        totalUsersCount: 100, // количество пользователей приходит с сервера, теперь цифра не влияет
        currentPage: 1,
        isLoading: false,
        followingInProgress: [],
        filter: {
            term: '',
            friend: null
        }
    }
})

test('user should be follow', () => {
    const endState = usersReducer(startState, followAC('2'));

    expect(endState.users.length).toBe(2);
    expect(endState.users[1].followed).toBeTruthy();
})

test('user should be unfollow', () => {
    const endState = usersReducer(startState, followAC('1'));

    expect(endState.users.length).toBe(2);
    expect(endState.users[1].followed).toBeFalsy();
})

test('users should be added to state', () => {
    const newUser = {
        id: '3',
        name: 'Damon Watson',
        followed: false,
        status: 'Biketrials London UK!',
        photos: {
            small: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg',
            large: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'
        }
    }
    const endState = usersReducer(startState, setUsersAC([newUser]));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].followed).toBeFalsy();
    expect(endState.users[0].id).toBe('3');
})

test('page should be changed to correct', () => {
    const endState = usersReducer(startState, setCurrentPageAC(2));
    expect(endState.currentPage).toBe(2);
})

test('correct number of pages should be added', () => {
    const endState = usersReducer(startState, setUsersTotalCountAC(200));
    expect(endState.totalUsersCount).toBe(200);
})

test('loader should change status', () => {
    const endState = usersReducer(startState, toggleIsLoadingAC(true));
    expect(endState.isLoading).toBeTruthy();
})