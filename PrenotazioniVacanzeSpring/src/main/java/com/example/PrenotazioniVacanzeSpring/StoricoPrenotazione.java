package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="StoricoPrenotazione")
public class StoricoPrenotazione {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idStoricoPrenotazione")
    private Integer idStoricoPrenotazione;
  
   
    private int nPartecipanti;
    private float prezzo;
    private String destinazione;
    private String descrizione;
    private Date dataInizio;
    private Date dataFine;
    @ManyToOne
    @JoinColumn(name="IdUtente")
     private Utente Utente;
    @OneToOne
    @JoinColumn(name = "codPrenotazione")
    private Prenotazione prenotazione;
	public Integer getIdStoricoPrenotazione() {
		return idStoricoPrenotazione;
	}
	public void setIdStoricoPrenotazione(Integer idStoricoPrenotazione) {
		this.idStoricoPrenotazione = idStoricoPrenotazione;
	}
	
	public int getnPartecipanti() {
		return nPartecipanti;
	}
	public void setnPartecipanti(int nPartecipanti) {
		this.nPartecipanti = nPartecipanti;
	}
	public float getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(float prezzo) {
		this.prezzo = prezzo;
	}
	public String getDestinazione() {
		return destinazione;
	}
	public void setDestinazione(String destinazione) {
		this.destinazione = destinazione;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public Date getDataInizio() {
		return dataInizio;
	}
	public void setDataInizio(Date dataInizio) {
		this.dataInizio = dataInizio;
	}
	public Date getDataFine() {
		return dataFine;
	}
	public void setDataFine(Date dataFine) {
		this.dataFine = dataFine;
	}
	public Utente getUtente() {
		return Utente;
	}
	public void setUtente(Utente utente) {
		Utente = utente;
	}
	public Prenotazione getPrenotazione() {
		return prenotazione;
	}
	public void setPrenotazione(Prenotazione prenotazione) {
		this.prenotazione = prenotazione;
	}
    

    
    
}
