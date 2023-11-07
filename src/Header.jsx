    let showAbout = true
    let showPortfolio = false
    let showContact = false 
    let showResume = false
function Header(){

    function aboutClick(){
        showAbout = true
        showPortfolio = false
        showContact = false 
        showResume = false
        console.log(showAbout)
    }
    function portfolioClick(){
        showAbout = false
        showPortfolio = true
        showContact = false 
        showResume = false
        console.log(showAbout)
    }
    function contactClick(){
        showAbout = false
        showPortfolio = false
        showContact = true 
        showResume = false
    }
    function resumeClick(){
        showAbout = false
        showPortfolio = false
        showContact = false 
        showResume = true
    }
    return(
        <>
        <header>
            <h1>Jude Hartmann Portfolio</h1>
            <nav>
                <ul>
                    <li onClick={aboutClick}><a href="About">About</a></li>
                    <li onClick={portfolioClick}><a href="Portfolio">Portfolio</a></li>
                    <li onClick={contactClick}><a href="Contact">Contact</a></li>
                    <li onClick={resumeClick}><a href="Resume">Resume</a></li>
                </ul>
            </nav>
        </header>
        </>
    );

}

export {Header,showAbout,showContact,showPortfolio,showResume}