package com.melvin.E_comerce.System.Repository;


import com.melvin.E_comerce.System.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for Product entity operations.
 * Extends JpaRepository to provide CRUD operations and custom queries.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    /**
     * Finds all products belonging to a specific category.
     * 
     * @param categoryId the category ID
     * @return List of products in the specified category
     */
    List<Product> findByCategoryId(Long categoryId);
}
