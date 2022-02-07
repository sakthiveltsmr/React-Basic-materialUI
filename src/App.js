import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./Pages/Notes/Notes";
import Create from "./Pages/Create/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="link">
          <Link to="/create">Create</Link>
        </div>
        <div className="link">
          <Link to="/">home</Link>
        </div>

        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
