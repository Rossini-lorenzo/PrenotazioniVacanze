package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;

public class Alloggio {

	  private String destinazione;
      private String descrizione;
	  private int codAlloggio ;
	  private int camere;
	  private int nBagni ;
	  private int nStanzaLetto ;
	  private int nLetti ;
	  private Date dataInizio;
	  private Date dataFine;
      private String linkImg;
      private String titolo;
	  public Alloggio() {}
	public Alloggio(String destinazione, String descrizione, int codAlloggio, int camere, int nBagni, int nStanzaLetto,
			int nLetti, int maxPartecipanti, Date dataInizio, Date dataFine,String linkImg,String titolo) {
		super();
		this.destinazione = destinazione;
		this.descrizione = descrizione;
		this.codAlloggio = codAlloggio;
		this.camere = camere;
		this.nBagni = nBagni;
		this.nStanzaLetto = nStanzaLetto;
		this.nLetti = nLetti;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
		this.linkImg=linkImg;
		this.titolo=titolo;
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
	public int getCodAlloggio() {
		return codAlloggio;
	}
	public void setCodAlloggio(int codAlloggio) {
		this.codAlloggio = codAlloggio;
	}
	public int getCamere() {
		return camere;
	}
	public void setCamere(int camere) {
		this.camere = camere;
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
	public int getnLetti() {
		return nLetti;
	}
	public void setnLetti(int nLetti) {
		this.nLetti = nLetti;
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
	
	  
}
