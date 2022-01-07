import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../components/home";
import Cards from "../components/cards";
import Form from "../components/form";
import Delete from "../components/deleteall";

document.addEventListener("DOMContentLoaded", () => {
	render(
		<Router>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Cards />} />
					<Route path="sleepform" element={<Form />} />
					<Route path="deleteall" element={<Delete />} />
				</Route>
			</Routes>
		</Router>,
		document.body.appendChild(document.createElement("div"))
	);
});
