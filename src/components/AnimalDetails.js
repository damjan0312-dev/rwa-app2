import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap'

class AnimalDetails extends Component {
	render() {
		return this.props.selected ? (
            <div className="d-flex justify-content-center pt-3 mt-5">
			<Card style={{ width: '28rem' }}>
				<Card.Img variant="top" src= {this.props.selected.animalPicture} />
				<Card.Body>
                    <Card.Title>{this.props.selected.animalName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.selected.animalSpecies}</Card.Subtitle>
                    <hr />
					<Card.Text>
                    <b>Scientific Name: </b>  {this.props.selected.animalScientificName} <br />
                    <hr />
                    <b>Doctor's description: </b> {this.props.selected.animalStateDescription}
					</Card.Text>
				</Card.Body>
			</Card>
            </div>
		) : (
			<h1> Please select animal...</h1>
		);
	}
}

const mapStateToProps = state => ({
	selected: state.selected_reducer.selectedAnimal,
});

export default connect(mapStateToProps)(AnimalDetails);
