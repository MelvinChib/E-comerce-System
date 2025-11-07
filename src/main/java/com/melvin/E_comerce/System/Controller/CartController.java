package com.melvin.E_comerce.System.Controller;

import com.melvin.E_comerce.System.DTO.AddToCartDTO;
import com.melvin.E_comerce.System.DTO.CartDTO;
import com.melvin.E_comerce.System.Service.Cart.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<CartDTO> getCart(@PathVariable Long userId) {
        CartDTO cart = cartService.getCartByUserId(userId);
        return ResponseEntity.ok(cart);
    }

    @PostMapping("/{userId}/add")
    public ResponseEntity<CartDTO> addToCart(@PathVariable Long userId, 
                                           @Valid @RequestBody AddToCartDTO addToCartDTO) {
        CartDTO cart = cartService.addToCart(userId, addToCartDTO);
        return ResponseEntity.ok(cart);
    }

    @PutMapping("/{userId}/update/{productId}")
    public ResponseEntity<CartDTO> updateCartItem(@PathVariable Long userId,
                                                @PathVariable Long productId,
                                                @RequestParam Integer quantity) {
        CartDTO cart = cartService.updateCartItem(userId, productId, quantity);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping("/{userId}/remove/{productId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long userId,
                                             @PathVariable Long productId) {
        cartService.removeFromCart(userId, productId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{userId}/clear")
    public ResponseEntity<Void> clearCart(@PathVariable Long userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok().build();
    }
}