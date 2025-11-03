package com.melvin.E_comerce.System.Repository;

import com.melvin.E_comerce.System.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Category entity operations.
 * Extends JpaRepository to provide CRUD operations for categories.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
