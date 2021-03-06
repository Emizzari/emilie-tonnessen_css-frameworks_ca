import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
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
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage1}/>
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                            <Card.Img variant="top" className="article__img" src={NewsImage2} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage3} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage4} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage5} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage6} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage7} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card className="article">
                        <Card.Img variant="top" className="article__img" src={NewsImage8} />
                        <Card.Body className="article__body">
                            <Card.Title className="article__title">Nunc porttitor vel</Card.Title>
                            <Card.Text className="article__text">
                                Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button className="article__btn" variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Articles