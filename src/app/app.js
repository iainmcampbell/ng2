var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Roster of Cats';
        this.cats = CATS;
        this.cat = {
            id: 1,
            name: 'Grumpy'
        };
    }
    AppComponent.prototype.onSelect = function (cat) { this.selectedCat = cat; };
    AppComponent.prototype.getSelectedClass = function (cat) { return { 'mod-selected': cat === this.selectedCat }; };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: "\n    <h1>{{title}}</h1>\n\n    <ul class=\"cats\">\n      <li *ng-for=\"#cat of cats\"\n          class=\"cats-cat\"\n          (click)=\"onSelect(cat)\"\n          [ng-class]=\"getSelectedClass(cat)\">\n        <span class=\"cats-cat-badge\">{{cat.id}}</span> {{ cat.name }}\n      </li>\n    </ul>\n\n    <div *ng-if=\"selectedCat\">\n      <h3>Your cat: {{ selectedCat.name }}</h3>\n      Edit name: <input [(ng-model)]=\"selectedCat.name\" placeholder=\"name\" type=\"text\" />\n    </div>\n  ",
            styles: ["\n    .cats {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n    .cats-cat {\n      display: inline-block;\n      background: #eee;\n      margin-bottom: 0.5em;\n      margin-right: 0.5em;\n      padding-right: 0.3em;\n      cursor: pointer;\n    }\n    .cats-cat.mod-selected {\n      background: #000;\n      color: white;\n    }\n    .cats-cat-badge {\n      display: inline-block;\n      background: grey;\n      color: white;\n      padding: 0.2em 0.3em;\n    }\n  "],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
;
var Cat = (function () {
    function Cat() {
    }
    return Cat;
})();
;
var CATS = [
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
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map