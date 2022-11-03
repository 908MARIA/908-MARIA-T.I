import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  // ...
}


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
  const Display = props => <div>{props.value1}</div>
  const Display2 = props => <div>{props.value2}</div>
  const Display3 = props => <div>{props.value3}</div>

  const Display4 = props => <div>{props.value4}</div>

  return (
    <div>
      
      <h1> GIVE FEEDBACK </h1> 

      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      
      <h1>Statistics </h1>  
      
     Good <Display  value1={good} />
     Neutral <Display2 value2={neutral} />
     Bad <Display3 value3={bad} />

     All <Display4 value4={good+neutral+bad} />
     Average <Display4 value4={(good+neutral+bad)/(3)} />
     Positive <Display4 value4={bad} />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
