package hu.nye.webapp.users.repository;

import hu.nye.webapp.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ez fogja az adatbázis műveleteket elvégezni
 *
 * ez egy JPA-s repository lesz
 *
 */

public interface UserRepository extends JpaRepository<User, Long> {

    // itt azért saját metódusokat is tudunk definiálni, ha szeretnénk nem csak beépítetteket... a Spring Data JPA dokumentációjában utána tudunk olvasni
}
