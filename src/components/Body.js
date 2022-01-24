import classes from './Body.module.css'

const Body = () => {
  return(
    <div className={classes.container}>
      <div className={classes['display-container']}>
          <div className={classes['operand-one']}>12345 +</div>
          <div className={classes['operand-two']}>12345</div>
      </div>
      <button className={classes.ac}>AC</button>
      <button>DEL</button>
      <button>/</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>

      <button>.</button>
      <button>0</button>
      <button className={classes.equals}>=</button>
    </div>
  );
}

export default Body;