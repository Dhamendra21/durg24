

// import  "../News"
// import Sportsnews from "../news catagoryes/Sportsnews";
import Sportsnews from "./Sportsnews";
import SportsCard from "./Sportscard";
import News from "../news catagoryes/TrendingNews";
import TrendingCard from "./TrendingCards"
import Ads  from "./Adscontainer";
import Durg from "./Durg";
import Nav from "./Nav";
import Newspage from "./Newspage";
import TrendingNews from "./Trendingnews";
function NewsBody() {


{
  const Trendingnews = require('../news catagoryes/TrendingNews');
  Trendingnews.push(News)
  // console.log(News); 
}

{
  const Sportsnews = require('../news catagoryes/Sportsnews')
   Sportsnews.push(Sportsnews)
  // console.log(Sports)

}
    return(

     
      <div>
        <Nav/>
<div class="container text-center">
  <div class="continer-fluid row align-items-center">
    <div class="col-md rounded border m-1 overflow-hidden  " style={{height:"1600px"}} >
      <h4   className="body-heading p-2 m-0 mx-o " style={{width:"200px"}} >Trending news</h4>
     <div class="row">
     
     
      {/* {
        
        News.map((News)=>{
          return(<TrendingCard img={News.image_url} headline={News.headline} description={News.description} /> )
        })
      } */}
      <TrendingNews/>
      
        
    </div> 
     </div>

     <div class="col-md-3 m-3  ">
        <Ads/> 
        <Durg/>
      
      </div> 
        
    
  </div>
</div>
<div class="container text-center d-flex align-items-center ">
  

      <div class="continer-fluid row align-items-center">
      <div class="col-md-3 m-3  ">
        <Ads/> 
        <Durg/>
      
      </div> 
    <div class="col border m-1 rounded overflow-hidden " style={{height:"950px"}}  >
      <h4 class="" className="body-heading p-2"  style={{width:"200px"}}  > sports News </h4>
     
     
     
      <Sportsnews/>
      
     
        

     </div>
          
  
    
    
  </div>

</div>
{/* <NewsBody/> */}
      </div>

    )
}

export default NewsBody


