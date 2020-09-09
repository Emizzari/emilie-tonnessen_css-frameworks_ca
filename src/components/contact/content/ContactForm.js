import React from 'react';
import {Form, Button, FormControl, InputGroup} from 'react-bootstrap';

function ContactForm() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>https://</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup" placeholder="www.example.com" />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ContactForm
