import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-1 text-muted fw-bold">404</h1>
          <h2 className="mb-4">Oops! Page Not Found</h2>
          <p className="mb-4">
            The page you're looking for doesn't exist, was removed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
