class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <div>
        <h1>HEY {this.state = "Laura"}!</h1>
        <h2> What type of manimal are you? </h2>
      </div>
    )
  }
};



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
