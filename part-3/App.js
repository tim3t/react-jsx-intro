const App = () => {
	return (
		<div>
			<Person name='David' age={13} hobbies={[ 'Walking', 'Reading', 'Dancing' ]} />
			<Person name='Samantha' age={18} hobbies={[ 'Puzzles', 'Cats', 'Jumping' ]} />
			<Person name='JoLizabelle' age={33} hobbies={[ 'Sleeping on the couch', 'Naps', 'Being unconcious' ]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
