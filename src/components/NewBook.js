import React, {Component} from 'react';
import {Card, CardTitle, CardBody, Row, Col, Label, Input, Button} from "reactstrap";

class NewBook extends Component {

    constructor(props){
        super(props);

        this.state = {
            bookName: '',
            author:''
        }
    }

    handleBook = e =>{

        const name = e.target.name;
        console.log("name: " + name);
        this.setState({
            [name]: e.target.value
        });
    }

    saveNewBook = () =>{
        console.log(this.state.bookName);
    }


    render() {

        const {bookName}=this.state;
        return (
            <div>
                <Card>
                    <CardTitle style={{backgroundColor: '#f1f1f1'}}>
                        New Book
                    </CardTitle>
                    <CardBody>
                        <Row>
                            <Label  sm="2" size="md">Book Name</Label>
                            <Col>
                                <Input type="text" name="bookName" onChange={e=>this.handleBook(e)} />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Label  sm="2" size="md">Author</Label>
                            <Col>
                                <Input type="text" name="author" onChange={e=>this.handleBook(e)} />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button color="primary" size="md" onClick={this.saveNewBook}>Save</Button>
                            </Col>
                        </Row>
                    </CardBody>

                </Card>
            </div>
        );
    }
}

export default NewBook;