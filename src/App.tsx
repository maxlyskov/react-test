import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Stories from "./components/Stories/Stories";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-full flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/stories" element={<Stories />} />
          <Route
            path="/*"
            element={<p className="p-10 text-2xl">Content...</p>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
