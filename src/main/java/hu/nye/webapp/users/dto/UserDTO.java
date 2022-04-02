package hu.nye.webapp.users.dto;

import java.util.Date;
import java.util.Set;

/**
 * Data Transfer Object = csak adattovábbításra használatos osztály ez
 * ugyanazt csinálja, mint a User, csak ez nem Entity lesz, így nem lesz szükségünk a User.java-ban az Entity-s és JPA-s Annotációkra
 *
 * ezt az osztályt használjuk fel a UserService-ban
 *
 * Mivel ez nem Entity, így már nincs szükésünk itt az Annotációkra
 */
public class UserDTO {

    private Long id;
    private String firstName;
    private String secondName;
    private String telNumber;
    private String address;
    private Date registrationDate;

    public UserDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }


    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }
}
