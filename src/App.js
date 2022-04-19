import "./App.css";
import { Navbar } from "./components/index";
import { Home } from "./pages/index";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
