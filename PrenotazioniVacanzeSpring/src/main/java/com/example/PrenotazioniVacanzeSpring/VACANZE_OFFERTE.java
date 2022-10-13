package com.example.PrenotazioniVacanzeSpring;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "VACANZE_OFFERTE")
public class VACANZE_OFFERTE {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  
	  @ManyToOne
	    @JoinColumn(name = "idVacanza")
	    private Vacanza idVacanza;

	    @ManyToOne
	    @JoinColumn(name = "codOfferta")
	    private Offerta codOfferta;

}
  
