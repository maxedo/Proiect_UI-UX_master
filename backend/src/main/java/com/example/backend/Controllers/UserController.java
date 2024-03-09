package com.example.backend.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Models.User;
import com.example.backend.Services.UserService;

@RestController
@RequestMapping("/User")
public class UserController {

    private UserService userService;

    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/Register")
    public ResponseEntity<User> register(@RequestBody User user){
        return ResponseEntity.ok(userService.registerUser(user));
    }


    @PostMapping("/Login")
    public ResponseEntity<User> login(@RequestBody User user){
        return ResponseEntity.ok(userService.loginUser(user));
    }
    
}
