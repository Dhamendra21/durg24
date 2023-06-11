




function SportsCard(Props){
    
    

return(
    <div class="col-md-4 my-2 mx-0 "  >
   <div class="card  text-start ">
    <img src={Props.img} class="w-100"  />
    
       <h5 class="m-2 fs-6" > {Props.headline} </h5>

       <div class="overflow-hidden m-1 " style={{ height: "78px" }}>
              <p class="card-text">{Props.description}</p>
            </div>
    
   </div>
  </div>
)
}
export default SportsCard