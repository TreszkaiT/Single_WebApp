package hu.nye.webapp.users.controller;

import hu.nye.webapp.users.exception.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.persistence.ExcludeDefaultListeners;

@RestControllerAdvice(assignableTypes = UserController.class)
public class UserControllerAdvice {
    @ExceptionHandler(value= UserNotFoundException.class)
    public ResponseEntity<Void> handleUserNotFoundException(){
        return ResponseEntity.badRequest().build();
    }
}
