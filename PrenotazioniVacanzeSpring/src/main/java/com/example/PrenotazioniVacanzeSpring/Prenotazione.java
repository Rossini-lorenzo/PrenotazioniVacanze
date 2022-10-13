package com.example.PrenotazioniVacanzeSpring;


import java.util.List;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Prenotazione")
public class Prenotazione {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="codPrenotazione")
    private Integer codPrenotazione;
    private int committente;

    private int nPartecipanti;
    private String titolo;
    @ManyToOne
   @JoinColumn(name="IdUtente")
    private Utente Utente;
    
    @OneToOne(mappedBy="prenotazione")
    private StoricoPrenotazione storicoPrenotazione;
    
    @OneToOne(mappedBy="prenotazione")
    private Offerta offerta;

	public Integer getCodPrenotazione() {
		return codPrenotazione;
	}

	public void setCodPrenotazione(Integer codPrenotazione) {
		this.codPrenotazione = codPrenotazione;
	}

	public int getCommittente() {
		return committente;
	}

	public void setCommittente(int committente) {
		this.committente = committente;
	}

	public int getnPartecipanti() {
		return nPartecipanti;
	}

	public void setnPartecipanti(int nPartecipanti) {
		this.nPartecipanti = nPartecipanti;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public Utente getUtente() {
		return Utente;
	}

	public void setUtente(Utente utente) {
		Utente = utente;
	}

	

	public Offerta getOfferta() {
		return offerta;
	}

	public void setOfferta(Offerta offerta) {
		this.offerta = offerta;
	}
    
    
   
    
}
