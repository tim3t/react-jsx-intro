const NamedComponent = (props) => {
	return <p>My name is {props.name}</p>;
};

ReactDOM.render(<NamedComponent name='Timothy' />, document.getElementById('root'));
