import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Coding from "./Coding";
import Art from "./Art";
import Other from "./Other";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
              <h1 className="text-5xl font-bold mb-4">Laksh Pandya</h1>
              <p className="text-lg text-gray-700 mb-8">
                I code, draw a bit, stuff.
              </p>
              <div className="flex gap-6">
                <Link
                  to="/coding"
                  className="px-6 py-3 bg-gray-800 text-green-700 rounded-xl shadow-lg hover:bg-black transition"
                >
                  Coding
                </Link>
                <Link
                  to="/art"
                  className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
                >
                  Art
                </Link>
                <Link
                  to="/other"
                  className="px-6 py-3 bg-purple-900 text-white rounded-xl shadow-lg hover:bg-purple-600 transition"
                >
                  Other
                </Link>
              </div>
            </div>
          }
        />
        {/* Subpages */}
        <Route path="/coding" element={<Coding />} />
        <Route path="/art" element={<Art />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
