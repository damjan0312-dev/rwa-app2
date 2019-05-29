import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';


export default function Navbars() {
	return (
		<div>
			<Navbar bg="success" variant="dark">
				<Navbar.Brand>Animal DayCare RWA</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="/">All animals</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
