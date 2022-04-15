import React, { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import { AuthContext } from "./components/services/context";


function App() {
  const [user, setUser] = useState(null);

  const authContext = useMemo(
    () => ({
      signIn: () => (
        setUser("user")
      ),
      signOut: () => (
        setUser(null)
      ),
    }), []
  );

  const checkauth = (children) => {
    if (user !== null) {
      return children
    } else {
      return <Navigate replace to="/" />
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={checkauth(<Home />)} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
