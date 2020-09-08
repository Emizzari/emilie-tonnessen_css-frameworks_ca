import React from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import NewsImage1 from '../images/news-1.png';
import NewsImage2 from '../images/news-2.png';
import NewsImage3 from '../images/news-3.png';
import NewsImage4 from '../images/news-4.png';
import NewsImage5 from '../images/news-5.png';
import NewsImage6 from '../images/news-6.png';
import NewsImage7 from '../images/news-7.png';
import NewsImage8 from '../images/news-8.png';

function Articles() {
    return (
        <>
        <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage1} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage2} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage3} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage4} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage5} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage6} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage7} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={NewsImage8} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">MORE</Button>
                </Card.Body>
            </Card>
        </Row>
        
        </>
    )
}

export default Articles
