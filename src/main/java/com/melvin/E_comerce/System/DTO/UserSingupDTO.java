package com.melvin.E_comerce.System.DTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSingupDTO {


    @NotBlank(message = "The Username is required")
    private String userName;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Password required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
}
