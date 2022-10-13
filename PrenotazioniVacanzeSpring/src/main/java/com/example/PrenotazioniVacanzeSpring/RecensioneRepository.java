package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;


public interface RecensioneRepository extends JpaRepository <Prenotazione, Integer> {
	
}