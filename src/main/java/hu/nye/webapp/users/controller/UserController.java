package hu.nye.webapp.users.controller;

import hu.nye.webapp.users.dto.UserDTO;
import hu.nye.webapp.users.service.UserService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * Ebben vannak az EndPoint-ok
 *
 * Entity-k és adatbázis művelet itt nem lehet!!! meg egyetlen más controller-ben sem!!
 *
 * ezek a metódusok fogják lekezelni a kéréseket az egyes endpointokra pl. GET/movies  a https://editor.swagger.io/ -oldalon GET/POST/....
 *
 * a UserDTO bevezetésével ez az osztály már a UserService-en fog függni; az implementációt meg majd a Spring magától intézi, nekünk nem kell
 *
 */

@RestController
public class UserController {

    private final UserService userService;                      // e felé nem kell @Autowire annotáció, mert Spring x. verzió felett már nem szükséges, ha az osztály felett ott az annotáció kitéve (RestContorller)

    public UserController(UserService userService) {            // ide, vagy egy sorral fentebb nem kell az @Autowired Annotáció, mert Spring x. verzió felett már megnézi az osztály Annotációját @RestController, és tudja, hogy annak a feladata behzúni ezeket, és ez a konstruktor egyértelmű, és egyszerű
        this.userService = userService;
    }

    // usereket olvas DB-ból: ez pedig már a UserDTO-t fog visszaadni, és a userService-t fog használni
    @RequestMapping(path = "/users", method = RequestMethod.GET)      // RequestMapping: megmondjuk, hogy ez a metódus a GET/users  hívásra alkalmas;;;; azaz ez egy kérés Mappalése, ha bejön egy kérés, akkor azt le tudjuk mappelni erre a metódusra  CTRL+P metódusainak kilistázása
    public List<UserDTO> findAll(){
        return userService.findAll();
    }

    // adatokat ír az adatbázisba:  (@RequestBody UserDTO userDTO): ha bejön egy kérés, és volt RequestBody-ja, akkor átkonvertálja azt UserDTO objektummá, és ezzel tudnunk dolgozni ezen metódus törzsében
    @RequestMapping(path = "/users", method = RequestMethod.POST)
    public UserDTO create(@RequestBody UserDTO userDTO){
        return userService.create(userDTO);                           // itt meg meghívom az Implementáció create metódusát
    }

    // adatokat töröl az adatbázisból
    @RequestMapping(path = "/users/del" , method = RequestMethod.POST)
    public List<UserDTO> delete(@RequestBody Long id) { return userService.findAll(); }


    // ID alaján kiolvas
    @RequestMapping(path = "/users/findById" , method = RequestMethod.POST)
    public Optional<UserDTO> findById(@RequestBody Long id){ return userService.findById(id);}


}
