// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import {Outlet, Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export default () => (
	<div>
		<Navbar bg="dark" variant="dark">
			<Nav className="ml-auto">
				<Navbar.Brand as={Link} to="/">
					Sleep Game
				</Navbar.Brand>
				<Nav.Link as={Link} to="/sleepform">
					Add Sleep Record
				</Nav.Link>
				<Nav.Link as={Link} to="/deleteall">
					Delete All Records
				</Nav.Link>
			</Nav>
		</Navbar>
		<Outlet />
	</div>
);
