import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { useState } from 'react';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	return (
		<Router>
			<div className="App">
				<Navbar currentPage={currentPage} />
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
			</div>
		</Router>
	);
}

export default App;
