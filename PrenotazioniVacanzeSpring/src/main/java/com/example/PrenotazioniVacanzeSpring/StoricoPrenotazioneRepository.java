package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StoricoPrenotazioneRepository extends JpaRepository <StoricoPrenotazione, Integer> {
	
}