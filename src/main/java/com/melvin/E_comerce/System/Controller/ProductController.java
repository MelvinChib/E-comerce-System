package com.melvin.E_comerce.System.Controller;


import com.melvin.E_comerce.System.DTO.ProductInputDTO;
import com.melvin.E_comerce.System.DTO.ProductResponseDTO;
import com.melvin.E_comerce.System.Service.Product.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for product management operations.
 * Provides endpoints for CRUD operations on products.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Slf4j
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    /**
     * Creates a new product.
     * 
     * @param dto the product input data with validation
     * @return ResponseEntity with created product details and CREATED status
     */
    @PostMapping
    public ResponseEntity<ProductResponseDTO> addProduct(@Valid @RequestBody ProductInputDTO dto) {

        log.info("API call: Add new product");
        ProductResponseDTO response =  productService.addProduct(dto);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    /**
     * Retrieves a product by its ID.
     * 
     * @param id the product ID
     * @return ResponseEntity with product details and OK status
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long id) {
        log.info("API call: Get product by ID {}", id);
        ProductResponseDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }


    /**
     * Retrieves all products in a specific category.
     * 
     * @param categoryId the category ID
     * @return ResponseEntity with list of products and OK status
     */
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductResponseDTO>> getProductsByCategory(@PathVariable Long categoryId) {
        log.info("API call: Get products by category {}", categoryId);
        List<ProductResponseDTO> products = productService.getProductsByCategory(categoryId);
        return ResponseEntity.ok(products);
    }

    /**
     * Updates an existing product.
     * 
     * @param id the product ID to update
     * @param dto the updated product data with validation
     * @return ResponseEntity with updated product details and OK status
     */
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable Long id,
                                                            @Valid @RequestBody ProductInputDTO dto) {
        log.info("API call: Update product with ID {}", id);
        ProductResponseDTO updatedProduct = productService.updateProduct(id, dto);
        return ResponseEntity.ok(updatedProduct);
    }

    /**
     * Deletes a product by its ID.
     * 
     * @param id the product ID to delete
     * @return ResponseEntity with NO_CONTENT status
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        log.info("API call: Delete product with ID {}", id);
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}


