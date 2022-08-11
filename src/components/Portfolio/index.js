import React from "react";
import Project from "../Project";

function Portfolio() {
    return (
        <div className="container">
            <p className="content is-medium">Portfolio</p>
            <section className="container">
                <Project />
            </section>
        </div>
    );
}

export default Portfolio;