import landingPage from './Images/images/heroinequest.png'
import './Home.css'
import { Link } from 'react-router-dom';


function Home (){
    return(
        <div className="img-container">
        <img src={landingPage} alt="landing page" width="1200" height="900" />
        <Link to={"/battlesystem"}>START</Link>
        {/* <button className="btn-start" onClick={console.log("success")}></button> */}
        </div>
    )
}

export default Home;