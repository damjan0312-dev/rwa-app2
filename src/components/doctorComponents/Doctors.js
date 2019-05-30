import React, { Component } from 'react';
import PropTypes from 'prop-types';

// redux, react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDoctors, doctorsAnimals } from '../../actions/doctorActions';



// react-bootstrap
import { Row, Col, Card, Button } from 'react-bootstrap';

import '../../style/home.css'

class Doctors extends Component {
	componentDidMount() {
		this.props.fetchDoctors();
    }
    

    getTheirAnimals = (id) => {
        this.props.doctorsAnimals(id);
    }


	render() {
        
		return this.props.doctors.length ? (
			<div>
				<div id="cardsDR" className="d-flex justify-content-center display-4">Our Doctors</div>
				<Row>
					{this.props.doctors.map(doctors => (
						<Col key={doctors.id} className="col-sm-3">
							<Card id="cards" className="mt-2" style={{ width: '18rem' }}>
								<Card.Img variant="top" src={doctors.picture} />
								<Card.Body>
									<Card.Title>
										{doctors.first_name} {doctors.last_name}
									</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">{doctors.hospital}</Card.Subtitle>
									<hr />
									<Card.Text>
										<b> First Name : </b> {doctors.first_name} <br />
										<b> Last Name: </b> {doctors.last_name} <br />
										<b> Gender: </b>
										{doctors.gender} <br />
										<b> E-mail: </b>
										{doctors.email}
									</Card.Text>

                                    <button 
                                    onClick={() => this.getTheirAnimals(doctors.id)}
                                    className="btn btn-outline-success"> 
                                    See Doctor's Animals
                                    </button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<hr />
			</div>
		) : (
			<h1>Please wait...</h1>
		);
	}
}

Doctors.propTypes = {
	fetchDoctors: PropTypes.func.isRequired,
    doctors: PropTypes.array.isRequired,
    doctorsAnimals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	doctors: state.doctors_reducer.doctors,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchDoctors, doctorsAnimals }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Doctors);
