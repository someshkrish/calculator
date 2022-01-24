import { ACTIONS } from "./Body";

const OperatorButton = (props) => {
    return (
        <button onClick={() => props.dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: props.operator})}>{props.operator}</button>
    );
}

export default OperatorButton;