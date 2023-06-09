
import News from "../news catagoryes/TrendingNews";
import TrendingCard from "./TrendingCards"
import Nav from "./Nav";
function TrendingNews(){
    {
        const Trendingnews = require('../news catagoryes/TrendingNews');
        Trendingnews.push(News)
        // console.log(News); 
      }
    return(
       <div >
        <Nav/>
         <div className="row justify-content-center" >
          <div className="col-md-12" >
          {
        
        News.map((News)=>{
          return(<TrendingCard img={News.image_url} headline={News.headline} description={News.description} /> )
        })
      }
          </div>
            
            
        </div>
       </div>
    )
}
export default TrendingNews