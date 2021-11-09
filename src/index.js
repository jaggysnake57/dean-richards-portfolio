// react
import React from 'react';
import ReactDOM from 'react-dom';

// contexts
import { ProjectsContextProvider } from './contexts/ProjectsContext';
import reducer, { initialState } from './contexts/reducer';

// components
import App from './App';

// css
import './styles.css';

ReactDOM.render(
	<React.StrictMode>
		<ProjectsContextProvider initialState={initialState} reducer={reducer}>
			<App />
		</ProjectsContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
