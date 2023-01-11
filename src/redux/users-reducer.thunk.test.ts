import {deleteFollowTC, followAC, postFollowTC, toggleFollowInProgressAC, unfollowAC} from "./users-reducer";
import {PutResponseType, ResultCodesEnum, usersAPI} from "../api/api";

jest.mock('../api/api');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.postFollow.mockClear();
    userAPIMock.deleteFollow.mockClear();
})

const result: PutResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

userAPIMock.postFollow.mockReturnValue(Promise.resolve(result));
userAPIMock.deleteFollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
    const thunk = postFollowTC('1');
    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowInProgressAC('1',true));
    expect(dispatchMock).toHaveBeenCalledWith(2, followAC('1'));
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowInProgressAC('1',false));
})

test('success unfollow thunk', async () => {
    const thunk = deleteFollowTC('1');
    await thunk(dispatchMock/*, getStateMock, {}*/);

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowInProgressAC('1',true));
    expect(dispatchMock).toHaveBeenCalledWith(2, unfollowAC('1'));
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowInProgressAC('1',false));
})