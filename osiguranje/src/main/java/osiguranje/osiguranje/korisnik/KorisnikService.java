package osiguranje.osiguranje.korisnik;

import java.util.List;

public interface KorisnikService {
	
	public List<User> findAll();
	
	public User save(User korisnik);
	
	public User findByUsername(String username);

}
