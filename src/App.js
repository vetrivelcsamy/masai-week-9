import React from "react";
import Result from "./result";
import Filter from "./filter";

class App extends React.Component {
	render() {
		return (
			<div>
				<div className='container'>
					<Result />
					<Filter />
				</div>
			</div>
		);
	}
}

export default App;
