/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'react-router'

class Sidebar extends Component {
  render() {
    let { assignments } = COURSES[this.props.params.courseId]

    return (
      <div>
        <div>Sidebar Assignments</div>
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>
              <Link to={`/react/course/${this.props.params.courseId}/assignments/${assignment.id}`}>
                {assignment.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Sidebar
