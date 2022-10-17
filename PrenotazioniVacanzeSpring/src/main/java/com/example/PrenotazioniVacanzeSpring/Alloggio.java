package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

public class Alloggio {

	  private String destinazione;
      private String descrizione;
	  private String pensione ;
	  private int nBagni ;
	  private int nStanzaLetto ;
	  private int nPartecipanti;
	  private Date dataInizio;
	  private Date dataFine;
      private String linkImg;
      private String titolo;
	  public Alloggio() {}
	public Alloggio(String destinazione, String descrizione, String pensione, int nBagni, int nStanzaLetto,
			int nLetti, Date dataInizio, Date dataFine,String linkImg,String titolo,int nPartecipanti) {
		super();
		this.destinazione = destinazione;
		this.descrizione = descrizione;
		this.pensione = pensione;
		this.nBagni = nBagni;
		this.nStanzaLetto = nStanzaLetto;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
		this.linkImg=linkImg;
		this.titolo=titolo;
		this.nPartecipanti=nPartecipanti;
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
	public String getCodAlloggio() {
		return pensione;
	}
	public void setCodAlloggio(String pensione) {
		this.pensione = pensione;
	}
	
	public int getnBagni() {
		return nBagni;
	}
	public void setnBagni(int nBagni) {
		this.nBagni = nBagni;
	}
	public int getnStanzaLetto() {
		return nStanzaLetto;
	}
	public void setnStanzaLetto(int nStanzaLetto) {
		this.nStanzaLetto = nStanzaLetto;
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
	public String getLinkImg() {
		return linkImg;
	}
	public void setLinkImg(String linkImg) {
		this.linkImg = linkImg;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public String getPensione() {
		return pensione;
	}
	public void setPensione(String pensione) {
		this.pensione = pensione;
	}
	public int getnPartecipanti() {
		return nPartecipanti;
	}
	public void setnPartecipanti(int nPartecipanti) {
		this.nPartecipanti = nPartecipanti;
	}
	
	  
}
