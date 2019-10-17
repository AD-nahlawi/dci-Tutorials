import React, { Component } from 'react'
import {Dropdown, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Columns from './Columns.js';

export default class BootstrapApp extends Component {
    state = {
        numCols: 2,
        themes: ['primary','success','danger','warning','dark']
    }
    addColum = (numCols) =>{
        this.setState( { numCols : numCols } );
        console.log(numCols);
    }
    render() {
        return (
            <div className = 'App'>
                <Container className="containerClass">
                    <Row>
                        <Col md ={2}>
                            <Dropdown>
                                <Dropdown.Toggle variant = "success">
                                    Dropdown Button
                                </Dropdown.Toggle> 

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick = { () => this.addColum( 1 ) }> Item 1</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 2 ) }> Item 2</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 3 ) }> Item 3</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 4 ) }> Item 4</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 5 ) }> Item 5</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 6 ) }> Item 6</Dropdown.Item>
                                    <Dropdown.Item onClick = { () => this.addColum( 7 ) }> Item 7</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md = {10}>
                            <Row>
                                <Columns number = {this.state.numCols} themes = {this.state.themes} ></Columns>
                            </Row>

                            {/* <Alert variant = 'danger'>
                                this is a react Alert 
                            </Alert> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}