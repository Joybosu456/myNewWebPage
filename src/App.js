import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/HomePage';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import WorkPage from './Pages/WorkPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
      <Header />

        <Routes>

          <Route
            exact
            path="/"
            element={<Homepage />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/workpage"
            element={<WorkPage />}
          />

          <Route
            path="/contactpage"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<Homepage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
