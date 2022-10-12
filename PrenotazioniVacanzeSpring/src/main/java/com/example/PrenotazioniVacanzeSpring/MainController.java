package com.example.PrenotazioniVacanzeSpring;


import java.sql.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.PrenotazioniVacanzeSpring.Utente.Sesso;
//http://localhost:8080/demo/add?name="matteo"&email="matteo@gmail.com"
@Controller // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private UtenteRepository userRepository;

  @PostMapping(path="/addUser") // Map ONLY POST Requests
  public @ResponseBody String addNewUser (@RequestParam String nome
      , @RequestParam String email,@RequestParam String cognome,@RequestParam Date dataNascita,
      @RequestParam String indirizzo,@RequestParam String telefono,@RequestParam String codiceCartaIdentita,
      @RequestParam Sesso sesso,@RequestParam String nomeUtente,@RequestParam String passwordUtente) {
    // @ResponseBody means the returned String is the n, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
	  
	  
    Utente n = new Utente();
    n.setNome(nome);
    n.setEmail(email);
    n.setCognome(cognome);
    n.setDataNascita(dataNascita);
    n.setIndirizzo(indirizzo);
    n.setTelefono(telefono);
    n.setCodiceCartaIdentita(codiceCartaIdentita);
    n.setSesso(sesso);
    n.setNomeUtente(nomeUtente);
    n.setPasswordUtente(passwordUtente);
    userRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Utente> getAllUsers() {
    // This returns a JSON or XML with the users
    return userRepository.findAll();
  }
}