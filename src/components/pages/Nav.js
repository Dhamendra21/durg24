import logo from "../Assets/Logo.png"

function Nav (){
    return(
        <div style={{height:"150px"}} >
            
           <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
 < header   >
              <img src={logo}  className="logo" />
              </header>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Durg24</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-start " style={{margin:" 100px 0 0 0 "}} >
        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
          <li className="nav-item ">
            <a className="nav-link fw-bold p-2 " aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold p-2 " href="/trending">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold p-2 " href="/sports">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold p-2 " href="/durg">Durg</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold p-2 " href="#">Log in</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal p-2 " href="/add">add news</a>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Nav