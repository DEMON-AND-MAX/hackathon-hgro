//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meet from "./pages/Meet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet/:id" element={<Meet />} />
      </Routes>
    </BrowserRouter>
  );
}

// const rootElement = document.getElementById("root");
//
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement as HTMLElement);
//   root.render(<App />);
// }
