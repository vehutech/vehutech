import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import Footer from "./components/Footer";
import Error404 from "./components/404";
import Works from "./pages/Works";
import ContactUsPage from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/resume" element={<ResumePage />}/>
          <Route path="/contact" element={<ContactUsPage />}/>
          <Route path="/portfolio" element={<Works />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
