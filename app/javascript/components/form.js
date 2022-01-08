import React, {useState} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useFormik, useField, useFormikContext} from "formik";

const schema = Yup.object({
	hours: Yup.number()
		.required("Required")
		.max(24, "you can't sleep for more than 24 hrs in a day!")
		.min(1, "0 is no sleep. this is not possible."),
	date: Yup.string().required("Required")
});

const TaskInput = () => {
	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);
	const [formRef, setFormRef] = useState(0);

	const updateDatabase = values => {
		const body = values;
		const token = document.querySelector('meta[name="csrf-token"]').content;
		const url = "api/v1/sleeps/create";
		fetch(url, {
			method: "POST",
			headers: {
				"X-CSRF-Token": token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then(response => {
				setSuccess(true);
				ReactDOM.findDOMNode(formRef).reset();
				window.setTimeout(() => {
					setSuccess(false);
				}, 3000);
			})
			.catch(error => {
				console.log(error.message);
				setFailure(true);
				window.setTimeout(() => {
					setFailure(false);
				}, 6000);
			});
	};

	const formik = useFormik({
		initialValues: {hours: "", date: ""},
		onSubmit: updateDatabase,
		validationSchema: schema
	});

	return (
		<Form
			noValidate
			onSubmit={formik.handleSubmit}
			id="mainForm"
			ref={form => setFormRef(form)}
		>
			<Alert show={success} variant="success">
				Sleep Record added!
			</Alert>
			<Alert show={failure} variant="danger">
				Error! Task was not added to the database!
			</Alert>
			<Form.Group className="mb-3" controlId="TaskInput">
				<Form.Label>Hours Slept</Form.Label>
				<Form.Control
					type="textarea"
					placeholder="Enter Hours Slept"
					rows={3}
					name="hours"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={!!formik.errors.hours}
				/>
				<Form.Control.Feedback type="invalid">
					{formik.errors.hours}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3" controlId="DateInput">
				<Form.Label>Date</Form.Label>
				<Form.Control
					type="date"
					name="date"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={!!formik.errors.date}
				/>
				<Form.Control.Feedback type="invalid">
					{formik.errors.date}
				</Form.Control.Feedback>
			</Form.Group>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default TaskInput;
