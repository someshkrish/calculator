import { useReducer } from 'react';
import classes from './Body.module.css'
import DigitButton from './DigitButton';
import OperatorButton from './OperatorButton';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

const calculate = (prevOperand, curOperand, operator) => {
  let operand_1 = parseFloat(prevOperand);
  let operand_2 = parseFloat(curOperand);

  switch(operator) {
      case "+":
          return (operand_1 + operand_2);
      case "-":
          return (operand_1 - operand_2);
      case "*":
          return (operand_1 * operand_2);
      case "/":
          if(parseInt(curOperand) !== 0){
            return (operand_1 / operand_2);
          }
          return 0;
  }
}

const reducer = (state, {type, payload}) => {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
        if(state.curOperand === "0" && payload === "0"){
            return state;
        }
        if(state.curOperand !== undefined && state.curOperand.includes('.') && payload === "."){
            return state;
        }
        if(state.curOperand === "0"){
            return {
                ...state,
                curOperand: payload
            }
        }
        if(!state.operator && state.prevOperand) {
            return state
        };
        return {
            ...state, 
            curOperand: `${state.curOperand || ""}${payload}`
        }
    case ACTIONS.CHOOSE_OPERATION:
        if(state.curOperand && state.prevOperand){
            let returned_value = calculate(state.prevOperand, state.curOperand, state.operator);
            console.log(returned_value);
            return {
                prevOperand: returned_value,
                operator: payload,
                curOperand: ""
            }
        }
        if(state.prevOperand){
            return {
                ...state,
                operator: payload
            }
        }
        if(state.curOperand != "" && state.curOperand != undefined){
          return {
              prevOperand : state.curOperand,
              operator : payload,
              curOperand: ""
          }
        }
    case ACTIONS.CLEAR:
        return {}
    case ACTIONS.DELETE_DIGIT:
        if(state.curOperand){
            return {
                ...state,
                curOperand: `${state.curOperand.slice(0,-1)}`
            }
        }
        return state;
    case ACTIONS.EVALUATE:
        if(state.curOperand && state.prevOperand){
            let returned_value = calculate(state.prevOperand, state.curOperand, state.operator);
            console.log(returned_value);
            return {
                prevOperand: returned_value,
                operator: payload,
                curOperand: ""
            }
        }
        return {...state};
  }
}

const initializer ={
    prevOperand: "",
    curOperand: "",
    operator: ""
}

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initializer);

  return(
    <div className={classes.container}>
      <div className={classes['display-container']}>
          <div className={classes['operand-one']}>{state.prevOperand} {state.operator}</div>
          <div className={classes['operand-two']}>{state.curOperand}</div>
      </div>
      <button className={classes.ac} onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperatorButton operator="/" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperatorButton operator="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperatorButton operator="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperatorButton operator="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className={classes.equals} onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
    </div>
  );
}

export default Body;