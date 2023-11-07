import {Header,showAbout,showContact,showPortfolio,showResume} from './Header.jsx'
import About from './About.jsx';
import Content from './content.jsx';
import Footer from './Footer.jsx';
function App() {
 
  return(
    <>
    <Header/>
    <Content displayAbout={showAbout} displayPortfolio={showPortfolio} displayContact={showContact} displayResume={showResume}/>
    <Footer/>
    </>
  );
}

export default App