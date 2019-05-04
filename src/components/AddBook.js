import React, {Component} from 'react';
import {Col, Row, Label, Input, Button, Form, FormGroup, Container, Jumbotron} from "reactstrap";
import BookList from "./BookList";
import Select from "react-select";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import {bookTypeOptions} from "../helper/options";
import ButtonGroup from "reactstrap/es/ButtonGroup";

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
            validationErrors: {}
        }
    }

    handleInput = e => {

        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    handleSelect = selectedItem => {
        if (selectedItem !== null) {
            const name = selectedItem.type;
            this.setState({
                [name]: selectedItem
            });
        }

        this.forceUpdate();

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
            validationErrors: {}
        })

        this.forceUpdate();
    }

    deleteBook = bookId => {
        bookList = bookList.filter(book => bookList.indexOf(book) !== bookId);
        this.forceUpdate();
    }

    saveNewBook = () => {

       const isFormValid = this.validateFields();
       if(isFormValid) {
           bookList.push(
               {
                   bookName: this.state.bookName,
                   author: this.state.author,
                   bookType: this.state.bookType.label,
                   isbn: this.state.isbn,
                   publicationDate: this.state.publicationDate,
                   publisher: this.state.publisher
               }
           );
       }

        this.forceUpdate();

    }

    validateFields= () => {
        const {bookName, author, bookType, isbn, publicationDate, publisher} = this.state;

        const errors = {}

        if (!bookName) {
            errors['bookName'] = 'Book name cannot be empty!';
        }
        if (!author) {
            errors['author'] = 'Author cannot be empty!';
        }

        if (!bookType) {
            errors['bookType'] = 'Book type cannot be empty!';
        }

        if (!isbn) {
            errors['isbn'] = 'ISBN cannot be empty!';
        }

        if (!publicationDate) {
            errors['publicationDate'] = 'Publication date cannot be empty!';
        }

        if (!publisher) {
            errors['publisher'] = 'Publisher cannot be empty!';
        }

        this.setState({validationErrors: errors});

        return Object.keys(errors).length === 0;

    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.bookName !== this.state.bookName){
            localStorage.setItem('bookName', this.state.bookName);
        }
    }


    render() {

        const {bookName, author, bookType, isbn, publicationDate, publisher, validationErrors} = this.state;
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-6">Add New Book</h1>
                    <Form>
                        <FormGroup row>
                            <Label sm="2">Book Name</Label>
                            <Col sm="10">
                                <Input type="text" name="bookName" value={bookName}
                                       onChange={(e) => this.handleInput(e)}/>
                            </Col>
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.bookName}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Author</Label>
                            <Col sm="10">
                                <Input type="text" name="author" value={author} onChange={(e) => this.handleInput(e)}/>
                            </Col>
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.author}</span>
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
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.bookType}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">ISBN</Label>
                            <Col sm="10">
                                <Input type="number" name="isbn" value={isbn} onChange={(e) => this.handleInput(e)}/>
                            </Col>
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.isbn}</span>
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
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.publicationDate}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm="2">Publisher</Label>
                            <Col sm="10">
                                <Input type="text" name="publisher" value={publisher}
                                       onChange={(e) => this.handleInput(e)}/>
                            </Col>
                            <Col>
                                <span style={{color: "red"}}>{validationErrors.publisher}</span>
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