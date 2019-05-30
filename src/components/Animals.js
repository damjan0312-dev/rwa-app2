import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { requestAnimals, selectAnimal, deleteAnimal } from '../actions/actions';

// redux, react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// react-bootstrap
import { Row, Col, Card, Button } from 'react-bootstrap';

// css
import '../style/home.css';

class Animals extends Component {

	componentDidMount() {
		this.props.requestAnimals();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.new) {
			console.log('new');
			this.props.animals.unshift(nextProps.new);
		}
	}

	deleteMe = id => {
		if (window.confirm('Are you sure you wish to delete this animal?')) 
			this.props.deleteAnimal(id);
	};

	updateSearch = (event) => {
		this.setState({search: event.target.value.substr(0, 20)});
	}

	render() {

		let myAnimals = this.props.animals;

		return myAnimals.length ? (
			<div>
				<Row className="mt-4 mr-5 ml-5">
					<input 
					id="search" 
					className="form-control" 
					placeholder="SearchAnimals"
					onChange={this.updateSearch}
					/>
				</Row>
		
			<Row>
				{myAnimals.map(animal => (
					<Col key={animal.id}>
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
								<Button className="btn btn-danger mt-2" onClick={() => this.deleteMe(animal.id)}>
									Animal passed away <br /> <small>*Delete Animal from System</small>
								</Button>
								<Button
									className="btn btn-success mt-2"
									onClick={() => this.props.selectAnimal(animal)}
								>
									See More
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>

			</div>
			
		) : (
			<h1>Please wait...</h1>
		);
	}
}

Animals.propTypes = {
	requestAnimals: PropTypes.func.isRequired,
	animals: PropTypes.array.isRequired,
	new: PropTypes.object,
	selectAnimal: PropTypes.func.isRequired,
	deleteAnimal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	animals: state.animals_reducer.animals,
	new: state.animals_reducer.newAnimal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestAnimals, selectAnimal, deleteAnimal }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Animals);
