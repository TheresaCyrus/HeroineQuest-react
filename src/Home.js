import landingPage from './Images/images/heroinequest.png'
import './Home.css'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'


function Home (){
    return(
        <div className="img-container">
        <img src={landingPage} alt="landing page" width="1200" height="900" />
        <Button className="start-btn" href="/battlesystem">START</Button>
        {/* <button className="btn-start" onClick={console.log("success")}></button> */}
        </div>
    )
}

export default Home;