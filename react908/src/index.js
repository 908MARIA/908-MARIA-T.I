import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))