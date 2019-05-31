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
	state = {
		items: [],
		changed: false
	};

	componentDidMount() {
		this.props.requestAnimals();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.new) {
			this.props.animals.unshift(nextProps.new);

			this.setState({changed: true})
		}
	}

	deleteMe = id => {
		if (window.confirm('Are you sure you wish to delete this animal?')) 
			this.props.deleteAnimal(id);
			this.setState({ changed: true });

	};

	updateSearch = e => {
		var updatedList = this.props.animals;
		updatedList = updatedList.filter( item => {
			return item.animalSpecies.toLowerCase().search(e.target.value.toLowerCase()) !== -1 ||
			item.animalName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
		});
		this.setState({ items: updatedList });
		this.setState({ changed: false });

		console.log(this.state.items);
	};

	render() {

		let myAnimals = [];

		if(this.state.items.length && this.state.changed===false)
			myAnimals = this.state.items;
		else{
			myAnimals = this.props.animals;
		}

		return myAnimals.length ? (
			<div>
				<Row className="mt-4 mr-5 ml-5">
					<p className="display-4"> Search Animals <small> Species or Name </small></p>
					<input
						id="search"
						className="form-control"
						placeholder="Search for animals by SPECIES OR NAME"
						onChange={event => this.updateSearch(event)}
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
