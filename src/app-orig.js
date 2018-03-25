//JSX - Javascript XML

//create app object title/subtitle
//user title/subtitle in the template
//render template

const app = {
	title: 'Patrick Brady',
	subtitle: 'Front-End Developer',
	options: ['One', 'Two']
};

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
		<ol>
			<li>One</li>
			<li>Two</li>
		</ol>
	</div>
);



//only render the the subtitle and the <p> if the subtitle exist - logical and operator
// render new <p> - if optons.length > 0 "heare are your options" , "No options" <-- ternary operator

const user = {
	name: 'Patrick',
	age: 35,
	location: 'Las Vegas'
};

//function for if statement
function getLocation(location) {
	if (location){
		return <p>Location: {location}</p>;
	}
}
const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);