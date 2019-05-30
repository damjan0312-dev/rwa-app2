import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter, Route, Router } from 'react-router-dom';

//my imports
import Animals from './components/Animals';
import AnimalForm from './components/AnimalForm';
import AnimalDetail from './components/AnimalDetails';
import Doctors from './components/doctorComponents/Doctors';
import TheirAnimals from './components/doctorComponents/TheirAnimals';

import Navbars from './components/layouts/Navbar';

import history from './history';


class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Provider store={store}>
					<div>
						
						<Route
							exact
							path="/"
							render={() => (
								<div>
									<Navbars />
									<AnimalForm />
									<Animals />
								</div>
							)}
						/>
						<Route 
							path="/detail" 
							render={() => (
								<div>
									<Navbars />
									<AnimalDetail />
								</div>
							)}
						/>
						<Route 
							path="/doctors" 
							render={() => (
								<div>
									<Navbars />
									<Doctors />
									<TheirAnimals />
								</div>
							)}
						/>

					</div>
				</Provider>
			</Router>
		);
	}
}

export default App;
