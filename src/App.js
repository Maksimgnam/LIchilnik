import React from 'react';
import { connect } from 'react-redux';
import { plusSum, minusSum } from './action';
import './App.css';

function App({ plus, minus, value, money }) {
  return (
    <div className="App">
      <div className='Card'>
        <div className='KiloWattCont'>

          <p className='kiloWatt'>{value}<span>кВт</span></p>
        </div>
        <p><span className='price'>ціна: </span>{money}грн</p>
        <div className='Btn'>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
        </div>

      </div>


    </div>
  );

}
const mapStateToProps = (state) => {
  return {
    value: state.value,
    money: state.money
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(plusSum()),
    minus: () => dispatch(minusSum())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
