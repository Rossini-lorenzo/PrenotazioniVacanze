package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface OffertaRepository extends JpaRepository <Offerta, Integer> {
	Optional<Offerta> findByDataInizio(Date dataInizio);
	Optional<Offerta> findByDataFine(Date dataFine);

	
}