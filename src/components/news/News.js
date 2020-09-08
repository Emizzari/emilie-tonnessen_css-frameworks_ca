import React from 'react';
import Paginations from './content/Paginations';
import Articles from './content/Articles';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function News() {
    return (
        <>
            <Container>
                <h1>News</h1>
            </Container>

            <Container>
                <Paginations />
            </Container>

            <Container>
                <Articles />
            </Container>

            <Container>
                <Paginations />
            </Container>
        </>
    )
}

export default News