import {postFollowTC} from "./users-reducer";
import {PutResponseType, ResultCodesEnum, usersAPI} from "../api/api";

jest.mock('../api/api');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.postFollow.mockClear();
})

const result: PutResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

userAPIMock.postFollow.mockReturnValue(Promise.resolve(result));

test('test follow thunk', async () => {
    const thunk = postFollowTC('1');
    await thunk(dispatchMock, getStateMock, {});
    expect(dispatchMock).toBeCalledTimes(3);
})