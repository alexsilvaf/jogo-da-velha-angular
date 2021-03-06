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

  jogar(posX: number, posY: number){
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a
   * coordenada informada
   *
   * @param posX
   * @param posY
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a
   * coordenada informada
   *
   * @param posX
   * @param posY
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a
   * coordenada informada.
   *
   * @param posX
   * @param posY
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   */
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicializa um novo jogo, assim como exibe o tabuleiro.
   */
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
