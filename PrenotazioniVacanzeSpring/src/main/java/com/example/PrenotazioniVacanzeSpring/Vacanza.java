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
@Table(name="Vacanza")
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
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public int getCodAlloggio() {
        return codAlloggio;
    }
    public void setCodAlloggio(int codAlloggio) {
        this.codAlloggio = codAlloggio;
    }
    public int getCodViaggio() {
        return codViaggio;
    }
    public void setCodViaggio(int codViaggio) {
        this.codViaggio = codViaggio;
    }
    public int getCodPacchetto() {
        return codPacchetto;
    }
    public void setCodPacchetto(int codPacchetto) {
        this.codPacchetto = codPacchetto;
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
    public int getnMaxPartecipanti() {
        return nMaxPartecipanti;
    }
    public void setnMaxPartecipanti(int nMaxPartecipanti) {
        this.nMaxPartecipanti = nMaxPartecipanti;
    }
    public int getnStanzeLetto() {
        return nStanzeLetto;
    }
    public void setnStanzeLetto(int nStanzeLetto) {
        this.nStanzeLetto = nStanzeLetto;
    }
    public int getnBagni() {
        return nBagni;
    }
    public void setnBagni(int nBagni) {
        this.nBagni = nBagni;
    }
    public int getnLetti() {
        return nLetti;
    }
    public void setnLetti(int nLetti) {
        this.nLetti = nLetti;
    }
    public Date getOrarioPartenza() {
        return orarioPartenza;
    }
    public void setOrarioPartenza(Date orarioPartenza) {
        this.orarioPartenza = orarioPartenza;
    }
    public Date getOrarioArrivo() {
        return orarioArrivo;
    }
    public void setOrarioArrivo(Date orarioArrivo) {
        this.orarioArrivo = orarioArrivo;
    }
    public int getnBiglietti() {
        return nBiglietti;
    }
    public void setnBiglietti(int nBiglietti) {
        this.nBiglietti = nBiglietti;
    }
    public String getLuogoPartenza() {
        return luogoPartenza;
    }
    public void setLuogoPartenza(String luogoPartenza) {
        this.luogoPartenza = luogoPartenza;
    }
    public tipoMezzo getTipoMezzo() {
        return tipoMezzo;
    }
    public void setTipoMezzo(tipoMezzo tipoMezzo) {
        this.tipoMezzo = tipoMezzo;
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
    public int getScontoOfferto() {
        return scontoOfferto;
    }
    public void setScontoOfferto(int scontoOfferto) {
        this.scontoOfferto = scontoOfferto;
    }
    
}
