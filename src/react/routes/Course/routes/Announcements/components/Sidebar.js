/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'react-router'

class AnnouncementsSidebar extends Component {
  render() {
    let { announcements } = COURSES[this.props.params.courseId]

    return (
      <div>
        <div>Sidebar Assignments</div>
        <ul>
          {announcements.map(announcement => (
            <li key={announcement.id}>
              <Link to={`/react/course/${this.props.params.courseId}/announcements/${announcement.id}`}>
                {announcement.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = AnnouncementsSidebar
