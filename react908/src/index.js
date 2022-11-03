import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}


const App = () => {
 
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
   
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const t = [course, part1, part2, part3,Header] 

  return (
    <div>
   
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'))