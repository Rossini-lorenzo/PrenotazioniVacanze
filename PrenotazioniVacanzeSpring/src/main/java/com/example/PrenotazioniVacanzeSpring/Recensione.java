package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Recensione")
public class Recensione {

    public enum stelle {"1","2","3","4","5"};
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idRecensione;
    private int codAlloggio;
    private String commento;
    @Enumerated(EnumType.STRING)
    private stelle stelle;
    private Date data;
    
    public Integer getIdRecensione() {
        return idRecensione;
    }
    public void setIdRecensione(Integer idRecensione) {
        this.idRecensione = idRecensione;
    }
    public int getCodAlloggio() {
        return codAlloggio;
    }
    public void setCodAlloggio(int codAlloggio) {
        this.codAlloggio = codAlloggio;
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
