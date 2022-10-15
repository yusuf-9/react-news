import React from "react";

function NewsCard2({ data }) {
    return (
        <>
            <a className="news-link" href={data.url} target="blank">
                <div className="news-card">
                    <div className="news-card-text">{data.title}
                        <div>
                            <span className="news-source">{data.byline}</span>
                            <span className="news-time">{data.published_date}</span>
                        </div>
                    </div>
                    <div className="news-card-img" style={{backgroundImage: "url("+ (data["multimedia"] ? data["multimedia"][2]["url"]:"" )+")"}}>
                    </div>
                </div>
            </a>
        </>
    )
}

export default NewsCard2;