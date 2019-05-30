import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import '../../style/home.css'


export default function Navbars() {
	return (
		<div>
			<Navbar className="navbar sticky-top" bg="success" variant="dark">
				<Navbar.Brand>Animal DayCare RWA</Navbar.Brand>
				<Nav className="ml-auto text-white">
					<Nav.Link href="/">All animals</Nav.Link>
					<Nav.Link href="/doctors">Our Doctors</Nav.Link>
					<Nav.Link href="/about">About Us</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
