import './App.css';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import TopBar from './components/TopBar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <TopBar/>
            <Switch> 
            <Route exact path="/" component={EmployeeList}/>
            <Route exact path="/AddEmployee" component={AddEmployee}/>
            <Route exact path="/ViewEmployee" component={ViewEmployee}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
