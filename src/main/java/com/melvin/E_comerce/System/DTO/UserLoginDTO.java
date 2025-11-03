package com.melvin.E_comerce.System.DTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDTO {

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;
}
