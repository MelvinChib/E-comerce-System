package com.melvin.E_comerce.System.Configuration;

import com.melvin.E_comerce.System.Model.Category;
import com.melvin.E_comerce.System.Model.Product;
import com.melvin.E_comerce.System.Model.Role;
import com.melvin.E_comerce.System.Model.User;
import com.melvin.E_comerce.System.Repository.CategoryRepository;
import com.melvin.E_comerce.System.Repository.ProductRepository;
import com.melvin.E_comerce.System.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (categoryRepository.count() == 0) {
            initializeData();
        }
    }

    private void initializeData() {
        // Create categories
        Category electronics = Category.builder()
                .name("Electronics")
                .build();
        
        Category clothing = Category.builder()
                .name("Clothing")
                .build();

        categoryRepository.save(electronics);
        categoryRepository.save(clothing);

        // Create products
        Product laptop = Product.builder()
                .name("Gaming Laptop")
                .description("High-performance gaming laptop")
                .price(1299.99)
                .stock(10)
                .category(electronics)
                .build();

        Product smartphone = Product.builder()
                .name("Smartphone")
                .description("Latest model smartphone")
                .price(699.99)
                .stock(25)
                .category(electronics)
                .build();

        Product tshirt = Product.builder()
                .name("Cotton T-Shirt")
                .description("Comfortable cotton t-shirt")
                .price(29.99)
                .stock(50)
                .category(clothing)
                .build();

        productRepository.save(laptop);
        productRepository.save(smartphone);
        productRepository.save(tshirt);

        // Create admin user
        User admin = User.builder()
                .username("admin")
                .email("admin@example.com")
                .password(passwordEncoder.encode("admin123"))
                .role(Role.ADMIN)
                .build();

        // Create regular user
        User user = User.builder()
                .username("user")
                .email("user@example.com")
                .password(passwordEncoder.encode("user123"))
                .role(Role.USER)
                .build();

        userRepository.save(admin);
        userRepository.save(user);
    }
}