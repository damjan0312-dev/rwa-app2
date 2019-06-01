import React, { Component } from 'react';

// redux, react-redux
import { connect } from 'react-redux';

// react-bootstrap
import { Row, Col, Card} from 'react-bootstrap';

class TheirAnimals extends Component {
    render() {
	
		return this.props.animals.length ? (
			<Row>
				{this.props.animals.map(animal => (
					<Col key={animal.id} className="col-sm-4  d-flex justify-content-center">
						<Card id="cards" className="mr-2 ml-5 mt-5" style={{ width: '18rem' }}>
							<Card.Img variant="top" src={animal.animalPicture} />
							<Card.Body>
								<Card.Title className="text-center">{animal.animalSpecies}</Card.Title>
								<hr />
								<Card.Text>
									Name : <b> {animal.animalName} </b> <br />
									Scientific Name: {animal.animalScientificName} <br />
									Illnes Description: {animal.animalStateDescription}
								</Card.Text>
								
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		) : (
			<h5>*Choose a doctor</h5>
		);
	}
}


const mapStateToProps = state => ({
    animals: state.theirAnimals_reducer.theirAnimals
}
)

export default connect(mapStateToProps)(TheirAnimals);
