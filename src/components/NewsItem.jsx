import React, { useState } from 'react';

function NewsItem({ title, description, src, url }) {
    const [desc, setDesc] = useState("Stay updated with the latest industry news and career trends. Get insights, expert opinions, and tips to help you navigate your professional journey.");

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card bg-dark text-light py-3 px-3" style={{ width: "100%", minHeight: "500px", maxHeight: "500px" }}>
                <img src={src ? src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOdQyTzpAhvtaX87afk6F0CQ3vpHLZ6waiw&s"} style={{ height: "140px", width: "100%" }} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title.slice(0, 75)}</h5>
                    <p className="card-text">{description ? description.slice(0, 149) : desc.slice(0, 149)}</p>
                    <a href={url} className="btn btn-primary mt-auto">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
