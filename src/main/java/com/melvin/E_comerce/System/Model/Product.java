package com.melvin.E_comerce.System.Model;


import jakarta.persistence.*;
import lombok.*;

/**
 * Product entity representing products in the e-commerce system.
 * Maps to the "Products" table in the database.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Entity
@Table(name = "Products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {


    /** Unique product identifier */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Product name */
    private String name;
    
    /** Product description */
    private String description;
    
    /** Product price */
    private double price;
    
    /** Available stock quantity */
    private Integer stock;

    /** Product category - many products belong to one category */
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
