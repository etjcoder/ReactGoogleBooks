import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/Grid";
import { List, ListItem } from "../components/List/List";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import BookSearchForm from "../components/BookSearchForm/BookSearchForm";

class Books extends Component {

    state = {
        books: [],
        title: ""
    }




    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Form has been submitted!");
    }


    render() {
        return ( 
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Google Books React App!</h1>
                        </Jumbotron>
                        <form>
                            <h5>Search for a Book Here</h5>
                            <Input  
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                                />
                        </form>
                    </Col>
                </Row>




            </Container>



        )
    }


}

export default Books;