package com.example.backend.Services;


import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.Incorrect_Credidentials;
import com.example.backend.Models.User;
import com.example.backend.Repositories.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public User registerUser(User user){
        return userRepository.save(user);
    }

    public User loginUser(User user){
        User verificare=userRepository.findUserByEmail(user.getEmail());
        if(!verificare.getPassword().equals(user.getPassword()))
            throw new Incorrect_Credidentials();
        
        return null;
    }
}
