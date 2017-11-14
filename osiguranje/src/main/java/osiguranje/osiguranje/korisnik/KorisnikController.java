package osiguranje.osiguranje.korisnik;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class KorisnikController {
	
	@Autowired
	private KorisnikService korisnikService;
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	@GetMapping
	private List<User> findAll(){
		System.out.println("usao u get");
		System.out.println(korisnikService.findAll().size());
		return korisnikService.findAll();
	}
	
	@PostMapping
	private void saveUser(@RequestBody User user){
		user.setPassword(encoder.encode(user.getPassword()));
		korisnikService.save(user);
		
	}

}
