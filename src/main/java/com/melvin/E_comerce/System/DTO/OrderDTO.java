package com.melvin.E_comerce.System.DTO;

import com.melvin.E_comerce.System.Model.OrderStatus;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {
    private Long id;
    private Long userId;
    private List<OrderItemDTO> items;
    private Double totalAmount;
    private OrderStatus status;
    private LocalDateTime orderDate;
    private String shippingAddress;
}