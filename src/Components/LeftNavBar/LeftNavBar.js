import React from "react";
import './LeftNavBar.css'
import {NavLink} from 'react-router-dom'

function LeftNavBar(){
    return(
        
        <div className="Left-nav-bar">
            <div className="top-5-links">
                <NavLink to={'/topstories'} className="navigation-links Nav-link"><i className="fa-solid fa-globe"></i><span
                            className="Nav-link-text">Top
                            stories</span></NavLink>
               <NavLink to={'/india'} className="navigation-links Nav-link"><i className="fa-solid fa-flag"></i><span
                            className="Nav-link-text">Politics
                            </span></NavLink>
                <NavLink to={'/world'} className="navigation-links Nav-link"><i
                            className="fa-solid fa-earth-americas"></i><span
                            className="Nav-link-text">World</span></NavLink>
                <NavLink to={'/business'} className="navigation-links Nav-link"><i className="fa-solid fa-sack-dollar"></i><span
                            className="Nav-link-text">Business
                            </span></NavLink>
           
                            <NavLink to={'/entertainment'} className="navigation-links Nav-link"><i className="fa-solid fa-film"></i><span
                            className="Nav-link-text">Books</span></NavLink>
                <NavLink to={'/sports'} className="navigation-links Nav-link"><i className="fa-solid fa-person-biking"></i><span
                            className="Nav-link-text">Sports</span></NavLink>
                <NavLink to={'/science'} className="navigation-links Nav-link"><i className="fa-solid fa-flask"></i><span
                            className="Nav-link-text">Science</span></NavLink>
                <NavLink to={'/health'} className="navigation-links Nav-link"><i className="fa-solid fa-dumbbell"></i><span
                            className="Nav-link-text">Health</span></NavLink>
            </div>
            <div className="last-links">
                <div className="Nav-link-2 language-and-region">
                    <a href="" className="navigation-links">
                        <span>Language & region</span>
                        <span className="language-text">English (India)</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftNavBar;