package com.example.backend.Exceptions;

public class Incorrect_Credidentials extends RuntimeException {
    public Incorrect_Credidentials(){
        super("Incorrect credidentials");
    }
}
