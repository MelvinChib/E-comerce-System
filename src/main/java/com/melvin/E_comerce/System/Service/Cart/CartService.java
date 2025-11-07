package com.melvin.E_comerce.System.Service.Cart;

import com.melvin.E_comerce.System.DTO.AddToCartDTO;
import com.melvin.E_comerce.System.DTO.CartDTO;

public interface CartService {
    CartDTO getCartByUserId(Long userId);
    CartDTO addToCart(Long userId, AddToCartDTO addToCartDTO);
    CartDTO updateCartItem(Long userId, Long productId, Integer quantity);
    void removeFromCart(Long userId, Long productId);
    void clearCart(Long userId);
}