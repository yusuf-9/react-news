import React from "react";
import './TopBar.css';



function TopBar() {
    return (
        <div className="top-bar">
            <div className="first-container">
                <div className="main-menu-button"></div>
                <span className="react first">React</span>
                <span className="react second">News</span>
            </div>
            <div className="second-container">
                <div className="searchbar">
                    <form>
                        <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" placeholder="Search for topics, locations & sources" id="searchbar"/>
                    </form>
                </div>
            </div>
            <div className="third-container">
            </div>
        </div>
        
    )
    const searchBarInput = document.getElementById('searchbar')
searchBarInput.addEventListener("keyup", () => {
  console.log("it works")
});
}

export default TopBar;

// <i className="fa-solid fa-bars"></i>