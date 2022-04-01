package hu.nye.webapp.users.service;

import hu.nye.webapp.users.dto.UserDTO;

import java.util.List;

/**
 * service réteg: itt van az üzeleti logika
 * szerepe: az entity és repository rétegeket tudja hívni; azaz az adatbázis rétegeit, dolgait fel tudja használni
 *
 */
public interface UserService {

    // Ez a metódus egy UserDTO típusú Listát ad vissza
    List<UserDTO> findAll();

    // user mentése. Mentés után visszakapjuk a UserDTO-t
    UserDTO create(UserDTO userDTO);
}
