import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/Admin/AddService/AddService';
import { createContext } from 'react';
import { useState } from 'react';
import Book from './Components/Book/Book/Book';
import Review from './Components/Book/Review/Review';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route  path='/review'>
         <Review></Review>
        </Route>
        <PrivateRoute  path='/service/:id'>
        <Book></Book>
        </PrivateRoute>
        <PrivateRoute  path='/addService'>
        <AddService></AddService>
        </PrivateRoute>
      </Switch>

    </Router>
   </UserContext.Provider>
  );
}

export default App;
