import React from 'react'
import logo from '../image/logo.png';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/deviceAdd">Device</a>
                     </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/locationAdd">Location</a>
                     </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="locationList">Location List</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <img src={logo} alt="Logo" style={{ width:'200px', padding:'20px'}}/>
                </span>
            </div>
          </div>
        </nav>

    </div>
  )
}


export default Navbar