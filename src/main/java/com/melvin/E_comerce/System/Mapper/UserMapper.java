package com.melvin.E_comerce.System.Mapper;

import com.melvin.E_comerce.System.DTO.UserResponseDTO;
import com.melvin.E_comerce.System.DTO.UserSingupDTO;
import com.melvin.E_comerce.System.Model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "username", source = "userName")
    User toEntity(UserSingupDTO dto);

    UserResponseDTO toResponseDTO(User user);
}
