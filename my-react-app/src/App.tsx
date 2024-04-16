import React, { Suspense } from "react";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const navLinks = [
    {
      path: "/",
      title: "",
    },
  ];

  const routes = [
    {
      path: "",
      element: <Home />,
    },
  ];

  return (
    <>
      <div className="d-block">
        <BrowserRouter>
          <div>
            <header>
              <nav
                style={{ backgroundColor: "blue" }}
                className={`navbar navbar-expand navbar-light `}
              >
                <div className="container">
                  <div className="row w-100">
                    <div className="col">
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink
                          to="/"
                          style={{
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginRight: "185px",
                          }}
                        >
                          The Furniture
                        </NavLink>
                        <ul className="navbar-nav">
                          {navLinks.map((link, index) => {
                            return (
                              <li className="nav-item pr-4 " key={index}>
                                <NavLink
                                  className=" font-weight-bold text-decoration-none "
                                  key={index}
                                  to={link.path}
                                  style={{ color: "#fff" }}
                                >
                                  {link.title}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <main>
              <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                  {/* <Route path="/about" element={<About />} /> */}
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </Suspense>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
