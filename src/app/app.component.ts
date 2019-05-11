import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Team';
  maxNumberOfPlayers = 0;
  numberOfPlayers = 1;
  players = [];

  cols: any[];
  teams: any[];

  onPlayersChange() {
    this.maxNumberOfPlayers = this.players.length;
    this.numberOfPlayers = this.numberOfPlayers;
  }

  onGenerateTeam() {    
    this.teams = this.randomSort([...this.players]).chunk(this.numberOfPlayers);

    this.cols = [];
    this.teams.forEach((team, index) => this.cols.push({label: "Team " + (index+1), index: index}));
  } 

  isMobile() {
    return window.innerWidth > 1200;
  }

  randomSort(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
