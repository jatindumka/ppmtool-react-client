import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import ProjectItem from "./components/project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

function App() {
  const initialState = {};
  const store = configureStore(initialState);
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
