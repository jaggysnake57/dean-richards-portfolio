import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Helmet from 'react-helmet';
//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
//css
import './css/App.css';
import TabBar from './Components/TabBar';
import NotFound from './Pages/NotFound';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	const [projectName, setProjectName] = useState('');

	const openTag = (tagName) => {
		return (
			<>
				<span className="tag-fragment">{'<'}</span>
				<span className="bool">{tagName}</span>
				<span className="tag-fragment">{'>'}</span>
			</>
		);
	};
	const closeTag = (tagName) => {
		return (
			<>
				<span className="tag-fragment">{'<'}</span>
				<span className="bool">{tagName}</span>
				<span className="tag-fragment">{'/>'}</span>
			</>
		);
	};

	return (
		<Router>
			<div className="App">
				<Navbar currentPage={currentPage} />

				{/* navbar side */}

				<div className="siteBackground">
					<p>Dean Richards</p>
				</div>
				<Helmet>
					<title>
						Dean Richards |{' '}
						{currentPage.charAt(0).toUpperCase() +
							currentPage.slice(1)}
					</title>
				</Helmet>
				<Switch>
					{/* home */}
					<Route
						exact
						path="/"
						render={(props) => (
							<Home {...props} setCurrentPage={setCurrentPage} />
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
								currentPage={currentPage}
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
								currentPage={currentPage}
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
								openTag={openTag}
								closeTag={closeTag}
							/>
						)}
					/>
					<Route component={NotFound} />
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
