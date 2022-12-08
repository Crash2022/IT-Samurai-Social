import {AppPropsType, appReducer, setInitializedAC} from "./app-reducer";

let startState: AppPropsType;

beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('app should be initialize', () => {
    const endState = appReducer(startState, setInitializedAC());
    expect(endState.initialized).toBeTruthy();
})