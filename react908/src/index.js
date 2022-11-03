import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // const-definitions
  const Header = ''
  const course = 'Half Stack application development'
  const Content = 'Fundamentals of React'
  const Total = 10 

  return (
    <div>
      <Header course={course} />
      < Content/>
      < Total/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))