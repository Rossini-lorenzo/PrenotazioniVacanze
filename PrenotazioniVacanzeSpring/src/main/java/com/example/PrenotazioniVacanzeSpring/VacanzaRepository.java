package com.example.PrenotazioniVacanzeSpring;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VacanzaRepository extends JpaRepository <Vacanza, Integer> {
	Optional<Vacanza> findByTitolo(String titolo);
	
	@Query(value = "SELECT * FROM Vacanza,Offerta WHERE Vacanza.id_vacanza = Offerta_id_vacanza_offerta and destinazione = :dest and n_partecipanti = :nper" , nativeQuery = true)
	List<Vacanza> findAllV(@Param("dest")String destinazione,@Param("nper")int nper);
	//Optional<Vacanza> findById(Integer idVacanza);
	
	//Optional<Vacanza> findBynPartecipanti(int nPartecipanti);
	//List<Vacanza> findBynPartecipantiDestinazione(String destinazione,int nPartecipanti);
	/*@Query(
			  value = "SELECT * FROM USERS u WHERE u.status = 1", 
			  nativeQuery = true)
			List<Vacanza> findAllActiveUsersNative();

*/
}
