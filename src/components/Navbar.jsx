import React from 'react'

function Navbar({setCategory,setCountry}) {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-5 '>Quick News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")} style = {{cursor:"pointer"}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")} style = {{cursor:"pointer"}}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")} style = {{cursor:"pointer"}}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")} style = {{cursor:"pointer"}}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")} style = {{cursor:"pointer"}}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} style = {{cursor:"pointer"}}>Technology</div>
        </li>
      </ul>
    </div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Country
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><div className="dropdown-item" onClick={() => setCountry("ar")} style = {{cursor:"pointer"}}>Argentina</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("au")} style = {{cursor:"pointer"}}>Australia</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("be")} style = {{cursor:"pointer"}}>Belgium</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("br")} style = {{cursor:"pointer"}}>Brazil</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("gb")} style = {{cursor:"pointer"}}>Britain</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("ch")} style = {{cursor:"pointer"}}>China</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("fr")} style = {{cursor:"pointer"}}>France</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("de")} style = {{cursor:"pointer"}}>Germany</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("in")} style = {{cursor:"pointer"}}>India</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("it")} style = {{cursor:"pointer"}}>Italy</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("jp")} style = {{cursor:"pointer"}}>Japan</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("nz")} style = {{cursor:"pointer"}}>New Zealand</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("ru")} style = {{cursor:"pointer"}}>Russia</div></li>
    <li><div className="dropdown-item" onClick={() => setCountry("us")} style = {{cursor:"pointer"}}>USA</div></li>

  </ul>
</div>
  </div>
</nav>
   )
}

export default Navbar
