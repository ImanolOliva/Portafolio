package work.portfolio.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import work.portfolio.model.User;
import work.portfolio.repository.RepositoryUser;

@Service
public class ServiceUser {


    @Autowired
    private RepositoryUser repository;



    public User recibirMensajes(User user){
        return  this.repository.save(user);
    }
}
