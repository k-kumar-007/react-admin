import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import FrontCash from './pages/FrontCash';
import FrontOffice from './pages/FrontOffice';
import Reports from './pages/Reports';
import Restaurant from './pages/Restaurant';
import Setup from './pages/Setup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/frontCash" component={FrontCash} />
          <Route path="/frontOffice" component={FrontOffice} />
          <Route path="/reports" component={Reports} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/setup" component={Setup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
