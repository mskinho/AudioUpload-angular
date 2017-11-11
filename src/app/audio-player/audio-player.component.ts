import { Component, OnInit, Input , AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';
import * as howler from 'howler';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit, OnDestroy{
  audio: Howl;
  playerStateIcon = 'play_arrow';
  @Input() audioSrc: string;

  constructor() {
  }


  ngOnInit() {
    if(this.audio){
      this.audio.stop();
    }
    this.audio = new Howl({
      src: [this.audioSrc], // load audio source from input
      preload: false,
      html5: true
    });
  }

  ngOnDestroy() {
    if (this.audio){
    this.audio.stop();
    }
   }




    play() {
     if (!this.audio.playing()) {
     this.audio.stop().play();
     this.playerStateIcon = 'pause';
     }
     else{
     this.pause();
    }
    }

    pause() {
      this.audio.pause();
      this.playerStateIcon = 'play_arrow';
    }

}
