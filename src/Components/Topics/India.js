import React from "react";
import './TopStories/TopStories.css'
import NewsCard2 from "./NewsCard";



class India extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            nynews: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        var NyNewsLink = fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=I8fHzA8C816bD3lhKmvpnOzjvzQsQNSt');
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
        }
        )
    }

    render() {
        return (
            <>
                {console.log(this.state.nynews)}
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
                        <div className="fact-check-container"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default India;