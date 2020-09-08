import React from 'react'
import TabImage from '../images/tab-image.png';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';


function ContentTabs() {
    return (
        <>
        <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="First">
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={TabImage} />
                        <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="second" title="Second">
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={TabImage} />
                        <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="third" title="Third">
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={TabImage} />
                        <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Tab>
        </Tabs>
        </>
    )
}

export default ContentTabs
