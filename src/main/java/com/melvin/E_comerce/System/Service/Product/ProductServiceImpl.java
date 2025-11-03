package com.melvin.E_comerce.System.Service.Product;

import com.melvin.E_comerce.System.DTO.ProductInputDTO;
import com.melvin.E_comerce.System.DTO.ProductResponseDTO;

import java.util.List;

/**
 * Service interface defining product management operations.
 * Provides contract for product CRUD operations.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
public interface ProductServiceImpl {

    /**
     * Creates a new product.
     * @param dto product input data
     * @return created product details
     */
    ProductResponseDTO addProduct(ProductInputDTO dto);
    
    /**
     * Updates an existing product.
     * @param id product ID
     * @param dto updated product data
     * @return updated product details
     */
    ProductResponseDTO updateProduct(Long id, ProductInputDTO dto);
    
    /**
     * Retrieves a product by ID.
     * @param id product ID
     * @return product details
     */
    ProductResponseDTO getProductById(Long id);
    
    /**
     * Retrieves all products.
     * @return list of all products
     */
    List<ProductResponseDTO> getAllProducts();
    
    /**
     * Retrieves products by category.
     * @param categoryId category ID
     * @return list of products in category
     */
    List<ProductResponseDTO> getProductsByCategory(Long categoryId);
    
    /**
     * Deletes a product.
     * @param id product ID to delete
     */
    void deleteProduct(Long id);
}
