import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";


class Home extends Component {
    
    state = {
        user: ""
    }

    componentDidMount() {
        console.log("Loaded Home Page")
    }

    render() {
        return (
            <div>
                <Nav />
            <div className="jumbotron" style={{height: '500px'}}>
                <h1>You're on the Home Page!</h1>
                {/* Header Component, Basically a nice Jumbotron */}
                {/* <HomePageHeader /> */}
                {/* About Us on Left Component */}
                {/* Sign In on Right Component */}
                {/* Demo below */}
                {/* Contact Form */}
            </div>
            </div>
        )
    }
}

export default Home