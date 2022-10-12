package com.example.PrenotazioniVacanzeSpring;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Vacanza {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private int codAlloggio;
    private int codViaggio;
    private int codPacchetto;
}
