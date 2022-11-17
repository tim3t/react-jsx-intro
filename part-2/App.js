const App = () => {
	return (
		<div>
			<Tweet username='hellokitty' name='Kat' date='11/10/03' message='Hello world!' />
			<Tweet username='james123' name='Larry' date='11/11/13' message='Testing, testing' />
			<Tweet username='mustacheman' name='Tina' date='11/12/22' message='First!' />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
