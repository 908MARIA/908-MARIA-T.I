import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  // No defina componentes adentro de otro componente
  const Display = props => <div>{props.value}</div>
  const Display2 = props => <div>{props.value2}</div>
  const Display3 = props => <div>{props.value3}</div>

  return (
    <div>
      <Display value={good} />
      <Display2 value2={neutral} />
      <Display3 value3={bad} />
      
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)