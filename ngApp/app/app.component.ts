import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: '/ngViews/template/',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    sorry="Sorry, You are not logged in";
}