import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

export default function Projects() {
  return (
    <div className='margin'>
        <Link to='/projects/randompassword'>Password Generator</Link>
        <Link to='/projects/todo'>ToDo App</Link>
    </div>
  )
}
