
import monster from '../../Images/images/tumblr_inline_o2dzyp853j1ri065t_500.gif'
import '../../index.css'


function Monster(props) {
   console.log("current props",props);
   return(
    <div>
       <img className="monster-img" src={monster}  alt="monster" />
    </div>

   )

} 

export default Monster;