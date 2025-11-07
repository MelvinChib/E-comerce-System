package com.melvin.E_comerce.System.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateOrderDTO {
    @NotBlank(message = "Shipping address is required")
    private String shippingAddress;
}