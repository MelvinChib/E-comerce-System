# E-commerce System

A comprehensive e-commerce system built with Spring Boot, featuring product management, user authentication, and order processing capabilities.

## 🚀 Features Implemented

### Product Management
- ✅ Create, Read, Update, Delete (CRUD) operations for products
- ✅ Product categorization system
- ✅ Stock management
- ✅ Price management
- ✅ Product search by category

### Technical Features
- ✅ RESTful API design
- ✅ Input validation with Jakarta Validation
- ✅ Global exception handling
- ✅ DTO pattern for data transfer
- ✅ MapStruct for object mapping
- ✅ Comprehensive JavaDoc documentation
- ✅ Lombok for boilerplate reduction

## 🛠️ Technology Stack

- **Framework**: Spring Boot 3.x
- **Database**: Spring Data JPA (H2 for development)
- **Mapping**: MapStruct
- **Validation**: Jakarta Validation
- **Logging**: SLF4J with Logback
- **Build Tool**: Maven
- **Documentation**: JavaDoc

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- IDE (IntelliJ IDEA, Eclipse, VS Code)

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/yourusername/E-comerce-System.git
cd E-comerce-System
```

### Build the Project
```bash
./mvnw clean compile
```

### Run the Application
```bash
./mvnw spring-boot:run
```

The application will start on `http://localhost:8080`

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/user/{id}` | Get user by ID |

### Product Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/products` | Create a new product |
| GET | `/api/products/{id}` | Get product by ID |
| GET | `/api/products/category/{categoryId}` | Get products by category |
| PUT | `/api/products/{id}` | Update existing product |
| DELETE | `/api/products/{id}` | Delete product |

### Cart Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart/{userId}` | Get user's cart |
| POST | `/api/cart/{userId}/add` | Add item to cart |
| PUT | `/api/cart/{userId}/update/{productId}` | Update cart item quantity |
| DELETE | `/api/cart/{userId}/remove/{productId}` | Remove item from cart |
| DELETE | `/api/cart/{userId}/clear` | Clear entire cart |

### Order Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders/{userId}` | Create order from cart |
| GET | `/api/orders/{orderId}` | Get order by ID |
| GET | `/api/orders/user/{userId}` | Get user's order history |
| PUT | `/api/orders/{orderId}/status` | Update order status |

### Example Requests

#### Create Product
```json
POST /api/products
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "stock": 10,
  "categoryId": 1
}
```

#### Register User
```json
POST /api/auth/register
{
  "userName": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Add to Cart
```json
POST /api/cart/1/add
{
  "productId": 1,
  "quantity": 2
}
```

#### Create Order
```json
POST /api/orders/1
{
  "shippingAddress": "123 Main St, City, State 12345"
}
```

#### Update Product
```json
PUT /api/products/1
{
  "name": "Gaming Laptop",
  "description": "High-performance gaming laptop",
  "price": 1299.99,
  "stock": 5,
  "categoryId": 1
}
```

## 🏗️ Project Structure

```
src/main/java/com/melvin/E_comerce/System/
├── Controller/          # REST Controllers
├── DTO/                # Data Transfer Objects
├── Exception/          # Custom Exceptions & Global Handler
├── Mapper/             # MapStruct Mappers
├── Model/              # JPA Entities
├── Repository/         # Data Access Layer
└── Service/            # Business Logic Layer
```

## 🔄 Development Progress

This repository tracks the incremental development of the e-commerce system. Each commit represents a significant milestone in the project development.

### Current Status: Phase 1 - Product Management ✅
- [x] Product entity and repository
- [x] Product service layer
- [x] Product REST controller
- [x] Input validation
- [x] Exception handling
- [x] Documentation

### Phase 2: User Management ✅
- [x] User registration and authentication
- [x] Role-based access control
- [x] JWT token implementation
- [x] User profile management

### Phase 3: Shopping Cart ✅
- [x] Shopping cart functionality
- [x] Add/remove items from cart
- [x] Update item quantities
- [x] Cart persistence

### Phase 4: Order Management ✅
- [x] Order creation from cart
- [x] Order status tracking
- [x] Order history
- [x] Stock management

### Future Phases: 📋
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product reviews and ratings

## 🤝 Contributing

This is a learning project tracking development progress. Each feature is implemented incrementally and committed to show the evolution of the codebase.

## 📝 License

This project is for educational purposes.

## 👨‍💻 Author

**Melvin Chibanda**
- Learning Spring Boot and modern Java development
- Building a comprehensive e-commerce system step by step

---

*This project is actively developed with regular commits showing the progression from basic setup to a full-featured e-commerce system.*