import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from "./shared";

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.incializar();
  }

  /**
   * Retorna se a tela de inico deve ser exibida
   */
  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   */
  get showTabuleiro(): boolean{
    return  this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim deve ser exibida
   */
  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo();
  }

}
