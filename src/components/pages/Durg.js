

const event = new Date();
const Event = new Date();
const options = {  year: 'numeric', month: 'long', day: 'numeric' };


function Durg(){
    return(
        <div class="card mb-3  border-start-0 border-end-0 text-start my-2" >
            <div class="text-center p-2 rounded" className="body-heading"  >
            <h5 class="text-light"  > Durg  </h5>
            </div>
        <div class="row g-0 my-3">
          
          <div class="col-md">
            
              <h5 class="fs-6 mx-1">Google Announces Major Update to Search Algorithm </h5>
              
              <p class="card-text"><small class="text-body-secondary">Last updated {(Event.toLocaleDateString('hi', options))} {(event.toLocaleTimeString('en-US'))} </small></p>
           
           
          </div>
        </div>
        <div class="row g-0 my-3">
          
          <div class="col-md">
            
              <h5 class="fs-6 mx-1">Google Announces Major Update to Search Algorithm </h5>
              
              <p class="card-text"><small class="text-body-secondary">Last updated {(Event.toLocaleDateString('hi', options))} {(event.toLocaleTimeString('en-US'))} </small></p>
           
           
          </div>
        </div>
        <div class="row g-0 my-3">
          
          <div class="col-md">
            
              <h5 class="fs-6 mx-1">Google Announces Major Update to Search Algorithm </h5>
              
              <p class="card-text bs-dark-text-emphasis "><small class="text-body-secondary">Last updated {(Event.toLocaleDateString('hi', options))} {(event.toLocaleTimeString('en-US'))} </small></p>
           
           
          </div>
        </div>
        <div class="row g-0 my-3">
          
          <div class="col-md">
            
              <h5 class="fs-6 mx-1">Google Announces Major Update to Search Algorithm </h5>
              
              <p class="card-text"><small class="text-body-secondary">Last updated {(Event.toLocaleDateString('hi', options))} {(event.toLocaleTimeString('en-US'))} </small></p>
           
           
          </div>
        </div>
      </div>
    )
}
export default Durg