
import { useState,useEffect } from 'react';
import { IsHamburgerContext } from "../context/hamburgerContext"
import { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default () => {

  const { isHamburgerIcon } = useContext(IsHamburgerContext)
  const { dispatch } = useContext(IsHamburgerContext);
  
const [classCss,setClass] = useState('');
  const handleClick = () => {


    if (isHamburgerIcon && isHamburgerIcon["actual"] === "closed" || isHamburgerIcon === "") {
      setClass("toggled")
      dispatch({ type: "SET_HAM", isHamburgerIcon: "toggled" })
    }
    else if (isHamburgerIcon && isHamburgerIcon["actual"] === "toggled") {
      setClass("closed")
      dispatch({ type: "SET_HAM", isHamburgerIcon: "closed" })
    }

  }  



  return (
    <nav className="navbar navbar-light bg-light">

      <div className="navbar-wrapper">
        <div className={`navbar-toggle d-inline ${classCss}`}>
          <button aria-label="Toggle navigation" type="button" className="navbar-toggler" onClick={handleClick}>
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <Link href="/">
          <a className="navbar-brand">Kezdőoldal</a>
        </Link>
      </div>
      {/* <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center"> 
        {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
        </ul>
      </div> */}
    </nav>
  );
};
