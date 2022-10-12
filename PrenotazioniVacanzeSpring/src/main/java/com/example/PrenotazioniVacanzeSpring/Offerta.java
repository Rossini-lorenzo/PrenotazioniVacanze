package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/*
 * CREATE TABLE `Offerta` (
`codOfferta` INT NOT NULL AUTO_INCREMENT,
`prezzo` INT NOT NULL,
`vacanza` INT,
`dataInizio` DATE NOT NULL,
`dataFine` DATE NOT NULL,
PRIMARY KEY (`codOfferta`),
FOREIGN KEY (`vacanza`) REFERENCES Vacanza(`idVacanza`));
 */


@Entity // This tells Hibernate to make a table out of this class
@Table(name = "Offerta")
public class Offerta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer codOfferta;
    private Integer prezzo;
    private Date DateInizio;
    private Date DataFine;
    
    public Integer getCodOfferta() {
        return codOfferta;
    }
    public void setCodOfferta(Integer codOfferta) {
        this.codOfferta = codOfferta;
    }
    public Integer getPrezzo() {
        return prezzo;
    }
    public void setPrezzo(Integer prezzo) {
        this.prezzo = prezzo;
    }
    public Date getDateInizio() {
        return DateInizio;
    }
    public void setDateInizio(Date dateInizio) {
        DateInizio = dateInizio;
    }
    public Date getDataFine() {
        return DataFine;
    }
    public void setDataFine(Date dataFine) {
        DataFine = dataFine;
    }

}
