import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddServicer from './Components/AddService/AddServicer';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import MyOrders from './Components/Myorders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import PackageDetails from './Components/PackageDetails/PackageDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/packages/:packageId'>
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/allOrders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddServicer></AddServicer>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
