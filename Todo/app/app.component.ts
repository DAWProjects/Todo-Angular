import { Component, OnInit, trigger, state, style, animate, transition,Pipe } from '@angular/core';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import './rxjs-operators';




@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls:['app.component.css'],
    templateUrl: 'app.component.html',
    directives: [MobileHideDirective],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})

export class AppComponent {
    title = 'TODO';
    constructor() {

    }
}