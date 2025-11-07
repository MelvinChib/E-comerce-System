package com.melvin.E_comerce.System.DTO;


import com.melvin.E_comerce.System.Model.Role;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDTO {

    private Long id;
    private String username;
    private String email;
    private Role role;
}
