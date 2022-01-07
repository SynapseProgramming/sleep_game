import React from "react";

export default () => {
	const handleDelete = () => {
		const url = `api/v1/sleeps/delete`;
		const token = document.querySelector('meta[name="csrf-token"]').content;
		fetch(url, {
			method: "DELETE",
			headers: {
				"X-CSRF-Token": token,
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then(() => {
				console.log("ALL deleted");
			})
			.catch(error => console.log(error.message));
	};

	return (
		<button
			className="btn btn-danger btn-xs"
			onClick={() => {
				handleDelete();
			}}
		>
			Delete All Records
		</button>
	);
};
