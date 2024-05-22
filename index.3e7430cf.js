/*
 * Credit: AlexeyBoiko / DgrmJS
 * https://itnext.io/javascript-zoom-like-in-maps-for-svg-html-89c0df016d8d
 * https://github.com/AlexeyBoiko/DgrmJS/blob/e6d6a13c6294e79058f605ff1609c3f08ee5cf27/src/diagram-extensions/scale-feature.js
 */ /* global SVGTransform */ function $696041bd1b84be8f$var$first(iterable, filter) {
    for (const el of iterable){
        if (!filter || filter(el)) return el;
    }
    return null;
}
function $696041bd1b84be8f$export$5506cdffa4707d37(svgEl, position, svg) {
    $696041bd1b84be8f$var$ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_TRANSLATE, svg).setTranslate(position.x, position.y);
}
/**
  * @param {SVGGraphicsElement} svgEl
  * @returns { {x: number, y: number} }
  */ function $696041bd1b84be8f$export$31d524b4cdd8591b(svgEl) {
    const tr = $696041bd1b84be8f$var$first(svgEl.transform.baseVal, (tt)=>tt.type === SVGTransform.SVG_TRANSFORM_TRANSLATE);
    return tr ? {
        x: tr.matrix.e,
        y: tr.matrix.f
    } : {
        x: 0,
        y: 0
    };
}
function $696041bd1b84be8f$var$ensureTransform(svgEl, transform, svg) {
    let tr = $696041bd1b84be8f$var$first(svgEl.transform.baseVal, (tt)=>tt.type === transform);
    if (!tr) {
        tr = (svgEl.ownerSVGElement || svg).createSVGTransform();
        svgEl.transform.baseVal.appendItem(tr);
    }
    return tr;
}
/**
  * @param {SVGGraphicsElement} svgEl
  * @param {Point} fixedPoint
  *                this point will not change position while scale
  * @param {number} scale
  * @param {number} nextScale
  */ function $696041bd1b84be8f$export$22a28e658597b9b4(svgEl, fixedPoint, scale, nextScale) {
    const position = $696041bd1b84be8f$export$31d524b4cdd8591b(svgEl);
    $696041bd1b84be8f$export$5506cdffa4707d37(svgEl, {
        x: nextScale / scale * (position.x - fixedPoint.x) + fixedPoint.x,
        y: nextScale / scale * (position.y - fixedPoint.y) + fixedPoint.y
    });
    $696041bd1b84be8f$var$ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE).setScale(nextScale, nextScale);
}


function $7b5873fbd7a9e904$export$883528fb0afa7177(c) {
    return "#" + c.match(/\d+/g).map((x)=>(+x).toString(16).padStart(2, 0)).join("");
}


function $e58a49189aca5ad3$export$b63bc83cbdd7b6d5(el, callback) {
    const modalBody = el.querySelector(".modal_body");
    const modalContent = document.createElement("div");
    modalContent.className = "modal_content";
    callback().forEach((el)=>modalContent.appendChild(el));
    modalBody.appendChild(modalContent);
    const closeBtn = el.querySelector(".modal_close");
    closeBtn.addEventListener("click", ()=>$e58a49189aca5ad3$export$3f6fecd573f3fa48(el));
}
function $e58a49189aca5ad3$export$a7f6cffb6b8ba11c(el) {
    el.classList.add("modal-active");
}
function $e58a49189aca5ad3$export$3f6fecd573f3fa48(el) {
    el.classList.remove("modal-active");
}


