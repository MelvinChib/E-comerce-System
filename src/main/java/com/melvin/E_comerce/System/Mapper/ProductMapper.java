package com.melvin.E_comerce.System.Mapper;


import com.melvin.E_comerce.System.DTO.ProductInputDTO;
import com.melvin.E_comerce.System.DTO.ProductResponseDTO;
import com.melvin.E_comerce.System.Model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * MapStruct mapper for Product entity and DTOs.
 * Handles conversion between Product entity and its DTOs.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@Mapper(componentModel = "spring")
public interface ProductMapper {


    /**
     * Converts Product entity to ProductResponseDTO.
     * Maps category name from the associated Category entity.
     * 
     * @param product the Product entity
     * @return ProductResponseDTO with mapped data
     */
    @Mapping(source = "category.name", target = "categoryName")
    ProductResponseDTO toDTO(Product product);

    /**
     * Converts ProductInputDTO to Product entity.
     * Category is ignored and set separately in the service layer.
     * 
     * @param dto the ProductInputDTO
     * @return Product entity with mapped data
     */
    @Mapping(target = "category", ignore = true) // Set category in service
    Product toEntity(ProductInputDTO dto);
}
