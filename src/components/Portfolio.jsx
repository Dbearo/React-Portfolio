import ProjectCard from "./ProjectCard";
import projectData from "./projectData/projectdata"
function Portfolio(){
console.log(projectData)
    return(
        <div className="portfolio"> 
            
        <h2>Portfolio</h2>  
        <div className="break"></div> 
        {projectData.map((project) => (
              <ProjectCard title={project.title} description={project.content} image = {project.image} link ={project.link}/>
        ))}
      

       </div>
    );

}

export default Portfolio