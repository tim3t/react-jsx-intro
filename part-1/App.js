const App = () => {
	return (
		<div>
			<h1>
				<FirstComponent />
			</h1>
			<p>
				<NamedComponent name='Timothy' />
			</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
