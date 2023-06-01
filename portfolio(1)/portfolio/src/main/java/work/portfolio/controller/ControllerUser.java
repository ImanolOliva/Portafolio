package work.portfolio.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import work.portfolio.model.User;
import work.portfolio.service.ServiceUser;

@RestController
public class ControllerUser {


    @Autowired
    private ServiceUser service;



    @PostMapping("api")
    public User recibirMensajes(@RequestBody User user){

            if(user.getMensajes() == null || user.getEmail() == null
             || user.getNombre() == null || user.getTel() == null){
                    return null;
            }
            return this.service.recibirMensajes(user);
    }
}
