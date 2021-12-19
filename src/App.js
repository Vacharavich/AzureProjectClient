import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import ReservationPage from './pages/ReservationPage';
import Summary from './pages/Summary'


function App() {
  return (
  <BrowserRouter>
    <div className="grid" >
      <header>
        <div className="M1"> 
          <a href="/"><h1>Hotel Booking</h1></a>
          <nav>
            <Link to="/">Home Page</Link>
            <Link to="/room">Detail</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/summary">Summary Report</Link>
          </nav>
        </div>
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/room" component={RoomPage} exact></Route>
        <Route path="/reservation" component={ReservationPage} exact></Route>
        <Route path="/summary" component={Summary}></Route>
      </main>             
      <footer>
        <div>
          <h5> This is a project for "Parallel and Distribution System".</h5>
        </div>
      </footer>
    </div>
  </BrowserRouter>    
  );
}

export default App;
