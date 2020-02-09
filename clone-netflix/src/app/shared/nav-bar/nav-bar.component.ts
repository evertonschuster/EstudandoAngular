import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input() opened = false;

    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    constructor() {

    }

    ngOnInit(): void {
    }

    toggle() {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
    }
}