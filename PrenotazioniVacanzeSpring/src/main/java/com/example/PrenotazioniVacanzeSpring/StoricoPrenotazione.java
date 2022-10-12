package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="StoricoPrenotazione")
public class StoricoPrenotazione {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idStoricoPrenotazione;
    private int committente;
    private int prenotazione;
    private int nPartecipanti;
    private float prezzo;
    private String destinazione;
    private String descrizione;
    private Date dataInizio;
    private Date dataFine;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public int getCommittente() {
        return committente;
    }
    public void setCommittente(int committente) {
        this.committente = committente;
    }
    public int getPrenotazione() {
        return prenotazione;
    }
    public void setPrenotazione(int prenotazione) {
        this.prenotazione = prenotazione;
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
    
    
}
