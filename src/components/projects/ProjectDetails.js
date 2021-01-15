import React from 'react'

const ProjectDetails = (props) => {
    let id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio soluta magni aspernatur eveniet voluptatum modi saepe obcaecati reprehenderit laborum dignissimos iusto, ut, pariatur eos facilis ducimus reiciendis exercitationem officiis aut.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ninja</div>
                    <div>1st Jan, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
