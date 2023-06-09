import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
        
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
          <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Management</h1>
            {/* grid columns */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Chart */}
        
            {/* Form */} 
          </div>
        </div>

        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        
        </p>
        
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/">
                Categories
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
           
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
