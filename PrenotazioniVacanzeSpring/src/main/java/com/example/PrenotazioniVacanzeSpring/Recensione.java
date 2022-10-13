package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Recensione")
public class Recensione {

    public enum stelle {uno,due,tre,quattro,cinque};
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idRecensione")
    private Integer idRecensione;

    private String commento;
    @Enumerated(EnumType.STRING)
    private stelle stelle;
    private Date data;
    
    @ManyToOne
    @JoinColumn(name="idVacanza")
     private Vacanza Vacanza;
    
    public Vacanza getVacanza() {
		return Vacanza;
	}
	public void setVacanza(Vacanza vacanza) {
		Vacanza = vacanza;
	}
	public Integer getIdRecensione() {
        return idRecensione;
    }
    public void setIdRecensione(Integer idRecensione) {
        this.idRecensione = idRecensione;
    }
   
    public String getCommento() {
        return commento;
    }
    public void setCommento(String commento) {
        this.commento = commento;
    }
    public stelle getStelle() {
        return stelle;
    }
    public void setStelle(stelle stelle) {
        this.stelle = stelle;
    }
    public Date getData() {
        return data;
    }
    public void setData(Date data) {
        this.data = data;
    }
    
    
}
