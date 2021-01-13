"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Url = require("url");
let adresse = 'http://localhost:8080/default.htm?jahr=2017&monat=february';
//Adresse parsen (umwandeln):
let q = Url.parse(adresse, true);
/*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
/*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
var qdata = q.query;
console.log(qdata.monat);
//# sourceMappingURL=bsp.js.map