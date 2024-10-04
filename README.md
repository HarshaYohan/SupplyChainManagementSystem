## Project Structure

```bash
scms/
│
├── app/
│   ├── components/
│   │   ├── itemsCard.jsx          # Component for displaying product/item cards
│   │   └── navbar.jsx             # Navigation bar component
│   ├── login/
│   │   └── page.tsx               # Login page
│   ├── product/
│   │   └── page.tsx               # Product listing page
│   ├── profile/
│   │   └── page.jsx               # Profile page for users
│   ├── signup/
│   │   └── page.jsx               # Signup page for new users
│   ├── global.css                 # Global styles
│   ├── layout.jsx                 # Layout component for consistent structure across pages
│   └── page.jsx                   # Main or home page
│
├── backend/
│   └── db.js                      # Database connection and queries
│
├── node_modules/                  # Node.js dependencies
│
├── pages/api/
│   ├── login.js                   # API route for user login
│   ├── product.js                 # API route for product-related operations
│   ├── profile.js                 # API route for profile management
│   ├── signup.js                  # API route for user registration
│   └── updateProfile.js           # API route for updating user profile
│
├── public/                        # Static files served by Next.js
│
├── styles/
│   ├── cart.css                   # Styles for the cart page
│   ├── itemsCard.css              # Styles for product/item cards
│   ├── navbar.css                 # Styles for the navigation bar
│   ├── product.css                # Styles for the product page
│   ├── profile.css                # Styles for the profile page
│   └── signup_login.css           # Shared styles for signup and login pages
│
├── utils/
│   └── cors.js                    # CORS configuration utility
