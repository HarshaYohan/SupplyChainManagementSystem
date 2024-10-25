import "../../../styles/employee/DriverHelp.css";
const Help = () => {
    return (
      <div className="help-container">
        <h1>Help & Support</h1>
        
        <section className="faq">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item">
            <h3>1. How can I create an account?</h3>
            <p>You can create an account by clicking the 'Sign Up' button on the homepage and filling out the necessary details.</p>
          </div>
          <div className="faq-item">
            <h3>2. How do I reset my password?</h3>
            <p>Click on 'Forgot Password' on the login page and follow the instructions to reset your password.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </section>
  
        <section className="contact-info">
          <h2>Contact Support</h2>
          <p>If you need further assistance, please reach out to our support team:</p>
          <ul>
            <li>Email: support@company.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Live Chat: Available on our homepage</li>
          </ul>
        </section>
  
        <section className="user-guide">
          <h2>User Guide</h2>
          <p>
            Download our detailed <a href="/user-guide.pdf" target="_blank" rel="noopener noreferrer">User Guide</a> for more information on how to use the platform.
          </p>
        </section>
      </div>
    );
  };
  
  export default Help;