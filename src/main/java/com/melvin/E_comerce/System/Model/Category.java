package com.melvin.E_comerce.System.Model;


import jakarta.persistence.*;
import lombok.*;

/**
 * Category entity representing product categories in the e-commerce system.
 * Maps to the "category" table in the database.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Entity
@Table(name = "category")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {

    /** Unique category identifier */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Category name */
    private String name;
}
