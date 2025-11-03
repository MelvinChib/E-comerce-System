

package com.melvin.E_comerce.System.Model;


import jakarta.persistence.*;
import lombok.*;




    @Entity
    @Table(name = "Categories")
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;


        private String username;
        private String email;
        private String password;


        @Enumerated(EnumType.STRING)
        private Role role;

    }


