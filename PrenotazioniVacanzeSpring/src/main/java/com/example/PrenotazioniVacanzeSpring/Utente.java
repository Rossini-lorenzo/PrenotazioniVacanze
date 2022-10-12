package com.example.PrenotazioniVacanzeSpring;

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
public class Utente {
	
  public enum Sesso {m,f}
	
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name="idUtente")
  private Integer idUtente;
  private String nome;
  private String email;
  private String cognome;
  private Date dataNascita;
  private String indirizzo;
  private String telefono;
  private String codiceCartaIdentita;
  @Enumerated(EnumType.STRING)
  private Sesso sesso;
  private String nomeUtente;
  private String passwordUtente;
 // @OneToMany(mappedBy = "Prenotazione")
 // private List<Prenotazione> prenotazioni;
  
    public Integer getId() {
    	return idUtente;
    }
    public void setId(Integer idUtente) {
    	this.idUtente = idUtente;
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
    public Sesso getSesso() {
    	return sesso;
    }
    public void setSesso(Sesso sesso) {
    	this.sesso = sesso;
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



 
}