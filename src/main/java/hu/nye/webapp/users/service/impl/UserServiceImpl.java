package hu.nye.webapp.users.service.impl;

import hu.nye.webapp.users.dto.UserDTO;
import hu.nye.webapp.users.entity.User;
import hu.nye.webapp.users.exception.UserNotFoundException;
import hu.nye.webapp.users.repository.UserRepository;
import hu.nye.webapp.users.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 *
 * Ő a konkrét implementációja a MovieService.java interface-nak
 * Ő tudja hivogatni a UserRepository-t, és felszedi az adatbázisból a kellő dolgokat, majd átalakítja findAll() metódus Steam-jével megfelelő formátumba, és visszaadja a Controller felé
 *
 */

// és azrét, hogy a Spring be tudja neki adni a MovieRepository függőséget, és a függőséget át tudja majd adni a Controllerünknek, ahhoz ebből az osztályból egy Bean-t kell csinálni egy Annotációval egyszerűen
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;    // az implementáció a UserRepository-val gyűjtse össze az adatokat az adatbázisból
    private final ModelMapper modelMapper;          // külső osztály így Configuration-on keresztül lesz ebből Bean

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;

        // ha futtatni akarjuk, akkor hogy az adatbázisnak legyen valami tartalma, így ezt ide kell másolni:
        User user1 = new User();            // hogy legyen példaadat is
        user1.setFirstName("Vics");
        user1.setSecondName("Eszter");
        User user2 = new User();
        user2.setFirstName("Próba");
        user2.setSecondName("János");

        userRepository.save(user1);         // lementi az adatbázisba
        userRepository.save(user2);


    }

    // --- UserServiceImpl  implementáció kiegészítése
    // userek kilistázása
    @Override
    public List<UserDTO> findAll() {
        List<User> userList = userRepository.findAll();                 // az összes usert felszedjük a userRepositoryval, ami az adatbázisban van, és elmentük ezt egy Listába

        return userList.stream()                                        // és a User-ekkt beleteszem a stream-be, és az ősszes elemre végrehajtok egy map-pelést; azaz átlakítom mássá az elemeket
                .map(user -> modelMapper.map(user, UserDTO.class))      // User -> UserDTO lesz
                .collect(Collectors.toList());                          // és ezek után ezzel a művelettel begyűjtöm egy listába. Majd gyakorlatilag ezeket vissza is tudom már így adni a return-t eléírva
    }

    // user mentése
    @Override
    public UserDTO create(UserDTO userDTO) {
        User userToSave = modelMapper.map(userDTO, User.class);         // UserDTO -> User lesz azaz Entity-vé
        User savedUser = userRepository.save(userToSave);               // ez menti el az adatbázisba, és ez vissza is adja azt az Enity-t amit elmentett; ez kell, mert a JPA mentés során automatikusan generál neki egy ID-t
        return modelMapper.map(savedUser, UserDTO.class);               // és a kapott objektumot visszaalakítom UserDTO-vá
    }


    // user törlése
    @Override
    public void delete(Long id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (userToDelete.isPresent()){
            userRepository.delete(userToDelete.get());
        }else {
            throw new UserNotFoundException("User not found with this id: " + id );
        }
    }


    // user keresése ID alapján

    @Override
    public Optional<UserDTO> fingById(Long id){
        return userRepository.findById(id)
                .map(m -> modelMapper.map(m, UserDTO.class));
    }

    @Override
    public Optional<UserDTO> findById(Long id) {
        return Optional.empty();
    }

}
