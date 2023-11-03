import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState, createContext } from "react";
import Side from "./components/Dashboard/Sidebar";
import TopContainer from "./components/Dashboard/Top";
// import MainRightBottomCard from "./components/Dashboard/Right";
// import MainContainer from "./components/Dashboard/Main";
export const store = createContext();
function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Hero />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Auth"
            element={
              <>
                <Nav />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/Profile"
            element={
              <>
                {/* <Nav /> */}
                <Profile />
              </>
            }
          />
          <Route
            path="/Sidebar"
            element={
              <>
                <TopContainer />
                <Side />
                {/* <MainContainer /> */}
              </>
            }
          />
        </Routes>
      </store.Provider>
    </div>
  );
}

export default App;
