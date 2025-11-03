package com.melvin.E_comerce.System.DTO;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Data Transfer Object for product input operations.
 * Used for creating and updating products with validation constraints.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductInputDTO {

    /** Product name - cannot be blank */
    @NotBlank(message = "Product name is required")
    private String name;

    /** Product description - cannot be blank */
    @NotBlank(message = "Product description is required")
    private String description;

    /** Product price - must be positive */
    @NotNull(message = "Product price is required")
    @Positive(message = "Product price must be greater than zero")
    private double price;

    /** Stock quantity - cannot be negative */
    @NotNull(message = "Stock quantity is required")
    @Min(value = 0, message = "Stock can not be negative")
    private Integer stock;

    /** Category ID - must reference an existing category */
    @NotNull(message = "Category ID is required")
    private Long categoryId;
}
