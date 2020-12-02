import React from "react";
import "./about.scss";
import {Card,Row, Container} from 'react-bootstrap';

function About(){

    return(
        <div>
            <h3>Apie projektą</h3>
            <Container>
                <Row>
                    <Card
                    bg="info"
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Atliko - Amadėjus Valionis </Card.Header>
                    <Card.Body>
                    <Card.Title> Užduotis - žinių patikrinimas: </Card.Title>
                    <Card.Text>
                        API paemimas ir panaudojimas surasti domenus ir išsaugoti jų aprašymus.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Row>
                
            </Container>
        </div>
    );
}

export default About;