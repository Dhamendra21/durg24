
import Nav from "./Nav"

function Addnews(){
    return(
        <div class="container">
            <Nav/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="img">Select image:</label>
                    <input class="form-control" type="file" id="img" name="img" accept="image/*"/>
                  </div>
        </div>
    </div>
   </div> 
    )
}
export default Addnews