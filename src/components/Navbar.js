import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
    <>
    
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
    <Link className="navbar-brand" to="/general">Indie Newz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/business/">Business</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/health">Health</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/science">Science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/sports">Sports</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/IndieNewz/technology">Technology</Link></li></ul>

    </div>
  </div>
</nav>
    </>
    )
  }
}

export default Navbar