import React from 'react';

// react-bootstrap
import { Row, Col, Card, Button } from 'react-bootstrap';

import '../../style/home.css';

import FontPicker from 'font-picker-react';

export default function About() {
	return (
		<div>
			<section className="aboutUS">
            <Row className="d-flex justify-content-center"> 
					<Col xs={8} className="d-flex justify-content-center">
						<p className="display-4"> OUR STAFF</p>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center"> 
					<Col xs={8}>
						<Card.Img
							className="thisOne"
							variant="top"
							src="http://kingsburgvet.com/wp-content/uploads/2015/07/Kingsburg-Vet-open.jpg"
						/>
					</Col>
				</Row>
			</section>
			<section className="objects">
				<Row>
                <Col xs={12} className="d-flex justify-content-center">
						<p className="display-4"> OUR OBJECTS </p>
					</Col>
				</Row>
				<Row className="pt-3 ml-3">
					<Col xs={5}>
						<Card.Img
							className="thisOne"
							variant="top"
							src="https://kenmorevet.com/wp-content/uploads/2016/01/slider.jpg"
						/>
					</Col>
					<Col xs={7} className="text-justify " style={{ fontSize: '1em' }}>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).
					</Col>
				</Row>

				<Row className="pt-5 ml-3">
					<Col xs={5}>
						<Card.Img
							className="thisOne"
							variant="top"
							src="https://www.bellevueanimalhospital.net/images/imgHome1.png"
						/>
					</Col>
					<Col xs={7}>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).
					</Col>
				</Row>

				<Row className="pt-5 ml-3">
					<Col xs={5}>
						<Card.Img
							className="thisOne"
							variant="top"
							src="https://www.houstonspca.org/assets/images/third-level-interior/ambulance-rescue-team.jpg"
						/>
					</Col>
					<Col xs={7}>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).
					</Col>
				</Row>
			</section>
		</div>
	);
}
