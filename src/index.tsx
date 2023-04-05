import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import './styles/index.css';
import { ContextProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
