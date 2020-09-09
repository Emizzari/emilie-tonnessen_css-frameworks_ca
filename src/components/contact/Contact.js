import React from 'react';
import ContactForm from './content/ContactForm';
import ContactInfo from './content/ContactInfo';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <>


        <Container>
            <h1>Submit your details</h1>

            <Row>
                <Col>
                    <ContactInfo />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact
