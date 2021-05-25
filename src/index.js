import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProjectsContextProvider } from './contexts/ProjectsContext';
import reducer, { initialState } from './contexts/reducer';

ReactDOM.render(
	<React.StrictMode>
		<ProjectsContextProvider initialState={initialState} reducer={reducer}>
			<App />
		</ProjectsContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
