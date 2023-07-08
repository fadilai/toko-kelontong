import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import allroutes from './allroutes';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={allroutes} />
	</React.StrictMode>
);
