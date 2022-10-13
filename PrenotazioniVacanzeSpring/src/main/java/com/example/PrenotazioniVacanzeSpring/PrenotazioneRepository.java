package com.example.PrenotazioniVacanzeSpring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Integer> {

}