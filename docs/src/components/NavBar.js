import React from 'react'

function NavBar() {
  return (
    <section id="navBar">
      <nav className="nav navbar navbar-expand-md navbar-dark" data-aos="fade-left" data-aos-duration="800" data-aos-offset="0" data-aos-delay="800">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
          onclick=
          "if(document.getElementById('dark').style.opacity==.6){
            document.getElementById('dark').style.opacity=0;
            document.getElementById('dark').style.display='none';
          }
          else{
            document.getElementById('dark').style.opacity=.6;
            document.getElementById('dark').style.display='block';
          }">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav flex-column">
              <li className="nav-item" > <a href="#" style="opacity: 1;" className="nav-link">Home</a> </li>
              <li className="nav-item"> <a href="#About" className="nav-link">About</a> </li>
              <li className="nav-item"> <a href="#Skills" className="nav-link">Skills</a> </li>
              <li className="nav-item indent"> <a href="3D.htm" className="nav-link">3D</a> </li>
              <li className="nav-item indent"> <a href="animations.htm" className="nav-link">Animations</a> </li>
              <li className="nav-item indent"> <a href="website.htm" className="nav-link">Websites</a> </li>
              <li className="nav-item"> <a href="personal.htm" className="nav-link">Personal Work</a>
              <li className="nav-item"> <a href="#Contact" className="nav-link">Contact</a> </li>
            </ul>
          </div>
        </nav>
      </section>
  )
}

export default NavBar