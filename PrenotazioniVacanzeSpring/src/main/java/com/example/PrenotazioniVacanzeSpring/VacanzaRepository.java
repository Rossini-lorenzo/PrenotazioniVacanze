package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;


public interface VacanzaRepository extends JpaRepository <Vacanza, Integer> {
	
}