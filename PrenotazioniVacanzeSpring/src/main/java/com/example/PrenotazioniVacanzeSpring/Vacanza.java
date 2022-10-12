package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vacanza {
    
    public enum tipoMezzo {pullman,treno,aereo};
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private int codAlloggio;
    private int codViaggio;
    private int codPacchetto;
    private String destinazione;
    private String descrizione;
    private int nMaxPartecipanti;
    private int nStanzeLetto;
    private int nBagni;
    private int nLetti;
    private Date orarioPartenza;
    private Date orarioArrivo;
    private int nBiglietti;
    private String luogoPartenza;
    @Enumerated(EnumType.STRING)
    private tipoMezzo tipoMezzo;
    private Date dataInizio;
    private Date dataFine;
    private int scontoOfferto;
}
