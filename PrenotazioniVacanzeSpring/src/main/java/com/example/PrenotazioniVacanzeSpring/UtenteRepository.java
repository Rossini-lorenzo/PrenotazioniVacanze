package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.PrenotazioniVacanzeSpring.Utente;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UtenteRepository extends JpaRepository <Utente, Integer> {
	
}