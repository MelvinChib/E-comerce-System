package com.melvin.E_comerce.System.Service.User;

import com.melvin.E_comerce.System.DTO.UserLoginDTO;
import com.melvin.E_comerce.System.DTO.UserResponseDTO;
import com.melvin.E_comerce.System.DTO.UserSingupDTO;
import com.melvin.E_comerce.System.Exception.ResourceNotFoundException;
import com.melvin.E_comerce.System.Mapper.UserMapper;
import com.melvin.E_comerce.System.Model.User;
import com.melvin.E_comerce.System.Repository.UserRepository;
import com.melvin.E_comerce.System.Utility.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public UserResponseDTO registerUser(UserSingupDTO signupDTO) {
        if (userRepository.existsByEmail(signupDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        if (userRepository.existsByUsername(signupDTO.getUserName())) {
            throw new IllegalArgumentException("Username already exists");
        }

        User user = User.builder()
                .username(signupDTO.getUserName())
                .email(signupDTO.getEmail())
                .password(passwordEncoder.encode(signupDTO.getPassword()))
                .build();

        User savedUser = userRepository.save(user);
        return userMapper.toResponseDTO(savedUser);
    }

    @Override
    public String loginUser(UserLoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        return jwtTokenProvider.generateToken(user.getEmail());
    }

    @Override
    public UserResponseDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return userMapper.toResponseDTO(user);
    }
}
