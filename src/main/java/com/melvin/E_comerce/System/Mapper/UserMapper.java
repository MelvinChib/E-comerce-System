package com.melvin.E_comerce.System.Mapper;


import com.melvin.E_comerce.System.DTO.UserResponseDTO;
import com.melvin.E_comerce.System.DTO.UserSingupDTO;
import com.melvin.E_comerce.System.Model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(UserSingupDTO dto);

    UserResponseDTO toDTO(User user);

}
