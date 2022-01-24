import { ACTIONS } from "./Body";

const DigitButton = (props) => {
    return (
        <button onClick={() => props.dispatch({type: ACTIONS.ADD_DIGIT, payload: props.digit})}>{props.digit}</button>
    );
}

export default DigitButton;