const Tweet = (props) => {
	return (
		<div>
			Username: {props.username}, Name: {props.name}, Date: {props.date}, Message: {props.message}
		</div>
	);
};

ReactDOM.render(<Tweet />);
