import React, { useState } from "react";

function Project() {
    const [projects] = useState([
        {
            name: "Not Another IMDB",
            description: "Search for your favorite movies or find new favorites and add them to your custom lists.",
            link: "https://protected-woodland-09194.herokuapp.com",
            github: "https://github.com/tddstuke/Not-Another-IMDB"
        },
        {
            name: "Note Taker",
            description: "Take down notes as you please, and delete them when they are no longer needed.",
            link: "https://note-taker-7888.herokuapp.com/",
            github: "https://github.com/CHalseth/Challenge-11-Note-Taker"
        }
    ]);

    return (
        <div className="row d-flex justify-content-around my-5">
            {projects.map((image, i) => (
                <a href={image.link}
                className="card col-md-5 p-2 text-reset text-decoration-none"
                key={image.name}>
                    <div className="col">
                        <div className="card-block p-2">
                            <h4 className="card-title">{image.name}</h4>
                        </div>
                        <div className="row no-gutters">
                            <img
                            className="col-md-12"
                            src={require(`../../assets/${i}.jpg`)}
                            alt={image.name}/>
                        </div>
                        <div className="card-block p-2">
                            <p className="card-text">{image.description}</p>
                        </div>
                        <a href={image.github}
                        className="card-footer d-flex justify-content-center">
                            <i className="bi bi-github" style={{ fonstSize: 20 }}></i>
                        </a>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Project;