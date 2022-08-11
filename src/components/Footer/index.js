import React from "react";

function footer() {
    return(
        <div className="container mt-5">
            <footer className="row d-flex justify-content-center">
                <a href="https://github.com/CHalseth" className="col-md-1">
                    <i className="bi bi-github" style={{ fontSize: 50 }}></i>
                </a>
                <a href="https://linkedin.com/in/corey-halseth-16a5159a" className="col-md-1">
                    <i className="bi bi-linkedin" style={{ fontSize: 50 }}></i>
                </a>
            </footer>
        </div>
    );
}

export default footer;