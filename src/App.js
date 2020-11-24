import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
//css
import './css/App.css';
import TabBar from './Components/TabBar';

function App() {
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<Router>
			<div className="App">
				<Navbar currentPage={currentPage} />
				<TabBar currentPage={currentPage} />
				{/* navbar side */}
				<div className="content">
					<Switch>
						{/* home */}
						<Route
							exact
							path="/"
							render={(props) => (
								<Home
									{...props}
									setCurrentPage={setCurrentPage}
								/>
							)}
						/>
						{/* about */}
						<Route
							exact
							path="/about"
							render={(props) => (
								<About
									{...props}
									setCurrentPage={setCurrentPage}
								/>
							)}
						/>
						{/* projects */}
						<Route
							exact
							path="/projects"
							render={(props) => (
								<Projects
									{...props}
									setCurrentPage={setCurrentPage}
								/>
							)}
						/>
						{/* contact */}
						<Route
							exact
							path="/contact"
							render={(props) => (
								<Contact
									{...props}
									setCurrentPage={setCurrentPage}
								/>
							)}
						/>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
