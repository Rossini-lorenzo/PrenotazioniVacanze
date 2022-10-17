package com.example.PrenotazioniVacanzeSpring;

public class UtenteLogin {
	private String email;
	private String passwordUtente;
	public UtenteLogin() {}
	
	public UtenteLogin(String email, String passwordUtente) {
		super();
		this.email = email;
		this.passwordUtente = passwordUtente;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPasswordUtente() {
		return passwordUtente;
	}
	public void setPasswordUtente(String passwordUtente) {
		this.passwordUtente = passwordUtente;
	}
	

}
