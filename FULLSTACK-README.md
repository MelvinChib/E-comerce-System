# Full-Stack E-Commerce System

A complete e-commerce application with React frontend and Spring Boot backend.

## 🚀 Quick Start

### Prerequisites
- Java 17+
- Node.js 16+
- Maven 3.6+

### 1. Start Backend (Terminal 1)
```bash
./start-backend.sh
# OR manually:
export JAVA_HOME=$(/usr/libexec/java_home)
mvn spring-boot:run
```
Backend runs on: http://localhost:8080

### 2. Start Frontend (Terminal 2)
```bash
./start-frontend.sh
# OR manually:
cd frontend
npm install
npm start
```
Frontend runs on: http://localhost:3000

## 🎯 Demo Accounts

**Admin User:**
- Email: admin@example.com
- Password: admin123

**Regular User:**
- Email: user@example.com  
- Password: user123

## 📱 Features

### Frontend (React)
✅ **User Authentication**
- Login/Register forms
- JWT token management
- Session persistence

✅ **Product Catalog**
- Product grid display
- Add to cart functionality
- Stock validation

✅ **Shopping Cart**
- View cart items
- Update quantities
- Remove items
- Calculate totals

✅ **Order Management**
- Place orders
- Order history
- Order status tracking

### Backend (Spring Boot)
✅ **REST API**
- Authentication endpoints
- Product management
- Cart operations
- Order processing

✅ **Security**
- JWT authentication
- CORS configuration
- Password encryption

✅ **Database**
- H2 in-memory database
- Sample data initialization
- JPA entities and repositories

## 🛠️ Architecture

```
E-comerce-System/
├── src/main/java/           # Spring Boot Backend
│   ├── Controller/          # REST Controllers
│   ├── Service/            # Business Logic
│   ├── Repository/         # Data Access
│   ├── Model/              # JPA Entities
│   ├── DTO/                # Data Transfer Objects
│   ├── Security/           # Security Configuration
│   └── Configuration/      # App Configuration
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # React Components
│   │   ├── services/       # API Services
│   │   └── App.js          # Main App Component
│   └── public/             # Static Assets
└── README.md               # Documentation
```

## 🔧 API Endpoints

### Authentication
- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/auth/user/{id}` - Get user info

### Products
- GET `/api/products` - Get all products
- GET `/api/products/{id}` - Get product by ID

### Cart
- GET `/api/cart/{userId}` - Get user cart
- POST `/api/cart/{userId}/add` - Add to cart
- PUT `/api/cart/{userId}/update/{productId}` - Update quantity
- DELETE `/api/cart/{userId}/remove/{productId}` - Remove item

### Orders
- POST `/api/orders/{userId}` - Create order
- GET `/api/orders/{orderId}` - Get order
- GET `/api/orders/user/{userId}` - Get user orders

## 🎨 Frontend Components

- **Auth.js** - Login/Register forms
- **Products.js** - Product catalog
- **Cart.js** - Shopping cart management
- **Orders.js** - Order history
- **App.js** - Main application with navigation

## 🔒 Security Features

- JWT token authentication
- Password encryption with BCrypt
- CORS configuration for frontend
- Role-based access control
- Input validation

## 📊 Database Schema

- **Users** - User accounts and authentication
- **Categories** - Product categories
- **Products** - Product catalog
- **Carts** - User shopping carts
- **Cart_Items** - Items in carts
- **Orders** - Order records
- **Order_Items** - Items in orders

## 🚀 Deployment

### Development
1. Start backend: `./start-backend.sh`
2. Start frontend: `./start-frontend.sh`
3. Access: http://localhost:3000

### Production Build
```bash
cd frontend
npm run build
# Serve build files with Spring Boot static resources
```

## 🧪 Testing

### Manual Testing
1. Register new user
2. Browse products
3. Add items to cart
4. Place order
5. View order history

### API Testing
Use the provided curl examples in `test-api.md`

## 🔄 Development Workflow

1. Backend changes: Restart Spring Boot
2. Frontend changes: Hot reload automatically
3. Database: H2 console at http://localhost:8080/h2-console

## 📈 Future Enhancements

- Payment integration
- Product search and filters
- User reviews and ratings
- Admin dashboard
- Email notifications
- Product images
- Inventory management

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

---

**Full-stack e-commerce system ready for development and deployment!**