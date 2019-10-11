import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";


class SavedBooks extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        this.gatherBooks()
    }

    gatherBooks = () => {
        API.getSavedBooks()
            .then(res => 
                
                this.setState({
                    savedBooks: res.data
                })
                )
        }

    deleteSavedBook = (id) =>
    {
        console.log("You deleted: " + id)
        API.deleteBook(id)
            .then(res => console.log("You've deleted this Book from your DB")
            // .catch(err => console.log(err))
            
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

                            {this.state.savedBooks.map(saved => (
                                <ListItem key={saved._id}>
                                    <h3>
                                    <strong>
                                        {saved.title} by {saved.author}
                                    </strong></h3>
                                        <p>{saved.description} </p>

                                        <a href={saved.link}>View book</a>
                                    <button onClick={() => this.deleteSavedBook(saved._id)}>Delete book!</button>
                                </ListItem>
                            ))}

                        </List>


                    </Col>



                </Row>
            </Container>





        )
    }



}

export default SavedBooks