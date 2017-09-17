import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import ChatPage from './pages/ChatPage/ChatPage';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';

import MentorInfoPage from './pages/MentorInfoPage/MentorInfoPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

/*IndexRoute
Redirect*/

import App from './components/App';
// <IndexRoute component={MainPage} />

export default (
	<Route path="/" component={App}>
		<IndexRedirect from="/" to="registration" />

		<Route path="/profile" component={ProfilePage} />
		<Route path="/search" component={SearchPage} />

		<Route path="/mentor/:id" component={MentorInfoPage} />
		<Route path="/chat" component={ChatPage} />

		<Route path="/registration" component={RegistrationPage} />

	</Route>
);

// <Route path="/login" component={LoginPage} />
