import { useState } from "react";
import navIcon from './navIcon.svg';
import "./navBar.css"
import pdf from '../RachelEllisResume.pdf'

export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <nav className="nav">
        <button className="icon"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={navIcon} alt="nav menu icon" />
      </button>
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
            <ul>
            <li>
                <a href="/landing">Home</a>
            </li>
            <li>
                <a href="/about">About Me</a>
            </li>
            <li>
            <a target="_blank" href={pdf}>Resume</a>
                {/* <a href="/resume">Resume</a> */}
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            </ul>
        </div>
      </nav>
    )
  }