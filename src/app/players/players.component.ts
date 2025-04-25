import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsonData from '../../assets/data/players.json'

@Component({
  selector: 'app-players',
  imports: [
    CommonModule,
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players: any[] = jsonData.players;

}
