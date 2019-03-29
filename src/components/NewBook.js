import React, {Component} from 'react';
import { Col, Label, Input, Button, Form, FormGroup, Container} from "reactstrap";

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
            <Container>
                <Form>
                    <FormGroup row>
                        <Label sm="2">Book Name</Label>
                        <Col sm="10">
                            <Input type="text" name="bookName" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label  sm="2">Author</Label>
                        <Col sm="10">
                            <Input type="text" name="author"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">ISBN</Label>
                        <Col sm="10">
                            <Input type="number" name="isbn" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">Publisher</Label>
                        <Col sm="10">
                            <Input type="text" name="publisher" />
                        </Col>
                    </FormGroup>
                    <Button color="primary">Save</Button>
                </Form>
            </Container>
        );
    }
}

export default NewBook;