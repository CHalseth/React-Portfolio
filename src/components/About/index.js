import React from "react"

function About() {
    return (
        <div className="container">
            <section>
                <h3 className="m-5">About Me</h3>
                <img className="mx-3 rounded-circle" src={require("../../assets/me.jpg")} alt="my profile" />
                <p className="m-5">I'm Corey,</p>
            </section>
        </div>
    );
}

export default About;