"use client";
import Link from 'next/link';
import '../styles/notFound.css'; // Import the CSS for the page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>We're sorry, the page you requested could not be found.</p>
        <Link href="/" className="home-link">
          <FontAwesomeIcon icon={faHome} className="home-icon" />
          <span className="hover-arrow">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
