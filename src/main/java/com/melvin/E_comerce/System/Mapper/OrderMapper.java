package com.melvin.E_comerce.System.Mapper;

import com.melvin.E_comerce.System.DTO.OrderDTO;
import com.melvin.E_comerce.System.DTO.OrderItemDTO;
import com.melvin.E_comerce.System.Model.Order;
import com.melvin.E_comerce.System.Model.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(target = "userId", source = "user.id")
    OrderDTO toDTO(Order order);

    @Mapping(target = "productId", source = "product.id")
    @Mapping(target = "productName", source = "product.name")
    @Mapping(target = "subtotal", expression = "java(orderItem.getSubtotal())")
    OrderItemDTO toDTO(OrderItem orderItem);
}