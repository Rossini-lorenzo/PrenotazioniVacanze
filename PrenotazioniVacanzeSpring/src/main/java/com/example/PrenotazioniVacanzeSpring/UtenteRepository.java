package com.example.PrenotazioniVacanzeSpring;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.PrenotazioniVacanzeSpring.Utente;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UtenteRepository extends JpaRepository <Utente, Integer> {
	Optional<Utente> findByEmail(String email);
	Optional<Utente> findByNomeUtente(String nomeUtente);
	
}