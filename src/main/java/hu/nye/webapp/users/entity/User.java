package hu.nye.webapp.users.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

/**
 * ebből az osztályból -> adatbázis beli sor és tábla készítése automatikusan
 *
 * ezzel hozzuk létre az adatbázist, és a benne lévő táblákat, fejléceket
 * hogy tudjuk használni a Spring Data JPA-t és adatbázisba dolgokat tudjunk menteni, kell készíteni egy Entity-t
 *
 */

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)             // AutoIncrement lesz így az Id
    private Long id;
    private String firstName;
    private String secondName;
    private String telNumber;
    private String address;
    private Date registrationDate;  // szülidő , emailcím



    // kell még hozzá egy üres konstruktor ;; mindenképp meg kell adni ;; és gettereket és settereket -> Code menü / Generate / Constructor / Select None
    public User() {
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
