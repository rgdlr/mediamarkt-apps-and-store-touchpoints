import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './contexts';
import { App } from './pages/app';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
