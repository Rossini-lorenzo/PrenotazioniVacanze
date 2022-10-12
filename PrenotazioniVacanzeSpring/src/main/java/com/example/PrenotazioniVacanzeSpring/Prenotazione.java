package com.example.PrenotazioniVacanzeSpring;


import java.util.List;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Prenotazione")
public class Prenotazione {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer codPrenotazione;
    private int committente;
    private int offerta;
    private int nPartecipanti;
    private String titolo;
   // @ManyToOne
   // @JoinColumn(name="committente",referencedColumnName="idUtente")
   // private List<Utente> Utenti;
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
