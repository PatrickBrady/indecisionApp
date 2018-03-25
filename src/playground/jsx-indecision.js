 //JSX - Javascript XML

//create app object title/subtitle
//user title/subtitle in the template
//render template

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	//console.log('form submitted, woohooo!');
	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		console.log(option);
		
		e.target.elements.option.value = '';
		renderTemplate();
	}
	
};
const removeAll = () => {
	app.options = [];
	renderTemplate();
	console.log('The length is ' + app.options.length);
};



//const numbers = [24,17,15,12,73,56,2];

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length );
	const option = app.options[randomNum];
	console.log(randomNum);
	alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
			<p>{app.options.length}</p>

			
			{
				//numbers.map((number) => {
					//return <p key={number}>Number: {number}</p>;
				//})
			}
			
			
			<ol>
				{
					app.options.map((option) => {
						let optionNum = 0;
						console.log(optionNum);
						optionNum = optionNum +1;
						return <li key={option}>The option {app.options.length} is: {option}</li>;
					})
				}
			</ol>
			
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do</button>
			<button onClick={removeAll}>Remove All</button>
	
		</div>
	);
	ReactDOM.render(template, appRoot);
};



renderTemplate();
// Create a render function like the counter that renders the new JSX
// call it right away
// call it each time the options array gets added to 


