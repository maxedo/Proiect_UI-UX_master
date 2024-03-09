package com.example.backend.Models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private long id;


    private String email;

    private LocalDate date_of_birth;

    private String password;


    public User(long id, String email, LocalDate date_of_birth, String password) {
        this.id = id;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.password = password;
    }



    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDate_of_birth() {
        return this.date_of_birth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", email='" + getEmail() + "'" +
            ", date_of_birth='" + getDate_of_birth() + "'" +
            ", password='" + getPassword() + "'" +
            "}";
    }

    
}
