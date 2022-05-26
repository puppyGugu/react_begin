import './App.css';
import {Route} from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Day from "./Day";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Route path="/" exact component={Home}/>
        <Route path="/day/:day_id" exact component={Day}/>
      </Wrap> 
    </div>
  );
}

const Wrap = styled.div`
  width: 300px;
  margin: 50px auto 0;
  padding: 20px;
  border: 1px solid #ddd;
  borderRadius: 10px;
`
export default App;