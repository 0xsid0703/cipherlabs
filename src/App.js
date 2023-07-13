import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Activity from "./pages/Activity";
import Header from "./layouts/Header";

export default function App() {
  return (
    <section className="bg-body-bgcolor min-h-screen">
      <div className="flex flex-col">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Activity />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);