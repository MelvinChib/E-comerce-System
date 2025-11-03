package com.melvin.E_comerce.System.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for product response operations.
 * Used for returning product information to clients.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResponseDTO {

    /** Unique product identifier */
    private Long id;
    
    /** Product name */
    private String name;
    
    /** Product description */
    private String description;
    
    /** Product price */
    private double price;
    
    /** Available stock quantity */
    private Integer stock;
    
    /** Name of the product category */
    private String categoryName;
}
