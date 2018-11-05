import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Barista from "./Demo"
import SimpleSnackbar from "./DemoTest"
import Forms from "./jsons/index"
import HelloWord from "./add"
import Test from "./User/test"
import UserList from "./User/userList"
import Apps from "./dnd/board"
import Appt from "./dnd/test"
import { board } from "./data";
import Chart from "./chart/index"
import Example from "./bootstrap/index"
import SimpleCard from "./card/index"
import Parent from "./dom/parent"
// import Demo from "./jsonschema/index"
// import Boost from "./boostrap/index"
import MyForm from "./tryjson/index"
import DropdownExampleSearchSelection from "./semantic/index"
import LineItems from "./dataGrid";
// import Components from "./leaflet/index"
import DatePicker from './datePicker/index'
import Filter from './drawText/index'
import ReactPdf from './reactPdf'
import Between from './between'


class App extends Component {

  render() {
      const time = new Date().toLocaleString();
    return (
      <div className="App">
          <Between/>
          {/*<ReactPdf/>*/}
          {/*<Filter/>*/}
          {/*<DatePicker/>*/}
          {/*<DropdownExampleSearchSelection/>*/}
          {/*<LineItems/>*/}
          {/*<MyForm/>*/}
          {/*<Boost/>*/}
          {/*<Parent/>*/}
          {/*<SimpleCard/>*/}
          {/*<text>ffff</text>*/}
          {/*<textarea>ffff</textarea>*/}
        {/*<header className="App-header">*/}
          {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
          {/*/!*<p>*!/*/}
            {/*/!*Edit <code>src/App.js</code> and save to reload.*!/*/}
          {/*/!*</p>*!/*/}
          {/*/!*<a*!/*/}
            {/*/!*className="App-link"*!/*/}
            {/*/!*href="https://reactjs.org"*!/*/}
            {/*/!*target="_blank"*!/*/}
            {/*/!*rel="noopener noreferrer"*!/*/}
          {/*/!*>*!/*/}
            {/*/!*Learn React*!/*/}
          {/*/!*</a>*!/*/}
          {/*<Barista coffee={"Ice American"} value={"seven"}/>*/}
          {/*<div>{time}</div>*/}
        {/*</header>*/}
          {/*<SimpleSnackbar/>*/}
          {/*<header></header>*/}
          {/*<Forms></Forms>*/}
          {/*<HelloWord/>*/}
          {/*<Appt board={board}/>*/}
          {/*<Apps/>*/}
          {/*<Example/>*/}
      </div>
    );
  }
}

export default App;
