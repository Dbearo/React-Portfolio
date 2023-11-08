
function ProjectCard(props){
    console.log(props)
    return(
        <div className="card">
            <a href={props.link}>
        <img src={props.image} alt="project pic"></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </a>
        </div>
    )
}
export default ProjectCard