package com.melvin.E_comerce.System.Mapper;

import com.melvin.E_comerce.System.DTO.CartDTO;
import com.melvin.E_comerce.System.DTO.CartItemDTO;
import com.melvin.E_comerce.System.Model.Cart;
import com.melvin.E_comerce.System.Model.CartItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CartMapper {

    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "totalPrice", expression = "java(cart.getTotalPrice())")
    CartDTO toDTO(Cart cart);

    @Mapping(target = "productId", source = "product.id")
    @Mapping(target = "productName", source = "product.name")
    @Mapping(target = "productPrice", source = "product.price")
    @Mapping(target = "subtotal", expression = "java(cartItem.getSubtotal())")
    CartItemDTO toDTO(CartItem cartItem);
}