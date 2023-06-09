

// import  "../News"
import Sportsnews from "../news catagoryes/Sportsnews";
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
    <div class="col-md rounded border m-1 ">
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

     <div class="col-md-3  h-auto">
        <Ads/> 
        <Durg/>
      
      </div> 
        
    
  </div>
</div>
<div class="container text-center">
  <div class="continer-fluid row align-items-center">
    <div class="col-md  border m-1 ">
      <h4 class="" className="body-heading p-2"  style={{width:"200px"}}  > sports News </h4>
     <div class="row ">
     
 
      {
        
        Sportsnews.map((Sportsnews)=>{
        //  console.log("sports news", Sportsnews)
          return(<SportsCard img={Sportsnews.image} headline={Sportsnews.title} description={Sportsnews.description} /> )
        })
      } 
     {/* <SportsCard/> */}
      
        
    </div> 
     </div>

    {/* <div class="col-md-3 rounded border h-auto"> 
      <div class="border bg-secondary"> 
        <h4 class="text-light">skip  Ad  </h4>
        <img src=" https://images.unsplash.com/photo-1521747116042-5a810fda9664" class="w-100"  />
            
      </div>
    </div> */}
    
  </div>
</div>
{/* <NewsBody/> */}
      </div>

    )
}

export default NewsBody


