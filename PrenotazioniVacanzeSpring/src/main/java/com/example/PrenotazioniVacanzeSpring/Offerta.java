package com.example.PrenotazioniVacanzeSpring;

import java.io.Serializable;
import java.sql.Date;
import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;



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
@Table(name = "Offerta")
public class Offerta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="codOfferta")
    private Integer codOfferta;
    private Integer prezzo;
    private Date dataInizio;
    private Date dataFine;
    private Integer idVacanzaOfferta;
    
    @OneToOne
    @JoinColumn(name = "codPrenotazione")
    private Prenotazione prenotazione;
    
    
    @ManyToOne
    @JoinColumn(name="idVacanza")
    private Vacanza vacanza ;

	

	public Integer getCodOfferta() {
		return codOfferta;
	}

	public void setCodOfferta(Integer codOfferta) {
		this.codOfferta = codOfferta;
	}

	public Integer getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(Integer prezzo) {
		this.prezzo = prezzo;
	}

	

	public Integer getIdVacanzaOfferta() {
		return idVacanzaOfferta;
	}

	public void setIdVacanzaOfferta(Integer idVacanza) {
		this.idVacanzaOfferta = idVacanza;
	}



	public Date getDataInizio() {
		return dataInizio;
	}

	public void setDataInizio(Date DataInizio) {
		this.dataInizio = DataInizio;
	}

	public Date getDataFine() {
		return dataFine;
	}

	public void setDataFine(Date dataFine) {
		dataFine = dataFine;
	}

	public Prenotazione getPrenotazione() {
		return prenotazione;
	}

	public void setPrenotazione(Prenotazione prenotazione) {
		this.prenotazione = prenotazione;
	}

	public Vacanza getVacanza() {
		return vacanza;
	}

	public void setVacanza(Vacanza vacanza) {
		this.vacanza = vacanza;
	}

	
    
    
   

}
