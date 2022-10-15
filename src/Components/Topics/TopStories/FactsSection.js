import React from "react";

function FactsSection({coviddata}){
    return(
        
        <a href={coviddata.url} target="blank" className="covid-link" >
                <div className="facts">{coviddata.title}</div>
                <div className="facts-source">{coviddata.byline}</div>
        </a>
        
    )
}

export default FactsSection;