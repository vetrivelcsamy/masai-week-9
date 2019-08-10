import React from "react";
const axios = require("axios");

class Filter extends React.Component {
	state = {
		isLoading: true,
		users: [],
		filterGender: "",
		error: null
	};
	// axios config
	async fetchUsers() {
		const api = axios.create({
			baseURL: `https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json`
		});
		const response = await api.get();
		try {
			this.setState({
				users: response.data,
				isLoading: false
			});
		} catch (error) {
			this.setState({ error, isLoading: false });
		}
	}

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		const { isLoading, users, error } = this.state;
		return (
			<div className='row'>
				<br />

				<React.Fragment>
					{error ? <p>{error.message}</p> : null}
					{!isLoading ? (
						users.map(user => {
							const { id, first_name, last_name, gender, year, marks } = user;
							return (
								<div key={id} className='col-12 col-sm-6 col-lg-4' style={{ marginBottom: "10px" }}>
									<div>
										<div className='card'>
											<div className='card-body'>
												<h4 className='card-title'>{id}</h4>
												<h6 className='card-subtitle mb-2'>
													{first_name} {last_name}
												</h6>
												<p className='card-text'>
													{gender} || Year: {year} || {marks}
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<h3>Loading...</h3>
					)}
				</React.Fragment>
			</div>
		);
	}
}
export default Filter;
