let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility; // flips 
    render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <p>Hey. Here are some details to show!</p>

            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();











