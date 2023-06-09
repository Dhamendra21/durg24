




function SportsCard(Props){
    
    

return(
    <div class="col-md-4 my-2 mx-0"  >
   <div class="card h-100 text-start ">
    <img src={Props.img} class="w-100"  />
    
       <h5 class="m-2 fs-6" > {Props.headline} </h5>

   
    <p className="p-2" >{Props.description} </p>
   </div>
  </div>
)
}
export default SportsCard