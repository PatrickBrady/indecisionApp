//Component is a class of React that is being extended
class IndecisionApp extends React.Component {
	render(){
		const title ='Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const text = 'Put your text here!'
		const options = ['Thing one', 'Thing two', 'Thing four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle} text={text}  />
				<Header />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		)
	}
}
class Header extends React.Component{
	render(){
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

class Action extends React.Component{
	handlePick(){
		alert('Ben is a KOOK!!!');
	}
	render(){
		return(
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}

//Options -> Options component
// setup options prop for options component
// Render the length of the array
//create new P tag with a key to match each option
// --> {this.props.options.map((option) => <p key={option}>{option}</p>)}

class Options extends React.Component {
	handleRemoveAll(){
		alert('Remove all fired');
	}
	render() {
		return(
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				<h2>{this.props.options.length}</h2>
				{this.props.options.map((option) => <Option key={option} optionText={option} />)}
			</div>
		);
	}
}

//Option --> render inside Options

class Option extends React.Component {
	render() {
		return (
			<div>
				The option is: {this.props.optionText}
				
			</div>
		);
	}
}
const handleAddOption = (e) => {
	e.preventDefault();
	//console.log('form submitted, woohooo!');
	const option = e.target.elements.option.value;

	if (option) {
		IndecisionApp.options.push(option);
		console.log(option);
		
		e.target.elements.option.value = '';
		//renderTemplate();
	}
	
};
class AddOption extends React.Component {
	handleAddOption(e){
		e.preventDefault();	

		const option = e.target.elements.option.value.trim();

		if (option) {
			alert(option);
			
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));