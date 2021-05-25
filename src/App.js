import { useEffect, useState } from 'react';
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
import Signin from './Pages/Signin';
import { auth, db } from './firebase';
import { useStateValue } from './contexts/ProjectsContext';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	const [projectName, setProjectName] = useState('');

	const [{ userId }, dispatch] = useStateValue();

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

	useEffect(() => {
		const isAdmin = async (uid) => {
			try {
				const data = await db
					.collection('authenticatedUsers')
					.where('uid', '==', uid)
					.get();
				if (data.empty) {
					console.log('nothing found');
				} else {
					data.docs.map((user) => {
						if (user.admin) return true;
					});
				}
			} catch (error) {
				console.error(
					'there has been an error in the isAdmin funtion',
					error
				);
			}
		};

		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'ADD_USER',
					uid: authUser.uid,
				});
				if (isAdmin(authUser.uid)) {
					dispatch({
						type: 'SET_ADMIN',
					});
				}
			} else {
				dispatch({
					type: 'LOG_USER_OUT',
				});

				console.log('user logged out');
			}
		});
	}, [userId]);

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
					<Route
						exact
						path="/signin"
						render={(props) => <Signin {...props} />}
					/>
					<Route component={NotFound} />
				</Switch>

				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
