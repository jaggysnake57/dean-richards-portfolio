import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './contexts/ProjectsContext';

//3rd party modules
import Helmet from 'react-helmet';

//firebase
import { auth, db } from './firebase';

//components
import Navbar from './Components/Navbar/Navbar';

//pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Signin from './Pages/SignIn/Signin';

function App() {
	// context
	const [{ userId }, dispatch] = useStateValue();

	//state
	const [currentPage, setCurrentPage] = useState('home');

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
			<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<div className="siteBackground">
				<p>Dean Richards</p>
			</div>
			<Helmet>
				<title>
					Dean Richards |{' '}
					{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
				</title>
			</Helmet>
			<Home setCurrentPage={setCurrentPage} />
			<About setCurrentPage={setCurrentPage} currentPage={currentPage} />
			<Projects
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<Contact
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</Router>
	);
}

export default App;
