import React, {Component} from 'react';
import { Col, Label, Input, Button, Form, FormGroup, Container} from "reactstrap";
import NewBookList from "./NewBookList";

const bookList = [
    {
        bookName:"Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        isbn: 12345678,
        publisher: "Can Yayınları"
    },
    {
        bookName:"Yüzyıllık Yalnızlık",
        author: "Gabriel Garcia Marquez",
        isbn: 987654321,
        publisher: "Can Yayınları"
    }

];

class NewBook extends Component {

    constructor(props){
        super(props);

        this.state = {
            bookName: '',
            author:'',
            isbn:'',
            publisher:''
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
       bookList.push(
           {
               bookName: this.state.bookName,
               author: this.state.author,
               isbn: this.state.isbn,
               publisher: this.state.publisher
           }
       );

       console.log(bookList);
       this.forceUpdate();

    }


    render() {

        const {bookName}=this.state;
        return (
            <Container>
                <Form>
                    <FormGroup row>
                        <Label sm="2">Book Name</Label>
                        <Col sm="10">
                            <Input type="text" name="bookName" onChange={(e)=>this.handleBook(e)}  />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label  sm="2">Author</Label>
                        <Col sm="10">
                            <Input type="text" name="author" onChange={(e)=>this.handleBook(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">Book Type</Label>
                        <Col sm="10">
                            <Input type="select" name="publisher" onChange={(e)=>this.handleBook(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">ISBN</Label>
                        <Col sm="10">
                            <Input type="number" name="isbn" onChange={(e)=>this.handleBook(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">Publication Date</Label>
                        <Col sm="10">
                            <Input type="date" name="publisher" onChange={(e)=>this.handleBook(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm="2">Publisher</Label>
                        <Col sm="10">
                            <Input type="text" name="publisher" onChange={(e)=>this.handleBook(e)} />
                        </Col>
                    </FormGroup>

                    <Button color="primary" onClick={this.saveNewBook}>Save</Button>
                </Form>
                <br/>
                <NewBookList bookList={bookList}/>
            </Container>
        );
    }
}

export default NewBook;