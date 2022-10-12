package com.example.PrenotazioniVacanzeSpring;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Prenotazione {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private int committente;
    private int offerta;
    private int nPartecipanti;
    private String titolo;
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
    public int getOfferta() {
        return offerta;
    }
    public void setOfferta(int offerta) {
        this.offerta = offerta;
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
    
}
