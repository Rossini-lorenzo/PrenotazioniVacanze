import { Viaggio } from './viaggio';
import { Alloggio } from './alloggio';
export class Pacchetto {

  idPacchetto : number;
  viaggioIncluso : Viaggio;
  alloggioIncluso : Alloggio;
  scontoOfferto : number;
  maxPartecipanti : number;

  constructor(idPacchetto : number, viaggioIncluso : Viaggio, alloggioIncluso : Alloggio,
    scontoOfferto : number, maxPartecipanti : number) {
      this.idPacchetto = idPacchetto;
      this.viaggioIncluso = viaggioIncluso;
      this.alloggioIncluso = alloggioIncluso;
      this.scontoOfferto = scontoOfferto;
      this.maxPartecipanti = maxPartecipanti;

  }

  public getIdPacchetto() : number{
    return this.idPacchetto;
  }

  public getViaggioIncluso() :Viaggio {
    return this.viaggioIncluso;
  }
  public setViaggioIncluso(viaggio: Viaggio) {
    this.viaggioIncluso = viaggio;
  }

  public getAlloggioIncluso() : Alloggio {
    return this.alloggioIncluso;
  }
  public setAlloggioInscluso(alloggio : Alloggio) {
    this.alloggioIncluso = alloggio;
  }

  public getScontoOfferto() : number {
    return this.scontoOfferto;
  }
  public setScontoOfferto(sconto : number) {
    this.scontoOfferto = sconto;
  }

  public getMaxPartecipanti() : number {
    return this.maxPartecipanti;
  }
  public setMaxPartecipanti(partecipanti : number) {
    this.maxPartecipanti =partecipanti;
  }
}
