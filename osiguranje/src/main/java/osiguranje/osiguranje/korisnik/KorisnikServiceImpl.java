package osiguranje.osiguranje.korisnik;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
@Transactional
public class KorisnikServiceImpl implements KorisnikService {

	@Autowired
	private KorisnikRepository repository;
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<User> findAll() {
		return (List<User>) repository.findAll();
	}

	@Override
	public User save(User korisnik) {
		return repository.save(korisnik);
	}

	@Override
	public User findByUsername(String username) {

		Query query = entityManager.createQuery("SELECT u FROM User u WHERE u.username=?1");
		query.setParameter(1, username);
		User user = (User) query.getSingleResult();
		return user;

	}

}
