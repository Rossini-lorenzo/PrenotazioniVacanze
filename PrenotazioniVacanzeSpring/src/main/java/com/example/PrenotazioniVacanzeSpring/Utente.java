package com.example.PrenotazioniVacanzeSpring;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;





@Entity // This tells Hibernate to make a table out of this class
@Table(name = "Utente")
public class Utente implements Serializable{
	
  public enum Sesso {m,f}
	
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name="IdUtente")
  private Integer id;
  private String nome;
  private String email;
  private String cognome;
  private Date dataNascita;
  private String indirizzo;
  private String telefono;
  private String codiceCartaIdentita;
  @Enumerated(EnumType.STRING)
  private Sesso sex;
  private String nomeUtente;
  private String passwordUtente;
  @OneToMany(mappedBy="Utente")
  private Set<Prenotazione> prenotazioni;
  @OneToMany(mappedBy="Utente")
  private Set<StoricoPrenotazione> storicoPrenotazioni;
  
  public Utente() {}
  
public Utente(Integer id, String nome, String email, String cognome, Date dataNascita, String indirizzo,
		String telefono, String codiceCartaIdentita, Sesso sex, String nomeUtente, String passwordUtente,
		Set<Prenotazione> prenotazioni, Set<StoricoPrenotazione> storicoPrenotazioni) {
	super();
	this.id = id;
	this.nome = nome;
	this.email = email;
	this.cognome = cognome;
	this.dataNascita = dataNascita;
	this.indirizzo = indirizzo;
	this.telefono = telefono;
	this.codiceCartaIdentita = codiceCartaIdentita;
	this.sex = sex;
	this.nomeUtente = nomeUtente;
	this.passwordUtente = passwordUtente;
	this.prenotazioni = prenotazioni;
	this.storicoPrenotazioni = storicoPrenotazioni;
}

public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getNome() {
	return nome;
}
public void setNome(String nome) {
	this.nome = nome;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getCognome() {
	return cognome;
}
public void setCognome(String cognome) {
	this.cognome = cognome;
}
public Date getDataNascita() {
	return dataNascita;
}
public void setDataNascita(Date dataNascita) {
	this.dataNascita = dataNascita;
}
public String getIndirizzo() {
	return indirizzo;
}
public void setIndirizzo(String indirizzo) {
	this.indirizzo = indirizzo;
}
public String getTelefono() {
	return telefono;
}
public void setTelefono(String telefono) {
	this.telefono = telefono;
}
public String getCodiceCartaIdentita() {
	return codiceCartaIdentita;
}
public void setCodiceCartaIdentita(String codiceCartaIdentita) {
	this.codiceCartaIdentita = codiceCartaIdentita;
}
public Sesso getSex() {
	return sex;
}
public void setSex(Sesso sex) {
	this.sex = sex;
}
public String getNomeUtente() {
	return nomeUtente;
}
public void setNomeUtente(String nomeUtente) {
	this.nomeUtente = nomeUtente;
}
public String getPasswordUtente() {
	return passwordUtente;
}
public void setPasswordUtente(String passwordUtente) {
	this.passwordUtente = passwordUtente;
}
public Set<Prenotazione> getPrenotazioni() {
	return prenotazioni;
}
public void setPrenotazioni(Set<Prenotazione> prenotazioni) {
	this.prenotazioni = prenotazioni;
}
public Set<StoricoPrenotazione> getStoricoPrenotazioni() {
	return storicoPrenotazioni;
}
public void setStoricoPrenotazioni(Set<StoricoPrenotazione> storicoPrenotazioni) {
	this.storicoPrenotazioni = storicoPrenotazioni;
}

 
}