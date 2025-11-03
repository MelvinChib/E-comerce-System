package com.melvin.E_comerce.System.Exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Custom exception for handling resource not found scenarios.
 * Automatically returns HTTP 404 status when thrown.
 * 
 * @author Melvin Chibanda
 * @version 1.0
 * @since 2024
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    /**
     * Constructs a new ResourceNotFoundException with the specified detail message.
     * 
     * @param message the detail message explaining why the resource was not found
     */
    public ResourceNotFoundException(String message)  {
        super(message);
    }
}
