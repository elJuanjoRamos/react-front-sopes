import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Reportes from "./pages/Reportes/Reportes";
import ReportesAzure from "./pages/ReportesAzure/ReportesAzure";
import Message from "./pages/Message/Message";
import './bootstrap.min.css'
import './index.css'

function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sql">
            <Reportes />
          </Route>
          <Route path="/azure">
            <ReportesAzure />
          </Route>
          <Route path="/pubsub">
            <vistareportes />
          </Route>
          <Route path="/mensajes">
            <Message/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;
