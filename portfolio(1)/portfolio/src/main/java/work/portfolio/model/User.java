package work.portfolio.model;
import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")

public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;


    @Column(name = "Mensaje")
    private String mensajes;


    @Column(name = "Nombre")
    private String nombre;


    @Column(name = "Email")
    private String email;

    @Column(name = "Telefono")
    private Integer tel;
    public User(){}
    public User(Long id, String mensajes,String nombre,String email,Integer tel) {
        this.id = id;
        this.nombre = nombre;
        this.mensajes = mensajes;
        this.tel = tel;
        this.email = email;
    }

    public Long getId() {
        return id;
    }
    public String getMensajes() {
        return mensajes;
    }

    public void setMensajes(String mensajes) {
        this.mensajes = mensajes;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getTel() {
        return tel;
    }

    public void setTel(Integer tel) {
        this.tel = tel;
    }
}
