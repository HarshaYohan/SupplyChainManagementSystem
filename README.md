Project Structure

scms/
│
├── app/
│   ├── Customer/
│   │   ├── cart/
│   │   │   └── page.jsx               # Cart page for customer
│   │   ├── components/
│   │   ├── customerLogin/
│   │   │   └── page.jsx               # Login page for customer
│   │   ├── product/
│   │   │   └── page.jsx               # Product listing page for customer
│   │   ├── profile/
│   │   │   └── page.jsx               # Profile page for customer
│   │   ├── signup/
│   │   │   └── page.jsx               # Signup page for new customer users
│   │
│   ├── Employee/
│   │   ├── CompanyManager/
│   │   │   ├── home/
│   │   │   │   └── page.jsx           # Home page for company manager
│   │   │   ├── Reports/
│   │   │   │   └── page.jsx           # Reports page for company manager
│   │   │   ├── TransportProduct/
│   │   │   │   └── page.jsx           # Transport product page for company manager
│   │   │
│   │   ├── Driver/
│   │   │   ├── DriverHomePage/
│   │   │   │   └── page.jsx          
│   │   │   ├── DriverProfile/
│   │   │   │   └── page.jsx           
│   │   │   ├── DriverHelp/
│   │   │   │   └── page.jsx           
│   │   ├── EmployeeLogin/
│   │   │   └── page.jsx               # Employee login page
│   │   ├── StoreManager/
│   │       └── page.jsx               # Store manager page
│
├── backend/
│   └── db.js                          # Database connection and queries
│
├── pages/api/
│   ├── Customer/
│   │   ├── addToCart.js               # API route for adding to cart
│   │   ├── fetch_User_Data.js         # API route for fetching customer data
│   │   ├── fetchFromCart.js           # API route for fetching cart items
│   │   ├── fetchRoots.js              # API route for fetching available routes
│   │   ├── login.js                   # API route for customer login
│   │   ├── placeOrder.js              # API route for placing orders
│   │   ├── product.js                 # API route for product operations
│   │   ├── signup.js                  # API route for customer registration
│   │   ├── updateCart.js              # API route for updating cart
│   │   ├── updateProfile.js           # API route for updating customer profile
│   │
│   ├── Employee/
│   │   ├── employeeLogin.js           # API route for employee login
│   │   ├── employees.js               # API route for employee-related operations
│   │   ├── fetchOrders.js             # API route for fetching orders
│   │   ├── quarterly_sales.js         # API route for quarterly sales
│   │   └── stores.js                  # API route for store management
│
├── public/                            # Static files served by Next.js
│
├── styles/
│   ├── customer/
│   │   ├── cart.css                   # Styles for customer cart page
│   │   ├── product.css                # Styles for customer product page
│   │   ├── profile.css                # Styles for customer profile page
│   │   ├── signup_login.css           # Shared styles for customer signup and login pages
│   │
│   ├── employee/
│   │   ├── home.css                   # Styles for employee home page
│   │   ├── reports.css                # Styles for employee reports page
│   │   └── transport_product.css      # Styles for employee transport product page
│
├── utils/
│   └── cors.js                        # CORS configuration utility
│
├── global.css                         # Global styles
├── layout.jsx                         # Layout component for consistent structure across pages
└── page.jsx                           # Main or home page
