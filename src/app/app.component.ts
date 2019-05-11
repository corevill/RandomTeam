import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomTeam';
  maxTeams = 0;
  numberOfTeams = 1;
  players = [];

  onPlayersChange() {
    this.maxTeams = this.players.length;
    this.numberOfTeams = this.numberOfTeams;
  }
}
