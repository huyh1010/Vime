import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-background">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found!</h2>
        <Link className="error-home" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
