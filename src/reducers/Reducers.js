import type from '../type'
var state = {
    root: undefined
}
export function App(state = { root }, acction = {}) {
    switch (acction.type) {
        case type.LOGIN:
            return state.merge({ root: acction.root });
            break;
        case type.REGISTER:
            return state.merge({ root: acction.root });
            break;
            default:
                return state;
    }
}