import React from 'react'

const ProjectSummery = ({project}) => {
    return(
        <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By Ninja</p>
                <p className="grey-text">1st Jan, 2021</p>
            </div>
        </div>
    )
}

export default ProjectSummery