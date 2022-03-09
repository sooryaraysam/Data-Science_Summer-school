import React from  'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' exact component={Home} />
          
        </Routes>
      </Router>

      <h1 className='text-center my-5'> Courses </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>

            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">Design Thinking</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">Introduction to Python</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">Machine Learning</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">Advanced Python</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">TABLEAU for Visualisation</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div class="card text-center" >
              <img src="https://anthonyhuntley.com/wp-content/uploads/2017/11/Data-Science-Overview-Cover.jpg" class="card-img-top" alt="oops!" />
              <div class="card-body">
                <h5 class="card-title">Big Data Analysis</h5>
                <p class="card-text"></p>
                <a href="#" class=" btn btn-primary ">Info</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
