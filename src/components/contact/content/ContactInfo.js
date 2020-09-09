import React from 'react'
import { Container, Row } from 'react-bootstrap'

function ContactInfo() {
    return (
        <>
            <Container>
                <Row>
                    <i class="fas fa-envelope"></i>
                    <p>hello@yay.com</p>
                </Row>
                <Row>
                    <i class="fas fa-phone"></i>
                    <p>123 456 7890</p>
                </Row>
                <Row>
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <p>123 Some street</p>
                        <p>Somewhere</p>
                        <p>Some City</p>
                        <p>10000</p>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ContactInfo