import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import PDF from "../src/components/PDF";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/register" element={<Register />} />
				{/* <Route path="/pdf" element={<PDF />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
