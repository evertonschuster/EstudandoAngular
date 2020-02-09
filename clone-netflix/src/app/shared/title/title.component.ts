import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  // Decorator para receber paramentros pelo elemento pai
  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  stopVideo() {
    this.trailer.nativeElement.pause();
    this.trailer.nativeElement.currentTime = 0;
  }

  playVideo() {
    this.trailer.nativeElement.play();
  }

  getMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound() {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}
