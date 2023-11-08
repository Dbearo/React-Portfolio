import pic from "../images/bio-pic.png"


function About(){

    return(
        <>
        <div className="about">
        <h2>About Me</h2>   
        <div>  
           <img id="bioImage" src={pic} alt="picture of Jude Hartmann"/>
            <ul>
                <li>Am enrolled in a full-stack coding bootcamp at UPenn</li>
                <li>Graduated from Mechanicsburg Area Senior High</li>
                <li>Played mellophone in the M.A.S.H. Marching Band</li>
                <li>Has a wonderful dog named Loki</li>
            </ul>
        </div>
  </div>
        </>
    );

}

export default About