import React, {Component} from 'react';
import {Col, Row, Label, Input, Button, Form, FormGroup, Container, Jumbotron} from "reactstrap";
import BookList from "./BookList";
import Select from "react-select";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import {bookTypeOptions} from "../helper/options";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import { Alert } from 'reactstrap';

let bookList = [];

class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookName: '',
            author: '',
            bookType: '',
            isbn: '',
            publicationDate: '',
            publisher: '',
            isNotValidateForm:false
        }
    }

    handleInput = e => {
        const name = e.target.name;
        console.log("name: " + name);
        this.setState({
            [name]: e.target.value
        });
    }

    handleSelect = selectedItem => {
        if (selectedItem !== null) {
            const name = selectedItem.type;
            this.setState({
                [name]: selectedItem.value 
            });
        }
    }

    handleDate = selectedDate => {
        if (selectedDate !== null) {
            this.setState({
                publicationDate: selectedDate.format("DD/MM/YYYY")
            });
        }

    }

    clearForm = () => {
        this.setState({
            bookName: '',
            author: '',
            bookType: '',
            isbn: '',
            publicationDate: '',
            publisher: '',
            isNotValidateForm:false
        })

        this.forceUpdate();
    }

    deleteBook = bookId => {
        console.log(bookId)
        bookList = bookList.filter(book => bookList.indexOf(book) !== bookId);
        console.log(bookList);

        this.forceUpdate();
    }


    validateForm = () => {
        const {bookName,author,bookType,isbn,publicationDate,publisher} = this.state;
        if (bookName === "" || author === "" || bookType === "" ||isbn===""||publicationDate==="" ||publisher==="" ) {
            return false;
        }
        return true;
        
    }

    saveNewBook = () => {
        if (!this.validateForm()) {
            this.setState({
                isNotValidateForm :true
            })
            return;
        }


        bookList.push(
            {
                bookName: this.state.bookName,
                author: this.state.author,
                bookType: this.state.bookType,
                isbn: this.state.isbn,
                publicationDate: this.state.publicationDate,
                publisher: this.state.publisher
            }
        );

        this.forceUpdate();
        
    }

    render() {

        const {bookName, author, bookType, isbn, publicationDate, publisher,isNotValidateForm} = this.state;
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-6">Add New Book</h1>
                    <Form>
                    {
                                isNotValidateForm ? 
                                <Alert color="danger">
                                 Please check your input values
                               </Alert>
                                 :null
                             }

                        <FormGroup row>
                            <Label sm="2">Book Name</Label>
                            <Col sm="10">
                                <Input type="text" name="bookName" value={bookName}
                                       onChange={(e) => this.handleInput(e)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Author</Label>
                            <Col sm="10">
                                <Input type="text" name="author" value={author} onChange={(e) => this.handleInput(e)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Book Type</Label>
                            <Col sm="10">
                                <Select
                                    name="bookType"
                                    placeholder="Select book type"
                                    value={bookType}
                                    options={bookTypeOptions}
                                    onChange={this.handleSelect}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">ISBN</Label>
                            <Col sm="10">
                                <Input type="number" name="isbn" value={isbn} onChange={(e) => this.handleInput(e)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Publication Date</Label>
                            <Col sm="10">
                                <Datetime
                                    dateFormat="DD/MM/YYYY"
                                    inputProps={{className: 'form-control', placeholder: "Select publication date"}}
                                    timeFormat={false}
                                    value={publicationDate}
                                    onChange={this.handleDate}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Publisher</Label>
                            <Col sm="10">
                                <Input type="text" name="publisher" value={publisher}
                                       onChange={(e) => this.handleInput(e)}/>
                            </Col>
                        </FormGroup>
                        <hr className="my-2"/>
                        <div className="float-right">
                            <Button color="danger" onClick={this.clearForm}>Clear</Button>
                            <Button color="primary" onClick={this.saveNewBook}>Save</Button>
                        </div>

                    </Form>
                </Jumbotron>
                <BookList bookList={bookList} delete={this.deleteBook}/>
            </Container>
        );
    }
}

export default AddBook;
