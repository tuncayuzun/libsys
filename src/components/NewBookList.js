import React, {Component} from 'react';
import {Container, Table, Button} from "reactstrap";

const NewBookList=props=>{
        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publisher</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.bookList === null ? null :
                            props.bookList.map((book, idx)=>(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.publisher}</td>
                                    <td><Button color="danger"><i className="fas fa-trash"></i></Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        );
}

export default NewBookList;