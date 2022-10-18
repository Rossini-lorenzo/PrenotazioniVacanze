package com.example.PrenotazioniVacanzeSpring;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VacanzaRepository extends JpaRepository <Vacanza, Integer> {
	Optional<Vacanza> findByTitolo(String titolo);
	Optional<Vacanza> findById(Integer idVacanza);


}
