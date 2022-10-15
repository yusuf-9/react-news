import React from "react";
import './TopStories.css'
import FactsSection from "./FactsSection";
import NewsCard2 from "../NewsCard";

class TopStories extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            nynews: [],
            numbers: [1, 2, 3, 4, 5],
            covid: [],
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        var NyNewsLink = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=I8fHzA8C816bD3lhKmvpnOzjvzQsQNSt');
        NyNewsLink.then((x) => {
            var NyNews = x.json();
            NyNews.then((y) => {
                const NyNewsObject = y;
                const NyNewsArray = NyNewsObject.results;
                this.setState({
                    nynews: NyNewsArray,
                    loading: false
                })

            })
            var CovidNewsLink = fetch('https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=I8fHzA8C816bD3lhKmvpnOzjvzQsQNSt');
            CovidNewsLink.then((x) => {
                var CovidNews = x.json();
                CovidNews.then((y) => {
                    var CovidNewsObject = y;
                    var CovidNewsArray = CovidNewsObject.results;
                    this.setState({
                        covid: CovidNewsArray,
                        loading: false
                    })
                })
            })

        }
        )
    }

    render() {
        return (
            <>
                
                <div className="news-section">
                    <div className="headlines-heading">Headlines</div>
                    <div className="news-and-feed-container">
                        <div className="news-container">
                            {this.state.loading ? (<div>Headlines are loading....</div>) :
                            this.state.nynews.map((x, index) => {
                                if (index >= 1) {
                                    return (<NewsCard2 key={x["url"]} data={x} />) 
                                } else {
                                }
                            })}
                        </div>
                        <div className="fact-check-container">
                            <div className="fact-check-heading-text">Sunday Review</div>
                            {this.state.covid.map((z, index) => {
                                if (index < 5) {
                                    return (<FactsSection coviddata={z} key={index} />)
                                } else {
                                    
                                }
                               

                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TopStories;