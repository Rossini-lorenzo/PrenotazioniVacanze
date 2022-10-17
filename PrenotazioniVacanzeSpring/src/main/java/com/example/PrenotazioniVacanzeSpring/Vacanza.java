package com.example.PrenotazioniVacanzeSpring;

import java.sql.Date;
import java.util.Set;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Table(name="Vacanza")
@Entity
public class Vacanza {
    
    public enum tipoMezzo {pullman,treno,aereo};
    public enum pensione{Completa,Mezza,No}
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idVacanza")
    private Integer idVacanza;
    private String titolo;
	private int codAlloggio;
    private int codViaggio;
    private int codPacchetto;
    private String destinazione;
    private String descrizione;
    @Enumerated(EnumType.STRING)
    private pensione pensione;
    private int nMaxPartecipanti;
    private int nStanzeLetto;
    private int nBagni;
    private int nLetti;
    private Double orarioPartenza;
    private Double orarioArrivo;
    private int nBiglietti;
    private String luogoArrivo;
	private String luogoPartenza;
    @Enumerated(EnumType.STRING)
    private tipoMezzo tipoMezzo;
    private Date dataInizio;
    private Date dataFine;
    private int codViaggioPacchetto;
    private int codViaggioRitornoPacchetto;
    private int codAlloggioPacchetto;
    private String linkImg;
	@ManyToMany
    @JoinTable(name="VACANZE_OFFERTE",
    		joinColumns={@JoinColumn(name="idVacanza")},
    		inverseJoinColumns={@JoinColumn(name="codOfferta")})
    private Set<Offerta> offerte;
	
	@OneToMany(mappedBy="Vacanza")
    private Set<Recensione> recensioni;
	
    public int getCodViaggioPacchetto() {
		return codViaggioPacchetto;
	}
	public void setCodViaggioPacchetto(int codViaggioPacchetto) {
		this.codViaggioPacchetto = codViaggioPacchetto;
	}
	public int getCodViaggioRitornoPacchetto() {
		return codViaggioRitornoPacchetto;
	}
	public void setCodViaggioRitornoPacchetto(int codViaggioRitornoPacchetto) {
		this.codViaggioRitornoPacchetto = codViaggioRitornoPacchetto;
	}
	public int getCodAlloggioPacchetto() {
		return codAlloggioPacchetto;
	}
	public void setCodAlloggioPacchetto(int codAlloggioPacchetto) {
		this.codAlloggioPacchetto = codAlloggioPacchetto;
	}
	public Integer getIdVacanza() {
		return idVacanza;
	}
	public void setIdVacanza(Integer idVacanza) {
		this.idVacanza = idVacanza;
	}
	public Set<Offerta> getOfferte() {
		return offerte;
	}
	public void setOfferte(Offerta offerta) {
		this.offerte.add(offerta);
	}
	public Set<Recensione> getRecensioni() {
		return recensioni;
	}
	public void setRecensioni(Set<Recensione> recensioni) {
		this.recensioni = recensioni;
	}
	
    
    public Integer getId() {
        return idVacanza;
    }
    public void setId(Integer idVacanza) {
        this.idVacanza = idVacanza;
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
    public Double getOrarioPartenza() {
        return orarioPartenza;
    }
    public void setOrarioPartenza(Double orarioPartenza) {
        this.orarioPartenza = orarioPartenza;
    }
    public Double getOrarioArrivo() {
        return orarioArrivo;
    }
    public void setOrarioArrivo(Double orarioArrivo) {
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
    public pensione getPensione() {
		return pensione;
	}
	public void setPensione(pensione pensione) {
		this.pensione = pensione;
	}
	public String getLuogoArrivo() {
		return luogoArrivo;
	}
	public void setLuogoArrivo(String luogoArrivo) {
		this.luogoArrivo = luogoArrivo;
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
