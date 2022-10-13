package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;


public interface OffertaRepository extends JpaRepository <Prenotazione, Integer> {
	
}