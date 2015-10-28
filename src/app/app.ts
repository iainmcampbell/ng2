import {Component, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'app',
    template: '<h1>{{title}}</h1><h2>{{cat}}</h2>'
})

class AppComponent {

  public title = 'Roster of Cats';
  public cat = 'Grumpy';
}

bootstrap(AppComponent);