import React, { Component } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>React + react-router</h2>
        <p>
          This is the react-router <a href="https://github.com/ReactTraining/react-router/tree/1.0.x/examples/huge-apps" target="_blank">huge-apps example</a>,
          converted into a single-spa application. Note that the entire application is lazy loaded (single-spa's does this)
      and that each of the individual react-router routes is lazy loaded (react-router's does this).
        </p>
        <h2>Courses</h2>{' '}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
        <Link to={`/react/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
