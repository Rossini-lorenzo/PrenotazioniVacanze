package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StoricoPrenotazione {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private int committente;
    private int prenotazione;
    private int nPartecipanti;
    private float prezzo;
    private String destinazione;
    private String descrizione;
    private Date dataInizio;
    private Date dataFine;
}
