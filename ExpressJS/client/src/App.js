import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Category from "./components/Category";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      toys: [],
    };
  }
  //get all categories
  //get al toys
  componentDidMount() {
    //  fetch("http://localhost:3000/toys")
    //   .then((res1) => res1.json())
    //   .then(
    //     (result1) => {
    //       this.setState({ toys: result1 });
    //     },
    //     (error) => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   );
    Promise.all([
      fetch("http://localhost:3000/categories"),
      fetch("http://localhost:3000/toys"),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(
        ([result1, result2]) => {
          this.setState({
            categories: result1,
            toys: result2
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home toys={this.state.toys}/>}/>
          <Route path="/category" element={<Category categories={this.state.categories}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