const $2b64515903e36a6a$export$fe5ecf0dd837dea2 = [
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE8",
        description: "Flaga Wyspy Wniebowst\u0105pienia",
        name: "Wyspa Wniebowst\u0105pienia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE9",
        description: "Flaga Andory",
        name: "Andora"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEA",
        description: "Flaga Zjednoczonych Emirat\xf3w Arabskich",
        name: "Zjednoczone Emiraty Arabskie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEB",
        description: "Flaga Afganistanu",
        name: "Afganistan"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEC",
        description: "Flaga Antigui i Barbudy",
        name: "Antigua i Barbuda"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEE",
        description: "Flaga Anguilli",
        name: "Anguilla"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF1",
        description: "Flaga Albanii",
        name: "Albania"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF2",
        description: "Flaga Armenii",
        name: "Armenia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF4",
        description: "Flaga Angoli",
        name: "Angola"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF6",
        description: "Flaga Antarktyki",
        name: "Antarktyka"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF7",
        description: "Flaga Argentyny",
        name: "Argentyna"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF8",
        description: "Flaga Samoa Ameryka\u0144skiego",
        name: "Samoa Ameryka\u0144skie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF9",
        description: "Flaga Austrii",
        name: "Austria"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFA",
        description: "Flaga Australii",
        name: "Australia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFC",
        description: "Flaga Aruby",
        name: "Aruba"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFD",
        description: "Flaga Wysp Alandzkich",
        name: "Wyspy Alandzkie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFF",
        description: "Flaga Azerbejd\u017Canu",
        name: "Azerbejd\u017Cann"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE6",
        description: "Flaga Bo\u015Bni i Hercegowiny",
        name: "Bo\u015Bnia i Hercegowina"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE7",
        description: "Flaga Barbadosu",
        name: "Barbados"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE9",
        description: "Flaga Bangladeszu",
        name: "Bangladesz"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEA",
        description: "Flaga Belgii",
        name: "Belgia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEB",
        description: "Flaga Burkina Faso",
        name: "Burkina Faso"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEC",
        description: "Flaga Bu\u0142garii",
        name: "Bu\u0142garia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDED",
        description: "Flaga Bahrajnu",
        name: "Bahrajn"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEE",
        description: "Flaga Burundi",
        name: "Burundi"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEF",
        description: "Flaga Beninu",
        name: "Benin"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF1",
        description: "Flaga Saint-Barth\xe9lemy",
        name: "Saint-Barth\xe9lemy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF2",
        description: "Flaga Bermud\xf3w",
        name: "Bermudy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF3",
        description: "Flaga Brunei",
        name: "Brunei"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF4",
        description: "Flaga Boliwii",
        name: "Boliwia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF6",
        description: "Flaga Bonaire",
        name: "Bonaire"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF7",
        description: "Flaga Brazylii",
        name: "Brazylia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF8",
        description: "Flaga Baham\xf3w",
        name: "Bahamy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF9",
        description: "Flaga Bhutanu",
        name: "Bhutan"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFB",
        description: "Flaga Wyspy Bouveta",
        name: "Wyspy Bouveta"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFC",
        description: "Flaga Botswany",
        name: "Botswana"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFE",
        description: "Flaga Bia\u0142orusi",
        name: "Bia\u0142oru\u015B"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFF",
        description: "Flaga Belize",
        name: "Belize"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE6",
        description: "Flaga Kanady",
        name: "Kanada"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE8",
        description: "Flaga Wysp Kokosowych",
        name: "Wyspy Kokosowe"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE9",
        description: "Flaga Demokratycznej Republiki Konga",
        name: "Demokratyczna Republika Konga"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEB",
        description: "Flaga Republiki \u015Arodkowoafryka\u0144skiej",
        name: "Republika \u015Arodkowoafryka\u0144ska"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEC",
        description: "Flaga Republiki Konga",
        name: "Republika Konga"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDED",
        description: "Flaga Szwajcarii",
        name: "Szwajcaria"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEE",
        description: "Flaga Wybrze\u017Ca Ko\u015Bci S\u0142oniowej",
        name: "Wybrze\u017Ce Ko\u015Bci S\u0142oniowej"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF0",
        description: "Flaga Wysp Cooka",
        name: "Wyspy Cooka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF1",
        description: "Flaga Chile",
        name: "Chile"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF2",
        description: "Flaga Kamerunu",
        name: "Kamerun"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF3",
        description: "Flaga Chin",
        name: "Chiny"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF4",
        description: "Flaga Kolumbii",
        name: "Kolumbia"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF5",
        description: "Flaga Wyspy Clippertona",
        name: "Wyspa Clippertona"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF7",
        description: "Flaga Kostaryki",
        name: "Kostaryka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFA",
        description: "Flaga Kuby",
        name: "Kuba"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFB",
        description: "Flaga Republiki Zielonego Przyl\u0105dka",
        name: "Republika Zielonego Przyl\u0105dka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFC",
        description: "Flaga Cura\xe7ao",
        name: "Cura\xe7ao"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFD",
        description: "Flaga Wyspy Bo\u017Cego Narodzenia",
        name: "Wyspa Bo\u017Cego Narodzenia"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFE",
        description: "Flaga Cypru",
        name: "Cypr"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFF",
        description: "Flaga Czech",
        name: "Czechy"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEA",
        description: "Flaga Niemiec",
        name: "Niemcy"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEC",
        description: "Flaga Diego Garcia",
        name: "Diego Garcia"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEF",
        description: "Flaga D\u017Cibuti",
        name: "D\u017Cibuti"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF0",
        description: "Flaga Danii",
        name: "Dania"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF2",
        description: "Flaga Dominiki",
        name: "Dominika"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF4",
        description: "Flaga Dominikany",
        name: "Dominikana"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDFF",
        description: "Flaga Algierii",
        name: "Algieria"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE6",
        description: "Flaga Ceuty i Melilli",
        name: "Ceuta i Melilla"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE8",
        description: "Flaga Ekwadoru",
        name: "Ekwador"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEA",
        description: "Flaga Estonii",
        name: "Estonia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEC",
        description: "Flaga Egiptu",
        name: "Egipt"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDED",
        description: "Flaga Sahary Zachodniej",
        name: "Sahara Zachodnia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF7",
        description: "Flaga Erytrei",
        name: "Erytrea"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF8",
        description: "Flaga Hiszpanii",
        name: "Hiszpania"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF9",
        description: "Flaga Etiopii",
        name: "Etiopia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDFA",
        description: "Flaga Unii Europejskiej",
        name: "Unia Europejska"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEE",
        description: "Flaga Finlandii",
        name: "Finlandia"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEF",
        description: "Flaga Fid\u017Ci",
        name: "Fid\u017Ci"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF0",
        description: "Flaga Falkland\xf3w",
        name: "Falklandy"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF2",
        description: "Flaga Mikronezji",
        name: "Mikronezja"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF4",
        description: "Flaga Wysp Owczych",
        name: "Wyspy Owcze"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF7",
        description: "Flaga Francji",
        name: "Francja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE6",
        description: "Flaga Gabonu",
        name: "Gabon"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE7",
        description: "Flaga Zjednoczonego Kr\xf3lestwa",
        name: "Wielka Brytania"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE9",
        description: "Flaga Grenady",
        name: "Grenada"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEA",
        description: "Flaga Gruzji",
        name: "Gruzja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEB",
        description: "Flaga Gujany Francuskiej",
        name: "Gujana Francuska"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEC",
        description: "Flaga Wyspy Guernsey",
        name: "Wyspa Guernsey"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDED",
        description: "Flaga Ghany",
        name: "Ghana"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEE",
        description: "Flaga Gibraltaru",
        name: "Gibraltar"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF1",
        description: "Flaga Grenlandii",
        name: "Grenlandia"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF2",
        description: "Flaga Gambii",
        name: "Gambia"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF3",
        description: "Flaga Gwinei",
        name: "Gwinea"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF5",
        description: "Flaga Gwadelupy",
        name: "Gwadelupa"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF6",
        description: "Flaga Gwinei R\xf3wnikowej",
        name: "Gwinea R\xf3wnikowa"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF7",
        description: "Flaga Grecji",
        name: "Grecja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF8",
        description: "Flaga Po\u0142udniowej Georgii i Po\u0142udniowych Wysp Sandwich",
        name: "Po\u0142udniowa Georgia i Po\u0142udniowe Wyspy Sandwich"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF9",
        description: "Flaga Gwatemali",
        name: "Gwatemala"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFA",
        description: "Flaga Guamu",
        name: "Guam"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFC",
        description: "Flaga Gwinei Bissau",
        name: "Gwinea Bissau"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFE",
        description: "Flaga Gujany",
        name: "Gujana"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF0",
        description: "Flaga Hongkongu",
        name: "Hongkong"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF2",
        description: "Flaga Wysp Heard i McDonalda",
        name: "Wyspy Heard i McDonald"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF3",
        description: "Flaga Hondurasu",
        name: "Honduras"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF7",
        description: "Flaga Chorwacji",
        name: "Chorwacja"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF9",
        description: "Flaga Haiti",
        name: "Haiti"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDFA",
        description: "Flaga W\u0119gier",
        name: "W\u0119gry"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE8",
        description: "Flaga Wysp Kanaryjskich",
        name: "Wyspy Kanaryjskie"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE9",
        description: "Flaga Indonezji",
        name: "Indonezja"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDEA",
        description: "Flaga Irlandii",
        name: "Irlandia"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF1",
        description: "Flaga Izraela",
        name: "Izrael"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF2",
        description: "Flaga Wyspy Man",
        name: "Wyspa Man"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF3",
        description: "Flaga Indii",
        name: "Indie"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF4",
        description: "Flaga Brytyjskiego Terytorium Oceanu Indyjskiego",
        name: "Brytyjskie Terytorium Oceanu Indyjskiego"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF6",
        description: "Flaga Iraku",
        name: "Irak"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF7",
        description: "Flaga Iranu",
        name: "Iran"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF8",
        description: "Flaga Islandii",
        name: "Islandia"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF9",
        description: "Flaga W\u0142och",
        name: "W\u0142ochy"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDEA",
        description: "Flaga Wyspy Jersey",
        name: "Wyspa Jersey"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF2",
        description: "Flaga Jamajki",
        name: "Jamajka"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF4",
        description: "Flaga Jordanii",
        name: "Jordania"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF5",
        description: "Flaga Japonii",
        name: "Japonia"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEA",
        description: "Flaga Kenii",
        name: "Kenia"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEC",
        description: "Flaga Kirgistanu",
        name: "Kirgistan"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDED",
        description: "Flaga Kambod\u017Cy",
        name: "Kambod\u017Ca"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEE",
        description: "Flaga Kiribati",
        name: "Kiribati"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF2",
        description: "Flaga Komor\xf3w",
        name: "Komory"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF3",
        description: "Flaga Saint Kitts i Nevis",
        name: "Saint Kitts i Nevis"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF5",
        description: "Flaga Korei P\xf3\u0142nocnej",
        name: "Korea P\xf3\u0142nocna"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF7",
        description: "Flaga Korei Po\u0142udniowej",
        name: "Korea Po\u0142udniowa"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFC",
        description: "Flaga Kuwejtu",
        name: "Kuwejt"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFE",
        description: "Flaga Kajman\xf3w",
        name: "Kajmany"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFF",
        description: "Flaga Kazachstanu",
        name: "Kazachstan"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE6",
        description: "Flaga Laosu",
        name: "Laos"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE7",
        description: "Flaga Libanu",
        name: "Liban"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE8",
        description: "Flaga Saint Lucia",
        name: "Saint Lucia"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDEE",
        description: "Flaga Liechtensteinu",
        name: "Liechtenstein"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF0",
        description: "Flaga Sri Lanki",
        name: "Sri Lanka"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF7",
        description: "Flaga Liberii",
        name: "Liberia"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF8",
        description: "Flaga Lesotho",
        name: "Lesotho"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF9",
        description: "Flaga Litwy",
        name: "Litwa"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFA",
        description: "Flaga Luksemburga",
        name: "Luksemburg"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFB",
        description: "Flaga \u0141otwy",
        name: "\u0141otwa"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFE",
        description: "Flaga Libii",
        name: "Libia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE6",
        description: "Flaga Maroka",
        name: "Maroko"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE8",
        description: "Flaga Monako",
        name: "Monako"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE9",
        description: "Flaga Mo\u0142dawii",
        name: "Mo\u0142dawia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEA",
        description: "Flaga Czarnog\xf3ry",
        name: "Czarnog\xf3ra"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEB",
        description: "Flaga Saint-Martin",
        name: "Saint-Martin"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEC",
        description: "Flaga Madagaskaru",
        name: "Madagaskar"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDED",
        description: "Flaga Wysp Marshalla",
        name: "Wysp Marshalla"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF0",
        description: "Flaga Macedonii P\xf3\u0142nocnej",
        name: "Macedonia P\xf3\u0142nocna"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF1",
        description: "Flaga Mali",
        name: "Mali"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF2",
        description: "Flaga Mjanmy (Birmy)",
        name: "Mjanma (Birma)"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF3",
        description: "Flaga Mongolii",
        name: "Mongolia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF4",
        description: "Flaga Makau",
        name: "Makau"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF5",
        description: "Flaga Marian\xf3w Po\u0301\u0142nocnych",
        name: "Mariany Po\u0301\u0142nocne"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF6",
        description: "Flaga Martyniki",
        name: "Martynika"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF7",
        description: "Flaga Mauretanii",
        name: "Mauretania"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF8",
        description: "Flaga Montserratu",
        name: "Montserrat"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF9",
        description: "Flaga Malty",
        name: "Malta"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFA",
        description: "Flaga Mauritiusa",
        name: "Mauritius"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFB",
        description: "Flaga Malediw\xf3w",
        name: "Malediwy"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFC",
        description: "Flaga Malawi",
        name: "Malawi"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFD",
        description: "Flaga Meksyku",
        name: "Meksyk"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFE",
        description: "Flaga Malezji",
        name: "Malezja"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFF",
        description: "Flaga Mozambiku",
        name: "Mozambik"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE6",
        description: "Flaga Namibii",
        name: "Namibia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE8",
        description: "Flaga Nowej Kaledonii",
        name: "Nowej Kaledonia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEA",
        description: "Flaga Nigru",
        name: "Niger"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEB",
        description: "Flaga Wyspy Norfolk",
        name: "Wyspa Norfolk"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEC",
        description: "Flaga Nigerii",
        name: "Nigeria"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEE",
        description: "Flaga Nikaragui",
        name: "Nikaragua"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF1",
        description: "Flaga Holandii",
        name: "Holandia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF4",
        description: "Flaga Norwegii",
        name: "Norwegia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF5",
        description: "Flaga Nepalu",
        name: "Nepal"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF7",
        description: "Flaga Nauru",
        name: "Nauru"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFA",
        description: "Flaga Niue",
        name: "Niue"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFF",
        description: "Flaga Nowej Zelandii",
        name: "Nowa Zelandia"
    },
    {
        emoji: "\uD83C\uDDF4\uD83C\uDDF2",
        description: "Flaga Omanu",
        name: "Oman"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDE6",
        description: "Flaga Panamy",
        name: "Panama"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEA",
        description: "Flaga Peru",
        name: "Peru"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEB",
        description: "Flaga Polinezji Francuskiej",
        name: "Polinezja Francuska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEC",
        description: "Flaga Papui-Nowej Gwinei",
        name: "Papua-Nowea Gwinea"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDED",
        description: "Flaga Filipin",
        name: "Filipiny"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF0",
        description: "Flaga Pakistanu",
        name: "Pakistan"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF1",
        description: "Flaga Polski",
        name: "Polska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF2",
        description: "Flaga Saint-Pierre i Miquelon",
        name: "Saint-Pierre i Miquelon"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF3",
        description: "Flaga Wyspy Pitcairn",
        name: "Wyspa Pitcairn"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF7",
        description: "Flaga Portoryko",
        name: "Portoryko"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF8",
        description: "Flaga Autonomii Palesty\u0144skiej",
        name: "Autonomia Palesty\u0144ska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF9",
        description: "Flaga Portugalii",
        name: "Portugalia"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFC",
        description: "Flaga Palau",
        name: "Palau"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFE",
        description: "Flaga Paragwaju",
        name: "Paragwaj"
    },
    {
        emoji: "\uD83C\uDDF6\uD83C\uDDE6",
        description: "Flaga Kataru",
        name: "Katar"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDEA",
        description: "Flaga Reunionu",
        name: "Reunion"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF4",
        description: "Flaga Rumunii",
        name: "Rumunia"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF8",
        description: "Flaga Serbii",
        name: "Serbia"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFA",
        description: "Flaga Rosji",
        name: "Rosja"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFC",
        description: "Flaga Rwandy",
        name: "Rwanda"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE6",
        description: "Flaga Arabii Saudyjskiej",
        name: "Arabia Saudyjska"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE7",
        description: "Flaga Wysp Salomona",
        name: "Wyspy Salomona"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE8",
        description: "Flaga Seszeli",
        name: "Seszele"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE9",
        description: "Flaga Sudanu",
        name: "Sudan"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEA",
        description: "Flaga Szwecji",
        name: "Szwecja"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEC",
        description: "Flaga Singapuru",
        name: "Singapur"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDED",
        description: "Flaga Wyspy \u015Awi\u0119tej Heleny",
        name: "Wyspy \u015Awi\u0119tej Heleny"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEE",
        description: "Flaga S\u0142owenii",
        name: "S\u0142owenia"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEF",
        description: "Flaga Wysp Svalbard i Jan Mayen",
        name: "Wyspy Svalbard i Jan Mayen"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF0",
        description: "Flaga S\u0142owacji",
        name: "S\u0142owacja"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF1",
        description: "Flaga Sierra Leone",
        name: "Sierra Leone"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF2",
        description: "Flaga San Marino",
        name: "San Marino"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF3",
        description: "Flaga Senegalu",
        name: "Senegal"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF4",
        description: "Flaga Somalii",
        name: "Somalia"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF7",
        description: "Flaga Surinamu",
        name: "Surinam"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF8",
        description: "Flaga Sudanu Po\u0142udniowego",
        name: "Sudan Po\u0142udniowy"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF9",
        description: "Flaga Wysp \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119cej",
        name: "Wyspa \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119ca"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFB",
        description: "Flaga Salwadoru",
        name: "Salwador"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFD",
        description: "Flaga Sint Maarten",
        name: "Sint Maarten"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFE",
        description: "Flaga Syrii",
        name: "Syria"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFF",
        description: "Flaga Eswatini",
        name: "Eswatini"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE6",
        description: "Flaga Tristan da Cunha",
        name: "Tristan da Cunha"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE8",
        description: "Flaga Wysp Turks i Caicos",
        name: "Wyspy Turks i Caicos"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE9",
        description: "Flaga Czadu",
        name: "Czad"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEB",
        description: "Flaga Francuskich Terytori\xf3w Po\u0142udniowych",
        name: "Francuskie Terytoria Po\u0142udniowe"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEC",
        description: "Flaga Togo",
        name: "Togo"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDED",
        description: "Flaga Tajlandii",
        name: "Tajlandia"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEF",
        description: "Flaga Tad\u017Cykistanu",
        name: "Tad\u017Cykistan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF0",
        description: "Flaga Tokelau",
        name: "Tokelau"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF1",
        description: "Flaga Timoru Wschodniego",
        name: "Timor Wschodni"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF2",
        description: "Flaga Turkmenistanu",
        name: "Turkmenistan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF3",
        description: "Flaga Tunezji",
        name: "Tunezja"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF4",
        description: "Flaga Tonga",
        name: "Tongo"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF7",
        description: "Flaga Turcji",
        name: "Turcja"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF9",
        description: "Flaga Trynidadu i Tobago",
        name: "Trynidad i Tobago"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFB",
        description: "Flaga Tuvalu",
        name: "Tuvalu"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFC",
        description: "Flaga Tajwanu",
        name: "Tajwan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFF",
        description: "Flaga Tanzanii",
        name: "Tanzania"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDE6",
        description: "Flaga Ukrainy",
        name: "Ukraina"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDEC",
        description: "Flaga Ugandy",
        name: "Uganda"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF2",
        description: "Flaga Dalekich Wysp Mniejszych Stan\xf3w Zjednoczonych",
        name: "Dalekie Wyspy Mniejsze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF3",
        description: "Flaga ONZ",
        name: "ONZ"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF8",
        description: "Flaga Stan\xf3w Zjednoczonych",
        name: "Stany Zjednoczone"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFE",
        description: "Flaga Urugwaju",
        name: "Urugwaj"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFF",
        description: "Flaga Uzbekistanu",
        name: "Uzbekistan"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE6",
        description: "Flaga Watykanu",
        name: "Watykan"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE8",
        description: "Flaga Saint Vincent i Grenadyn",
        name: "Saint Vincent i Grenadyn"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEA",
        description: "Flaga Wenezueli",
        name: "Wenezuela"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEC",
        description: "Flaga Brytyjskich Wysp Dziewiczych",
        name: "Brytyjskie Wyspy Dziewicze"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEE",
        description: "Flaga Wysp Dziewiczych Stan\xf3w Zjednoczonych",
        name: "Wyspy Dziewicze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDF3",
        description: "Flaga Wietnamu",
        name: "Wietnam"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDFA",
        description: "Flaga Vanuatu",
        name: "Vanuatu"
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDEB",
        description: "Flaga Wysp Wallis i Futuna",
        name: "Wyspy Wallis i Futuna"
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDF8",
        description: "Flaga Samoa",
        name: "Samoa"
    },
    {
        emoji: "\uD83C\uDDFD\uD83C\uDDF0",
        description: "Flaga Kosowa",
        name: "Kosowo"
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDEA",
        description: "Flaga Jemenu",
        name: "Jemen"
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDF9",
        description: "Flaga Majotty",
        name: "Majotta"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDE6",
        description: "Flaga Republiki Po\u0142udniowej Afryki",
        name: "Republika Po\u0142udniowej Afryki"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDF2",
        description: "Flaga Zambii",
        name: "Zambia"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDFC",
        description: "Flaga Zimbabwe",
        name: "Zimbabwe"
    }
];


