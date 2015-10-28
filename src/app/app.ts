import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>

    <ul class="cats">
      <li *ng-for="#cat of cats"
          class="cats-cat"
          (click)="onSelect(cat)"
          [ng-class]="getSelectedClass(cat)">
        <span class="cats-cat-badge">{{cat.id}}</span> {{ cat.name }}
      </li>
    </ul>

    <div *ng-if="selectedCat">
      <h3>Your cat: {{ selectedCat.name }}</h3>
      Edit name: <input [(ng-model)]="selectedCat.name" placeholder="name" type="text" />
    </div>
  `,
  styles:[`
    .cats {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .cats-cat {
      display: inline-block;
      background: #eee;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      padding-right: 0.3em;
      cursor: pointer;
    }
    .cats-cat.mod-selected {
      background: #000;
      color: white;
    }
    .cats-cat-badge {
      display: inline-block;
      background: grey;
      color: white;
      padding: 0.2em 0.3em;
    }
  `],
  directives: [ FORM_DIRECTIVES, CORE_DIRECTIVES  ]
})

class AppComponent {
  public title = 'Roster of Cats';
  public cats = CATS;
  public cat = {
    id: 1,
    name: 'Grumpy'
  };

  public selectedCat: Cat;

  onSelect(cat: Cat){ this.selectedCat = cat; }

  getSelectedClass(cat: Cat){ return { 'mod-selected': cat === this.selectedCat } }
};

class Cat {
  id: number;
  name: string;
};

var CATS: Cat[] = [
  { "id": 10, "name": "Grumpy" },
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
]

bootstrap(AppComponent);