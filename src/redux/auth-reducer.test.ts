import {AuthPropsType, authReducer, getCaptchaAC, logoutUserDataAC, setAuthUserDataAC} from "./auth-reducer";

let startState: AuthPropsType;

beforeEach(() => {
    startState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        captchaUrl: null
    }
})

test('user should be logged in', () => {
    const endState = authReducer(startState, setAuthUserDataAC(1, 'myAccount@google.com' ,'myLogin' ,true));
    expect(endState.userId).toBe('1');
    expect(endState.email).toBe('myAccount@google.com');
    expect(endState.login).toBe('myLogin');
    expect(endState.isAuth).toBeTruthy();
})

test('user should be logged out', () => {
    const endState = authReducer(startState, logoutUserDataAC(null, null ,null ,false));
    expect(endState.userId).toBe(null);
    expect(endState.email).toBe(null);
    expect(endState.login).toBe(null);
    expect(endState.isAuth).toBeFalsy();
})

test('captcha URL should be received', () => {
    const captchaUrl = 'http://www.getnewcaptcha.com';
    const endState = authReducer(startState, getCaptchaAC(captchaUrl));
    expect(endState.captchaUrl).toBe(captchaUrl);
})