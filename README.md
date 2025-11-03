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

### Product Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/products` | Create a new product |
| GET | `/api/products/{id}` | Get product by ID |
| GET | `/api/products/category/{categoryId}` | Get products by category |
| PUT | `/api/products/{id}` | Update existing product |
| DELETE | `/api/products/{id}` | Delete product |

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

### Next Phase: User Management 🚧
- [ ] User registration and authentication
- [ ] Role-based access control
- [ ] JWT token implementation
- [ ] User profile management

### Future Phases: 📋
- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin dashboard

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