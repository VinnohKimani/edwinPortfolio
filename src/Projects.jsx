import React from 'react'
import ProjectsSection from './components/ProjectsSection'

const Projects = ({ onSelectProject }) => {
  return (
    <div>
      <ProjectsSection onSelectProject={onSelectProject} />
    </div>
  )
}

export default Projects