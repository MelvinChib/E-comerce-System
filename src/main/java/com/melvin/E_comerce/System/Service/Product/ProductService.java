package com.melvin.E_comerce.System.Service.Product;

import com.melvin.E_comerce.System.DTO.ProductInputDTO;
import com.melvin.E_comerce.System.DTO.ProductResponseDTO;

import com.melvin.E_comerce.System.Exception.ResourceNotFoundException;
import com.melvin.E_comerce.System.Mapper.ProductMapper;
import com.melvin.E_comerce.System.Model.Category;
import com.melvin.E_comerce.System.Model.Product;
import com.melvin.E_comerce.System.Repository.CategoryRepository;
import com.melvin.E_comerce.System.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


/**
 * Service implementation for product-related operations.
 * Handles business logic for product management including CRUD operations.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class ProductService implements ProductServiceImpl {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductMapper productMapper;


    /**
     * Creates a new product in the system.
     * 
     * @param dto the product input data
     * @return ProductResponseDTO containing the created product details
     * @throws IllegalArgumentException if the category is not found
     */
    @Override
    public ProductResponseDTO addProduct(ProductInputDTO dto) {
        log.info("Adding a new product: {}", dto.getName());

        // 1 Validate category existence
        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        Product product = productMapper.toEntity(dto);
        product.setCategory(category);

        Product savedProduct = productRepository.save(product);

        return productMapper.toDTO(savedProduct);
    }



    /**
     * Updates an existing product.
     * 
     * @param id the product ID to update
     * @param dto the updated product data
     * @return ProductResponseDTO containing the updated product details
     * @throws IllegalArgumentException if product or category is not found
     */
    @Override
    public ProductResponseDTO updateProduct(Long id, ProductInputDTO dto) {
        log.info("Updating product with id: {}", id);

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        existingProduct.setName(dto.getName());
        existingProduct.setDescription(dto.getDescription());
        existingProduct.setPrice(dto.getPrice());
        existingProduct.setStock(dto.getStock());
        existingProduct.setCategory(category);

        Product updatedProduct = productRepository.save(existingProduct);
        return productMapper.toDTO(updatedProduct);
    }

    /**
     * Retrieves a product by its ID.
     * 
     * @param id the product ID
     * @return ProductResponseDTO containing the product details
     * @throws IllegalArgumentException if product is not found
     */
    @Override
    @Transactional
    public ProductResponseDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        return productMapper.toDTO(product);
    }

    /**
     * Retrieves all products in the system.
     * 
     * @return List of ProductResponseDTO containing all products
     */
    @Override
    @Transactional
    public List<ProductResponseDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Retrieves all products belonging to a specific category.
     * 
     * @param categoryId the category ID
     * @return List of ProductResponseDTO containing products in the category
     * @throws IllegalArgumentException if category is not found
     */
    @Override
    @Transactional
    public List<ProductResponseDTO> getProductsByCategory(Long categoryId) {
        if (!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Category not found");
        }
        return productRepository.findByCategoryId(categoryId)
                .stream()
                .map(productMapper::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Deletes a product from the system.
     * 
     * @param id the product ID to delete
     * @throws IllegalArgumentException if product is not found
     */
    @Override
    public void deleteProduct(Long id) {
        log.info("Deleting product with id: {}", id);

        if (!productRepository.existsById(id)) {
            throw new ResourceNotFoundException("Product not found");
        }

        productRepository.deleteById(id);
    }
}