const $56a0b18e519895ee$var$map = document.querySelector("svg");
const $56a0b18e519895ee$var$canvas = $56a0b18e519895ee$var$map.querySelector("#canvas");
const $56a0b18e519895ee$var$colorPicker = document.querySelector("#colorpicker");
const $56a0b18e519895ee$var$btnsMenu = document.querySelector(".menu-v");
const $56a0b18e519895ee$var$modal = document.querySelector(".modal");
const $56a0b18e519895ee$var$minZoom = 0.25;
const $56a0b18e519895ee$var$maxZoom = 4;
let $56a0b18e519895ee$var$scale = 1;
let $56a0b18e519895ee$var$state = {};
const $56a0b18e519895ee$var$handleKeyboard = (event)=>{
    if (event.target.tagName.toLowerCase() !== "input") {
        const position = (0, $696041bd1b84be8f$export$31d524b4cdd8591b)($56a0b18e519895ee$var$canvas);
        const key = event.key.toLowerCase();
        if (key === "arrowright" || key === "d") (0, $696041bd1b84be8f$export$5506cdffa4707d37)($56a0b18e519895ee$var$canvas, {
            x: position.x - 50,
            y: position.y
        });
        if (key === "arrowleft" || key === "a") (0, $696041bd1b84be8f$export$5506cdffa4707d37)($56a0b18e519895ee$var$canvas, {
            x: position.x + 50,
            y: position.y
        });
        if (key === "arrowup" || key === "w") (0, $696041bd1b84be8f$export$5506cdffa4707d37)($56a0b18e519895ee$var$canvas, {
            x: position.x,
            y: position.y + 50
        });
        if (key === "arrowdown" || key === "s") (0, $696041bd1b84be8f$export$5506cdffa4707d37)($56a0b18e519895ee$var$canvas, {
            x: position.x,
            y: position.y - 50
        });
    }
};
const $56a0b18e519895ee$var$setState = (item)=>{
    if (item) {
        const [key, value] = item;
        $56a0b18e519895ee$var$state[key] = value;
    }
    window.localStorage.setItem("mapState", JSON.stringify($56a0b18e519895ee$var$state));
};
const $56a0b18e519895ee$var$handleMouseWheel = (event)=>{
    event.preventDefault();
    // calc nextScale
    const delta = event.deltaY || event.deltaX;
    const scaleStep = Math.abs(delta) < 50 ? 0.05 // touchpad pitch
     : 0.25 // mouse wheel
    ;
    const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
    const nextScale = $56a0b18e519895ee$var$scale + scaleDelta // 'scale' is prev scale
    ;
    // calc fixedPoint
    const fixedPoint = {
        x: event.clientX,
        y: event.clientY
    };
    // scale
    // 'svgEl' is element to scale
    if (nextScale < $56a0b18e519895ee$var$minZoom || nextScale > $56a0b18e519895ee$var$maxZoom) return;
    (0, $696041bd1b84be8f$export$22a28e658597b9b4)($56a0b18e519895ee$var$canvas, fixedPoint, $56a0b18e519895ee$var$scale, nextScale);
    $56a0b18e519895ee$var$scale = nextScale;
};
const $56a0b18e519895ee$var$handleMapClick = (event)=>{
    const target = event.target;
    const color = $56a0b18e519895ee$var$colorPicker.value;
    if (target.id === "ocean") return;
    if (target.style.fill && (0, $7b5873fbd7a9e904$export$883528fb0afa7177)(target.style.fill) === color) {
        target.style.fill = "";
        delete $56a0b18e519895ee$var$state[target.id];
        $56a0b18e519895ee$var$setState();
    } else {
        target.style.fill = color;
        $56a0b18e519895ee$var$setState([
            target.id,
            color
        ]);
    }
};
const $56a0b18e519895ee$var$downloadMap = ()=>{
    /* global XMLSerializer */ const source = new XMLSerializer().serializeToString($56a0b18e519895ee$var$map);
    // convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "map.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
const $56a0b18e519895ee$var$resetMap = ()=>{
    for (const item of Object.keys($56a0b18e519895ee$var$state)){
        const el = document.querySelector(`#${item}`);
        if (el) el.style.fill = "";
    }
    $56a0b18e519895ee$var$state = {};
    $56a0b18e519895ee$var$setState();
};
const $56a0b18e519895ee$var$readState = ()=>{
    $56a0b18e519895ee$var$state = JSON.parse(window.localStorage.getItem("mapState")) || {};
    for (const item of Object.keys($56a0b18e519895ee$var$state)){
        const el = document.querySelector(`#${item}`);
        if (el) el.style.fill = $56a0b18e519895ee$var$state[item];
    }
};
const $56a0b18e519895ee$var$pickFlag = (event)=>{
    const target = event.target;
    if (target.className === "flag") {
        const picked = document.querySelector("#pickedFlag");
        picked.textContent = event.target.firstChild.textContent;
        picked.title = event.target.title;
        (0, $e58a49189aca5ad3$export$3f6fecd573f3fa48)($56a0b18e519895ee$var$modal);
    }
};
const $56a0b18e519895ee$var$sortedFlags = (0, $2b64515903e36a6a$export$fe5ecf0dd837dea2).sort((a, b)=>a.name.localeCompare(b.name));
const $56a0b18e519895ee$var$modalContent = ()=>{
    const elements = [];
    for (const item of $56a0b18e519895ee$var$sortedFlags){
        const a = document.createElement("a");
        a.className = "flag";
        a.title = item.description;
        a.tabIndex = 1;
        const flag = document.createElement("span");
        flag.textContent = item.emoji;
        flag.className = "flag_emoji";
        const desc = document.createElement("span");
        desc.textContent = item.name;
        desc.className = "flag_description";
        a.appendChild(flag);
        a.appendChild(desc);
        elements.push(a);
    }
    return elements;
};
(0, $e58a49189aca5ad3$export$b63bc83cbdd7b6d5)($56a0b18e519895ee$var$modal, $56a0b18e519895ee$var$modalContent);
document.addEventListener("DOMContentLoaded", $56a0b18e519895ee$var$readState);
document.addEventListener("keydown", $56a0b18e519895ee$var$handleKeyboard);
$56a0b18e519895ee$var$map.addEventListener("wheel", $56a0b18e519895ee$var$handleMouseWheel);
$56a0b18e519895ee$var$map.addEventListener("click", $56a0b18e519895ee$var$handleMapClick);
$56a0b18e519895ee$var$modal.addEventListener("click", $56a0b18e519895ee$var$pickFlag);
$56a0b18e519895ee$var$btnsMenu.addEventListener("click", (event)=>{
    const targetId = event.target.id;
    if (targetId === "menuBtn") (0, $e58a49189aca5ad3$export$a7f6cffb6b8ba11c)($56a0b18e519895ee$var$modal);
    if (targetId === "downloadBtn") $56a0b18e519895ee$var$downloadMap();
    if (targetId === "resetBtn") $56a0b18e519895ee$var$resetMap();
});


//# sourceMappingURL=index.3e7430cf.js.map
