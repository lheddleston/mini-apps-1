class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage = 0;
    };
  }
  handleClick() {
    console.log('Clicked');
  }
  render() {
    return (
      <div>
        <h1>HEY {this.state = "Laura"}!</h1>
        <h2> What type of manimal are you? </h2>
        <button className="button" type="button" onClick={handleClick}>Find Out Here</button>
      </div>
    )
  }
};

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <h1> Page One!</h1>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
