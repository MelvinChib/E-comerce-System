# E-commerce System API Testing Guide

## Quick Start

1. **Start the application:**
   ```bash
   mvn spring-boot:run
   ```

2. **Access H2 Console (for database inspection):**
   - URL: http://localhost:8080/h2-console
   - JDBC URL: jdbc:h2:mem:ecommerce
   - Username: sa
   - Password: (leave empty)

## Sample API Calls

### 1. Register a new user
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 2. Login user
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 3. Get products
```bash
curl -X GET http://localhost:8080/api/products
```

### 4. Add item to cart (use user ID from registration response)
```bash
curl -X POST http://localhost:8080/api/cart/1/add \
  -H "Content-Type: application/json" \
  -d '{
    "productId": 1,
    "quantity": 2
  }'
```

### 5. View cart
```bash
curl -X GET http://localhost:8080/api/cart/1
```

### 6. Create order
```bash
curl -X POST http://localhost:8080/api/orders/1 \
  -H "Content-Type: application/json" \
  -d '{
    "shippingAddress": "123 Main St, City, State 12345"
  }'
```

### 7. View user orders
```bash
curl -X GET http://localhost:8080/api/orders/user/1
```

## Pre-loaded Data

The application comes with sample data:
- **Categories:** Electronics, Clothing
- **Products:** Gaming Laptop ($1299.99), Smartphone ($699.99), Cotton T-Shirt ($29.99)
- **Users:** admin@example.com (admin123), user@example.com (user123)

## Features Implemented

✅ **User Management**
- User registration and login
- JWT token authentication
- Role-based access (USER, ADMIN)

✅ **Product Management**
- CRUD operations for products
- Category-based organization
- Stock management

✅ **Shopping Cart**
- Add/remove items
- Update quantities
- Persistent cart per user

✅ **Order Management**
- Create orders from cart
- Order status tracking
- Order history
- Automatic stock updates

## Architecture

- **Spring Boot 3.x** - Main framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database for development
- **JWT** - Token-based authentication
- **MapStruct** - Object mapping
- **Lombok** - Boilerplate reduction
- **Jakarta Validation** - Input validation