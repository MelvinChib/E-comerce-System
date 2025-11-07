package com.melvin.E_comerce.System.Service.User;

import com.melvin.E_comerce.System.DTO.UserLoginDTO;
import com.melvin.E_comerce.System.DTO.UserResponseDTO;
import com.melvin.E_comerce.System.DTO.UserSingupDTO;

public interface UserService {
    UserResponseDTO registerUser(UserSingupDTO signupDTO);
    String loginUser(UserLoginDTO loginDTO);
    UserResponseDTO getUserById(Long id);
}
