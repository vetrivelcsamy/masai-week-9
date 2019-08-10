import React from "react";
import axios from "axios";
// const apiEndpoint =
// 	"https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json";

//react comp
class Result extends React.Component {
	//
	state = {
		persons: []
	};

	componentDidMount() {
		axios
			.get(
				`https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json`
			)
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
				console.log(persons.id);
			});
	}
	//
	render() {
		return (
			<div>
				<div className='col' style={{ marginBottom: "10px" }}>
					<br />
					<h4 className='text-center' style={{ margintop: "20px" }}>
						Student Marks
					</h4>
					<form onSubmit={this.handleSubmit}>
						<label>Enter Input</label>
						<input
							type='text'
							className='form-control'
							placeholder='Enter'
							ref={input => {
								this.searchBox = input;
							}}
						/>
						<br />
						<center>
							<button className='btn btn-primary' type='button' onClick={this.onClick}>
								Sumbit
							</button>
						</center>
						<br />
					</form>
				</div>
			</div>
		);
	}
}

export default Result;
