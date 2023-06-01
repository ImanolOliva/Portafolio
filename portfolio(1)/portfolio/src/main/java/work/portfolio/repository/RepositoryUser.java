package work.portfolio.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import work.portfolio.model.User;

@Repository
public interface RepositoryUser extends JpaRepository<User,Long> {

}
