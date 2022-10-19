package com.example.PrenotazioniVacanzeSpring;

public class prenotazioneGet {
	
	   private int nPartecipanti;
	    private String titolo;
	    private Integer utente;
	    private Integer offerta;
	    
	    
	    public prenotazioneGet() {}


		public prenotazioneGet(int nPartecipanti, String titolo, Integer utente, Integer offerta) {
			super();
			this.nPartecipanti = nPartecipanti;
			this.titolo = titolo;
			this.utente = utente;
			this.offerta = offerta;
		}


		public int getnPartecipanti() {
			return nPartecipanti;
		}


		public void setnPartecipanti(Integer nPartecipanti) {
			this.nPartecipanti = nPartecipanti;
		}


		public String getTitolo() {
			return titolo;
		}


		public void setTitolo(String titolo) {
			this.titolo = titolo;
		}


		public int getUtente() {
			return this.utente;
		}


		public void setUtente(Integer utente) {
			this.utente = utente;
		}


		public int getOfferta() {
			return this.offerta;
		}


		public void setOfferta(Integer offerta) {
			this.offerta = offerta;
		}
	    
	    

}


