


function Newspage(Props){
    return(
        <div class="container" >
          <div class="justify-content-center row" >
            <div class="col-md-" >
                <h1>{Props.headline}</h1>
                <img src={Props.img} style={{width:'300px'}} />

                <p>
                {Props.description}
                </p>
            </div>
          </div>
        </div>
    )
}

export default Newspage