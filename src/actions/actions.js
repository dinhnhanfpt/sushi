import { LOGIN, REGISTER } from '../type'

export function initApp() {
    const LOGIN = (user, password) => {
        return (type.LOGIN, payload = {
            user: user,
            password: password
        }
        );
    }
}
export const REGISTER = () => {
    return (
        type.REGISTER,
        payload = {
            user: user,
            password: password
        }
    );
}