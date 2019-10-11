import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class SavedBooks extends Component {

    state = {
        books: [],
    }

    componentDidMount() {
        this.gatherBooks()
    }

    gatherBooks = () => {
        API.getSavedBooks()
            .then(res => console.log(res)
        )
    }

    
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="xs-12">
                        <Jumbotron>
                            <h1><strong>Your Saved Books</strong></h1>
                        </Jumbotron>
                    </Col>
                    <Col size="xs-12">
                        <List>
                            <ListItem>

                                <h3>
                                    <strong>
                                        
                                    </strong>
                                </h3>

                            </ListItem>
                        </List>


                    </Col>



                </Row>
            </Container>





        )
    }



}

export default SavedBooks