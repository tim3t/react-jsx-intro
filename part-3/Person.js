const Person = (props) => {
	let voteMsg;
	if (props.age >= 18) {
		voteMsg = 'Please go vote!';
	}
	else {
		voteMsg = 'You must be 18';
	}
	return (
		<div>
			<p>Learn some information about this person</p>
			<p>
				{props.name.slice(0, 6)}, {props.age}
			</p>
			<h3>{voteMsg}</h3>
			<h2>Hobbies</h2>
			<ul>{props.hobbies.map((h) => <li>{h}</li>)}</ul>
		</div>
	);
};

ReactDOM.render(<Person />);
