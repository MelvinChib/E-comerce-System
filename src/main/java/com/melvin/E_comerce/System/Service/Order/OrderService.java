package com.melvin.E_comerce.System.Service.Order;

import com.melvin.E_comerce.System.DTO.CreateOrderDTO;
import com.melvin.E_comerce.System.DTO.OrderDTO;
import com.melvin.E_comerce.System.Model.OrderStatus;

import java.util.List;

public interface OrderService {
    OrderDTO createOrder(Long userId, CreateOrderDTO createOrderDTO);
    OrderDTO getOrderById(Long orderId);
    List<OrderDTO> getUserOrders(Long userId);
    OrderDTO updateOrderStatus(Long orderId, OrderStatus status);
}