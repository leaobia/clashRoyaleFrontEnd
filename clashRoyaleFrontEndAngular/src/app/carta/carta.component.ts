import { Component, Input } from '@angular/core';
import { Carta } from '../../_model/carta.interface';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.sass'
})
export class CartaComponent {
  @Input()
  public carta!: Carta;

  abrirCarta(nomeCarta: string, nomeTipo: string, nomeRaridade: string, descricaoCarta: string) {

    const divElement = document.createElement('div');
    divElement.classList.add('conteudoModal')
    let pai = document.getElementById('modalCarta');
    let overlay = document.getElementById('overlay');

    pai?.classList.add('d-flex')
    overlay?.classList.add('d-flex')

    pai?.classList.remove('lendário2')
    pai?.classList.remove('comum2')
    pai?.classList.remove('rara2')
    pai?.classList.remove('épico2')

    const buttonFecharModal = document.createElement('button');
    buttonFecharModal.textContent = 'X'
    buttonFecharModal.classList.add('buttonFecharModal')

    const nomeDaCarta = document.createElement('p');
    nomeDaCarta.textContent = nomeCarta
    nomeDaCarta.classList.add('nomeDaCarta')

    const divRaridadeTipo = document.createElement('div');
    divRaridadeTipo.classList.add('divRaridadeTipo')
    
    const nomeDoTipo = document.createElement('p');
    nomeDoTipo.textContent = nomeTipo

    const nomeDaRaridade = document.createElement('p');
    nomeDaRaridade.textContent = nomeRaridade

    if (nomeRaridade === 'Comum') {
      nomeDaRaridade.classList.add('comum');
      nomeDoTipo.classList.add('comum');
      pai?.classList.add('comum2')
    } else if (nomeRaridade === 'Rara') {
      nomeDaRaridade.classList.add('rara');
      nomeDoTipo.classList.add('rara');
      pai?.classList.add('rara2')
    } else if (nomeRaridade === 'Épica') {
      nomeDaRaridade.classList.add('épico');
      nomeDoTipo.classList.add('épico');
      pai?.classList.add('épico2')
    } else if (nomeRaridade === 'Lendária') {
      nomeDaRaridade.classList.add('lendário');
      nomeDoTipo.classList.add('lendário');
      pai?.classList.add('lendário2')
    }

    const descricao = document.createElement('p');
    descricao.textContent = descricaoCarta
    descricao.classList.add('descricaoCarta')

    buttonFecharModal.addEventListener('click', () =>{
      pai?.classList.remove('d-flex')
      overlay?.classList.remove('d-flex')

      pai?.classList.add('d-none')
      overlay?.classList.add('d-none')
    })

    divRaridadeTipo.append(nomeDaRaridade, nomeDoTipo)

    divElement.append(buttonFecharModal, nomeDaCarta, divRaridadeTipo, descricao)
  
    if (pai) {
      pai.textContent = ''
      pai.appendChild(divElement);
    } else {
      console.error("Elemento pai não encontrado.");
    }
    
  }
  
}

