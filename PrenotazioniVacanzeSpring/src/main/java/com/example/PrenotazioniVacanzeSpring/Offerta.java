package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



/*
 * CREATE TABLE `Offerta` (
`codOfferta` INT NOT NULL AUTO_INCREMENT,
`prezzo` INT NOT NULL,
`vacanza` INT,
`dataInizio` DATE NOT NULL,
`dataFine` DATE NOT NULL,
PRIMARY KEY (`codOfferta`),
FOREIGN KEY (`vacanza`) REFERENCES Vacanza(`idVacanza`));
 */


@Entity // This tells Hibernate to make a table out of this class
public class Offerta {
	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	 private Integer codOfferta;
	 private Integer prezzo;
	 private Date DateInizio;
	 private Date DataFine;
	 

}
