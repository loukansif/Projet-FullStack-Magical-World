import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      toys: []
    }
  }

  //get all categories
  //get al toys
  componentDidMount() {
    Promise.all([
      fetch("http://localhost:5000/categories"),
      fetch("http://localhost:5000/toys"),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(
        ([result1, result2]) => {
          this.setState({
            categories: result1,
            toys: result2,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
  return (
    <div className="App">
      
      <header className="App-header">
        
      </header>
    </div>
  );
}
}

export default App;
