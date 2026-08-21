
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4556"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4556"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("9SVRk", function(module, exports) {
module.exports = import("irRAI").then(()=>parcelRequire('cv8Zd'));

});

parcelRegister("5za13", function(module, exports) {
module.exports = import("89ZJL").then(()=>parcelRequire('1YoVT'));

});

parcelRegister("8ZbcJ", function(module, exports) {
module.exports = import("32lWK").then(()=>parcelRequire('kat7r'));

});

parcelRegister("gnBwW", function(module, exports) {
module.exports = import("gPO8F").then(()=>parcelRequire('6u1N0'));

});

parcelRegister("cJcpM", function(module, exports) {
module.exports = import("1llQ5").then(()=>parcelRequire('lPBb6'));

});

parcelRegister("fogC1", function(module, exports) {
module.exports = import("26qLl").then(()=>parcelRequire('578HV'));

});

parcelRegister("dvd5O", function(module, exports) {
module.exports = import("dxGrs").then(()=>parcelRequire('7niBi'));

});

parcelRegister("gw9lm", function(module, exports) {
module.exports = import("46MU4").then(()=>parcelRequire('1U3Uv'));

});

function $e58a49189aca5ad3$export$b63bc83cbdd7b6d5(el, callback) {
    const modalBody = el.querySelector('.modal_body');
    const modalContent = document.createElement('div');
    const modalContentItems = document.createElement('div');
    modalContent.className = 'modal_content';
    modalContentItems.className = 'modal_items';
    callback().forEach((el)=>modalContentItems.appendChild(el));
    modalContent.appendChild(modalContentItems);
    modalBody.appendChild(modalContent);
    const closeBtn = el.querySelector('.modal_close');
    closeBtn.addEventListener('click', ()=>$e58a49189aca5ad3$export$3f6fecd573f3fa48(el));
    el.addEventListener('click', (e)=>{
        if (e.target === el) $e58a49189aca5ad3$export$3f6fecd573f3fa48(el);
    });
}
function $e58a49189aca5ad3$export$a860ff97c8a19f69(el, callback, searchCallback) {
    $e58a49189aca5ad3$export$b63bc83cbdd7b6d5(el, callback);
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search';
    searchInput.classList.add('control', 'control-field', 'control-search');
    searchInput.addEventListener('input', searchCallback);
    el.querySelector('.modal_content').insertBefore(searchInput, el.querySelector('.modal_items'));
    el.addEventListener('close', ()=>$e58a49189aca5ad3$var$resetSearch(searchInput));
}
function $e58a49189aca5ad3$export$a7f6cffb6b8ba11c(el) {
    el.showModal();
}
function $e58a49189aca5ad3$export$3f6fecd573f3fa48(el) {
    el.close();
}
function $e58a49189aca5ad3$var$resetSearch(searchInput) {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
}


const $2b64515903e36a6a$export$fe5ecf0dd837dea2 = [
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE8",
        description: "Flaga Wyspy Wniebowst\u0105pienia",
        name: "Wyspa Wniebowst\u0105pienia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE9",
        description: 'Flaga Andory',
        name: 'Andora'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEA",
        description: "Flaga Zjednoczonych Emirat\xf3w Arabskich",
        name: 'Zjednoczone Emiraty Arabskie'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEB",
        description: 'Flaga Afganistanu',
        name: 'Afganistan'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEC",
        description: 'Flaga Antigui i Barbudy',
        name: 'Antigua i Barbuda'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEE",
        description: 'Flaga Anguilli',
        name: 'Anguilla'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF1",
        description: 'Flaga Albanii',
        name: 'Albania'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF2",
        description: 'Flaga Armenii',
        name: 'Armenia'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF4",
        description: 'Flaga Angoli',
        name: 'Angola'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF6",
        description: 'Flaga Antarktyki',
        name: 'Antarktyka'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF7",
        description: 'Flaga Argentyny',
        name: 'Argentyna'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF8",
        description: "Flaga Samoa Ameryka\u0144skiego",
        name: "Samoa Ameryka\u0144skie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF9",
        description: 'Flaga Austrii',
        name: 'Austria'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFA",
        description: 'Flaga Australii',
        name: 'Australia'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFC",
        description: 'Flaga Aruby',
        name: 'Aruba'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFD",
        description: 'Flaga Wysp Alandzkich',
        name: 'Wyspy Alandzkie'
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFF",
        description: "Flaga Azerbejd\u017Canu",
        name: "Azerbejd\u017Can"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE6",
        description: "Flaga Bo\u015Bni i Hercegowiny",
        name: "Bo\u015Bnia i Hercegowina"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE7",
        description: 'Flaga Barbadosu',
        name: 'Barbados'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE9",
        description: 'Flaga Bangladeszu',
        name: 'Bangladesz'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEA",
        description: 'Flaga Belgii',
        name: 'Belgia'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEB",
        description: 'Flaga Burkina Faso',
        name: 'Burkina Faso'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEC",
        description: "Flaga Bu\u0142garii",
        name: "Bu\u0142garia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDED",
        description: 'Flaga Bahrajnu',
        name: 'Bahrajn'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEE",
        description: 'Flaga Burundi',
        name: 'Burundi'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEF",
        description: 'Flaga Beninu',
        name: 'Benin'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF1",
        description: "Flaga Saint-Barth\xe9lemy",
        name: "Saint-Barth\xe9lemy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF2",
        description: "Flaga Bermud\xf3w",
        name: 'Bermudy'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF3",
        description: 'Flaga Brunei',
        name: 'Brunei'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF4",
        description: 'Flaga Boliwii',
        name: 'Boliwia'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF6",
        description: 'Flaga Bonaire',
        name: 'Bonaire'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF7",
        description: 'Flaga Brazylii',
        name: 'Brazylia'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF8",
        description: "Flaga Baham\xf3w",
        name: 'Bahamy'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF9",
        description: 'Flaga Bhutanu',
        name: 'Bhutan'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFB",
        description: 'Flaga Wyspy Bouveta',
        name: 'Wyspa Bouveta'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFC",
        description: 'Flaga Botswany',
        name: 'Botswana'
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFE",
        description: "Flaga Bia\u0142orusi",
        name: "Bia\u0142oru\u015B"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFF",
        description: 'Flaga Belize',
        name: 'Belize'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE6",
        description: 'Flaga Kanady',
        name: 'Kanada'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE8",
        description: 'Flaga Wysp Kokosowych',
        name: 'Wyspy Kokosowe'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE9",
        description: 'Flaga Demokratycznej Republiki Konga',
        name: 'Demokratyczna Republika Konga'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEB",
        description: "Flaga Republiki \u015Arodkowoafryka\u0144skiej",
        name: "Republika \u015Arodkowoafryka\u0144ska"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEC",
        description: 'Flaga Republiki Konga',
        name: 'Republika Konga'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDED",
        description: 'Flaga Szwajcarii',
        name: 'Szwajcaria'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEE",
        description: "Flaga Wybrze\u017Ca Ko\u015Bci S\u0142oniowej",
        name: "Wybrze\u017Ce Ko\u015Bci S\u0142oniowej"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF0",
        description: 'Flaga Wysp Cooka',
        name: 'Wyspy Cooka'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF1",
        description: 'Flaga Chile',
        name: 'Chile'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF2",
        description: 'Flaga Kamerunu',
        name: 'Kamerun'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF3",
        description: 'Flaga Chin',
        name: 'Chiny'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF4",
        description: 'Flaga Kolumbii',
        name: 'Kolumbia'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF5",
        description: 'Flaga Wyspy Clippertona',
        name: 'Wyspa Clippertona'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF7",
        description: 'Flaga Kostaryki',
        name: 'Kostaryka'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFA",
        description: 'Flaga Kuby',
        name: 'Kuba'
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
        description: 'Flaga Cypru',
        name: 'Cypr'
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFF",
        description: 'Flaga Czech',
        name: 'Czechy'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEA",
        description: 'Flaga Niemiec',
        name: 'Niemcy'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEC",
        description: 'Flaga Diego Garcia',
        name: 'Diego Garcia'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEF",
        description: "Flaga D\u017Cibuti",
        name: "D\u017Cibuti"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF0",
        description: 'Flaga Danii',
        name: 'Dania'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF2",
        description: 'Flaga Dominiki',
        name: 'Dominika'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF4",
        description: 'Flaga Dominikany',
        name: 'Dominikana'
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDFF",
        description: 'Flaga Algierii',
        name: 'Algieria'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE6",
        description: 'Flaga Ceuty i Melilli',
        name: 'Ceuta i Melilla'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE8",
        description: 'Flaga Ekwadoru',
        name: 'Ekwador'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEA",
        description: 'Flaga Estonii',
        name: 'Estonia'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEC",
        description: 'Flaga Egiptu',
        name: 'Egipt'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDED",
        description: 'Flaga Sahary Zachodniej',
        name: 'Sahara Zachodnia'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF7",
        description: 'Flaga Erytrei',
        name: 'Erytrea'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF8",
        description: 'Flaga Hiszpanii',
        name: 'Hiszpania'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF9",
        description: 'Flaga Etiopii',
        name: 'Etiopia'
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDFA",
        description: 'Flaga Unii Europejskiej',
        name: 'Unia Europejska'
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEE",
        description: 'Flaga Finlandii',
        name: 'Finlandia'
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEF",
        description: "Flaga Fid\u017Ci",
        name: "Fid\u017Ci"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF0",
        description: "Flaga Falkland\xf3w",
        name: 'Falklandy'
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF2",
        description: 'Flaga Mikronezji',
        name: 'Mikronezja'
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF4",
        description: 'Flaga Wysp Owczych',
        name: 'Wyspy Owcze'
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF7",
        description: 'Flaga Francji',
        name: 'Francja'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE6",
        description: 'Flaga Gabonu',
        name: 'Gabon'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE7",
        description: "Flaga Zjednoczonego Kr\xf3lestwa",
        name: 'Wielka Brytania'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE9",
        description: 'Flaga Grenady',
        name: 'Grenada'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEA",
        description: 'Flaga Gruzji',
        name: 'Gruzja'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEB",
        description: 'Flaga Gujany Francuskiej',
        name: 'Gujana Francuska'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEC",
        description: 'Flaga Wyspy Guernsey',
        name: 'Wyspa Guernsey'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDED",
        description: 'Flaga Ghany',
        name: 'Ghana'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEE",
        description: 'Flaga Gibraltaru',
        name: 'Gibraltar'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF1",
        description: 'Flaga Grenlandii',
        name: 'Grenlandia'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF2",
        description: 'Flaga Gambii',
        name: 'Gambia'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF3",
        description: 'Flaga Gwinei',
        name: 'Gwinea'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF5",
        description: 'Flaga Gwadelupy',
        name: 'Gwadelupa'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF6",
        description: "Flaga Gwinei R\xf3wnikowej",
        name: "Gwinea R\xf3wnikowa"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF7",
        description: 'Flaga Grecji',
        name: 'Grecja'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF8",
        description: "Flaga Po\u0142udniowej Georgii i Po\u0142udniowych Wysp Sandwich",
        name: "Po\u0142udniowa Georgia i Po\u0142udniowe Wyspy Sandwich"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF9",
        description: 'Flaga Gwatemali',
        name: 'Gwatemala'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFA",
        description: 'Flaga Guamu',
        name: 'Guam'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFC",
        description: 'Flaga Gwinei Bissau',
        name: 'Gwinea Bissau'
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFE",
        description: 'Flaga Gujany',
        name: 'Gujana'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF0",
        description: 'Flaga Hongkongu',
        name: 'Hongkong'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF2",
        description: 'Flaga Wysp Heard i McDonalda',
        name: 'Wyspy Heard i McDonald'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF3",
        description: 'Flaga Hondurasu',
        name: 'Honduras'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF7",
        description: 'Flaga Chorwacji',
        name: 'Chorwacja'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF9",
        description: 'Flaga Haiti',
        name: 'Haiti'
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDFA",
        description: "Flaga W\u0119gier",
        name: "W\u0119gry"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE8",
        description: 'Flaga Wysp Kanaryjskich',
        name: 'Wyspy Kanaryjskie'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE9",
        description: 'Flaga Indonezji',
        name: 'Indonezja'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDEA",
        description: 'Flaga Irlandii',
        name: 'Irlandia'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF1",
        description: 'Flaga Izraela',
        name: 'Izrael'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF2",
        description: 'Flaga Wyspy Man',
        name: 'Wyspa Man'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF3",
        description: 'Flaga Indii',
        name: 'Indie'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF4",
        description: 'Flaga Brytyjskiego Terytorium Oceanu Indyjskiego',
        name: 'Brytyjskie Terytorium Oceanu Indyjskiego'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF6",
        description: 'Flaga Iraku',
        name: 'Irak'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF7",
        description: 'Flaga Iranu',
        name: 'Iran'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF8",
        description: 'Flaga Islandii',
        name: 'Islandia'
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF9",
        description: "Flaga W\u0142och",
        name: "W\u0142ochy"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDEA",
        description: 'Flaga Wyspy Jersey',
        name: 'Wyspa Jersey'
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF2",
        description: 'Flaga Jamajki',
        name: 'Jamajka'
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF4",
        description: 'Flaga Jordanii',
        name: 'Jordania'
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF5",
        description: 'Flaga Japonii',
        name: 'Japonia'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEA",
        description: 'Flaga Kenii',
        name: 'Kenia'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEC",
        description: 'Flaga Kirgistanu',
        name: 'Kirgistan'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDED",
        description: "Flaga Kambod\u017Cy",
        name: "Kambod\u017Ca"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEE",
        description: 'Flaga Kiribati',
        name: 'Kiribati'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF2",
        description: "Flaga Komor\xf3w",
        name: 'Komory'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF3",
        description: 'Flaga Saint Kitts i Nevis',
        name: 'Saint Kitts i Nevis'
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
        description: 'Flaga Kuwejtu',
        name: 'Kuwejt'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFE",
        description: "Flaga Kajman\xf3w",
        name: 'Kajmany'
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFF",
        description: 'Flaga Kazachstanu',
        name: 'Kazachstan'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE6",
        description: 'Flaga Laosu',
        name: 'Laos'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE7",
        description: 'Flaga Libanu',
        name: 'Liban'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE8",
        description: 'Flaga Saint Lucia',
        name: 'Saint Lucia'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDEE",
        description: 'Flaga Liechtensteinu',
        name: 'Liechtenstein'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF0",
        description: 'Flaga Sri Lanki',
        name: 'Sri Lanka'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF7",
        description: 'Flaga Liberii',
        name: 'Liberia'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF8",
        description: 'Flaga Lesotho',
        name: 'Lesotho'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF9",
        description: 'Flaga Litwy',
        name: 'Litwa'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFA",
        description: 'Flaga Luksemburga',
        name: 'Luksemburg'
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFB",
        description: "Flaga \u0141otwy",
        name: "\u0141otwa"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFE",
        description: 'Flaga Libii',
        name: 'Libia'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE6",
        description: 'Flaga Maroka',
        name: 'Maroko'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE8",
        description: 'Flaga Monako',
        name: 'Monako'
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
        description: 'Flaga Saint-Martin',
        name: 'Saint-Martin'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEC",
        description: 'Flaga Madagaskaru',
        name: 'Madagaskar'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDED",
        description: 'Flaga Wysp Marshalla',
        name: 'Wyspy Marshalla'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF0",
        description: "Flaga Macedonii P\xf3\u0142nocnej",
        name: "Macedonia P\xf3\u0142nocna"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF1",
        description: 'Flaga Mali',
        name: 'Mali'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF2",
        description: 'Flaga Mjanmy (Birmy)',
        name: 'Mjanma (Birma)'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF3",
        description: 'Flaga Mongolii',
        name: 'Mongolia'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF4",
        description: 'Flaga Makau',
        name: 'Makau'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF5",
        description: "Flaga Marian\xf3w Po\u0301\u0142nocnych",
        name: "Mariany Po\u0301\u0142nocne"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF6",
        description: 'Flaga Martyniki',
        name: 'Martynika'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF7",
        description: 'Flaga Mauretanii',
        name: 'Mauretania'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF8",
        description: 'Flaga Montserratu',
        name: 'Montserrat'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF9",
        description: 'Flaga Malty',
        name: 'Malta'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFA",
        description: 'Flaga Mauritiusa',
        name: 'Mauritius'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFB",
        description: "Flaga Malediw\xf3w",
        name: 'Malediwy'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFC",
        description: 'Flaga Malawi',
        name: 'Malawi'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFD",
        description: 'Flaga Meksyku',
        name: 'Meksyk'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFE",
        description: 'Flaga Malezji',
        name: 'Malezja'
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFF",
        description: 'Flaga Mozambiku',
        name: 'Mozambik'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE6",
        description: 'Flaga Namibii',
        name: 'Namibia'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE8",
        description: 'Flaga Nowej Kaledonii',
        name: 'Nowa Kaledonia'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEA",
        description: 'Flaga Nigru',
        name: 'Niger'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEB",
        description: 'Flaga Wyspy Norfolk',
        name: 'Wyspa Norfolk'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEC",
        description: 'Flaga Nigerii',
        name: 'Nigeria'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEE",
        description: 'Flaga Nikaragui',
        name: 'Nikaragua'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF1",
        description: 'Flaga Holandii',
        name: 'Holandia'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF4",
        description: 'Flaga Norwegii',
        name: 'Norwegia'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF5",
        description: 'Flaga Nepalu',
        name: 'Nepal'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF7",
        description: 'Flaga Nauru',
        name: 'Nauru'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFA",
        description: 'Flaga Niue',
        name: 'Niue'
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFF",
        description: 'Flaga Nowej Zelandii',
        name: 'Nowa Zelandia'
    },
    {
        emoji: "\uD83C\uDDF4\uD83C\uDDF2",
        description: 'Flaga Omanu',
        name: 'Oman'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDE6",
        description: 'Flaga Panamy',
        name: 'Panama'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEA",
        description: 'Flaga Peru',
        name: 'Peru'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEB",
        description: 'Flaga Polinezji Francuskiej',
        name: 'Polinezja Francuska'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEC",
        description: 'Flaga Papui-Nowej Gwinei',
        name: 'Papua-Nowa Gwinea'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDED",
        description: 'Flaga Filipin',
        name: 'Filipiny'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF0",
        description: 'Flaga Pakistanu',
        name: 'Pakistan'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF1",
        description: 'Flaga Polski',
        name: 'Polska'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF2",
        description: 'Flaga Saint-Pierre i Miquelon',
        name: 'Saint-Pierre i Miquelon'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF3",
        description: 'Flaga Wyspy Pitcairn',
        name: 'Wyspa Pitcairn'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF7",
        description: 'Flaga Portoryko',
        name: 'Portoryko'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF8",
        description: "Flaga Autonomii Palesty\u0144skiej",
        name: "Autonomia Palesty\u0144ska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF9",
        description: 'Flaga Portugalii',
        name: 'Portugalia'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFC",
        description: 'Flaga Palau',
        name: 'Palau'
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFE",
        description: 'Flaga Paragwaju',
        name: 'Paragwaj'
    },
    {
        emoji: "\uD83C\uDDF6\uD83C\uDDE6",
        description: 'Flaga Kataru',
        name: 'Katar'
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDEA",
        description: 'Flaga Reunionu',
        name: 'Reunion'
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF4",
        description: 'Flaga Rumunii',
        name: 'Rumunia'
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF8",
        description: 'Flaga Serbii',
        name: 'Serbia'
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFA",
        description: 'Flaga Rosji',
        name: 'Rosja'
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFC",
        description: 'Flaga Rwandy',
        name: 'Rwanda'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE6",
        description: 'Flaga Arabii Saudyjskiej',
        name: 'Arabia Saudyjska'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE7",
        description: 'Flaga Wysp Salomona',
        name: 'Wyspy Salomona'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE8",
        description: 'Flaga Seszeli',
        name: 'Seszele'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE9",
        description: 'Flaga Sudanu',
        name: 'Sudan'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEA",
        description: 'Flaga Szwecji',
        name: 'Szwecja'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEC",
        description: 'Flaga Singapuru',
        name: 'Singapur'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDED",
        description: "Flaga Wyspy \u015Awi\u0119tej Heleny",
        name: "Wyspa \u015Awi\u0119tej Heleny"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEE",
        description: "Flaga S\u0142owenii",
        name: "S\u0142owenia"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEF",
        description: 'Flaga Wysp Svalbard i Jan Mayen',
        name: 'Wyspy Svalbard i Jan Mayen'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF0",
        description: "Flaga S\u0142owacji",
        name: "S\u0142owacja"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF1",
        description: 'Flaga Sierra Leone',
        name: 'Sierra Leone'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF2",
        description: 'Flaga San Marino',
        name: 'San Marino'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF3",
        description: 'Flaga Senegalu',
        name: 'Senegal'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF4",
        description: 'Flaga Somalii',
        name: 'Somalia'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF7",
        description: 'Flaga Surinamu',
        name: 'Surinam'
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
        description: 'Flaga Salwadoru',
        name: 'Salwador'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFD",
        description: 'Flaga Sint Maarten',
        name: 'Sint Maarten'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFE",
        description: 'Flaga Syrii',
        name: 'Syria'
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFF",
        description: 'Flaga Eswatini',
        name: 'Eswatini'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE6",
        description: 'Flaga Tristan da Cunha',
        name: 'Tristan da Cunha'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE8",
        description: 'Flaga Wysp Turks i Caicos',
        name: 'Wyspy Turks i Caicos'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE9",
        description: 'Flaga Czadu',
        name: 'Czad'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEB",
        description: "Flaga Francuskich Terytori\xf3w Po\u0142udniowych",
        name: "Francuskie Terytoria Po\u0142udniowe"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEC",
        description: 'Flaga Togo',
        name: 'Togo'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDED",
        description: 'Flaga Tajlandii',
        name: 'Tajlandia'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEF",
        description: "Flaga Tad\u017Cykistanu",
        name: "Tad\u017Cykistan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF0",
        description: 'Flaga Tokelau',
        name: 'Tokelau'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF1",
        description: 'Flaga Timoru Wschodniego',
        name: 'Timor Wschodni'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF2",
        description: 'Flaga Turkmenistanu',
        name: 'Turkmenistan'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF3",
        description: 'Flaga Tunezji',
        name: 'Tunezja'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF4",
        description: 'Flaga Tonga',
        name: 'Tonga'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF7",
        description: 'Flaga Turcji',
        name: 'Turcja'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF9",
        description: 'Flaga Trynidadu i Tobago',
        name: 'Trynidad i Tobago'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFB",
        description: 'Flaga Tuvalu',
        name: 'Tuvalu'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFC",
        description: 'Flaga Tajwanu',
        name: 'Tajwan'
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFF",
        description: 'Flaga Tanzanii',
        name: 'Tanzania'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDE6",
        description: 'Flaga Ukrainy',
        name: 'Ukraina'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDEC",
        description: 'Flaga Ugandy',
        name: 'Uganda'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF2",
        description: "Flaga Dalekich Wysp Mniejszych Stan\xf3w Zjednoczonych",
        name: "Dalekie Wyspy Mniejsze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF3",
        description: 'Flaga ONZ',
        name: 'ONZ'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF8",
        description: "Flaga Stan\xf3w Zjednoczonych",
        name: 'Stany Zjednoczone'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFE",
        description: 'Flaga Urugwaju',
        name: 'Urugwaj'
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFF",
        description: 'Flaga Uzbekistanu',
        name: 'Uzbekistan'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE6",
        description: 'Flaga Watykanu',
        name: 'Watykan'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE8",
        description: 'Flaga Saint Vincent i Grenadyn',
        name: 'Saint Vincent i Grenadyn'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEA",
        description: 'Flaga Wenezueli',
        name: 'Wenezuela'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEC",
        description: 'Flaga Brytyjskich Wysp Dziewiczych',
        name: 'Brytyjskie Wyspy Dziewicze'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEE",
        description: "Flaga Wysp Dziewiczych Stan\xf3w Zjednoczonych",
        name: "Wyspy Dziewicze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDF3",
        description: 'Flaga Wietnamu',
        name: 'Wietnam'
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDFA",
        description: 'Flaga Vanuatu',
        name: 'Vanuatu'
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDEB",
        description: 'Flaga Wysp Wallis i Futuna',
        name: 'Wyspy Wallis i Futuna'
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDF8",
        description: 'Flaga Samoa',
        name: 'Samoa'
    },
    {
        emoji: "\uD83C\uDDFD\uD83C\uDDF0",
        description: 'Flaga Kosowa',
        name: 'Kosowo'
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDEA",
        description: 'Flaga Jemenu',
        name: 'Jemen'
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDF9",
        description: 'Flaga Majotty',
        name: 'Majotta'
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDE6",
        description: "Flaga Republiki Po\u0142udniowej Afryki",
        name: "Republika Po\u0142udniowej Afryki"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDF2",
        description: 'Flaga Zambii',
        name: 'Zambia'
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDFC",
        description: 'Flaga Zimbabwe',
        name: 'Zimbabwe'
    }
];


let $c94cd653c1ae6b76$var$modal = null;
const $c94cd653c1ae6b76$var$pickFlag = (event)=>{
    const flag = event.target.closest('.flag');
    if (flag) {
        const picked = document.querySelector('#pickedFlag');
        picked.textContent = flag.firstChild.textContent;
        picked.title = flag.title;
        (0, $e58a49189aca5ad3$export$3f6fecd573f3fa48)($c94cd653c1ae6b76$var$modal);
    }
};
const $c94cd653c1ae6b76$var$sortedFlags = [
    ...(0, $2b64515903e36a6a$export$fe5ecf0dd837dea2)
].sort((a, b)=>a.name.localeCompare(b.name));
const $c94cd653c1ae6b76$var$modalContent = ()=>{
    const elements = [];
    for (const item of $c94cd653c1ae6b76$var$sortedFlags){
        const a = document.createElement('a');
        a.className = 'flag';
        a.title = item.description;
        a.tabIndex = 1;
        const flag = document.createElement('span');
        flag.textContent = item.emoji;
        flag.className = 'flag_emoji';
        const desc = document.createElement('span');
        desc.textContent = item.name;
        desc.className = 'flag_description';
        a.appendChild(flag);
        a.appendChild(desc);
        elements.push(a);
    }
    return elements;
};
const $c94cd653c1ae6b76$var$handleSearch = (event)=>{
    const searchValue = event.target.value.toLowerCase();
    const modalItems = $c94cd653c1ae6b76$var$modal.querySelectorAll('.modal_items .flag');
    modalItems.forEach((item)=>{
        const itemText = item.querySelector('.flag_description').textContent.toLowerCase();
        if (itemText.includes(searchValue)) item.classList.remove('hide');
        else item.classList.add('hide');
    });
};
const $c94cd653c1ae6b76$var$create = (el)=>{
    $c94cd653c1ae6b76$var$modal = el;
    (0, $e58a49189aca5ad3$export$a860ff97c8a19f69)(el, $c94cd653c1ae6b76$var$modalContent, $c94cd653c1ae6b76$var$handleSearch);
    $c94cd653c1ae6b76$var$modal.addEventListener('click', $c94cd653c1ae6b76$var$pickFlag);
};
const $c94cd653c1ae6b76$var$open = ()=>{
    (0, $e58a49189aca5ad3$export$a7f6cffb6b8ba11c)($c94cd653c1ae6b76$var$modal);
};
const $c94cd653c1ae6b76$var$modalSearch = {
    create: $c94cd653c1ae6b76$var$create,
    open: $c94cd653c1ae6b76$var$open
};
var $c94cd653c1ae6b76$export$2e2bcd8739ae039 = $c94cd653c1ae6b76$var$modalSearch;


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


/* global CSS */ 
function $09671b11e5fd9b2b$export$2748120a496adc8e(el) {
    if (el.dataset.stripeFor) return document.getElementById(el.dataset.stripeFor);
    return el;
}
function $09671b11e5fd9b2b$export$490b36de5521dfa6(el, color) {
    const original = $09671b11e5fd9b2b$export$2748120a496adc8e(el);
    const existing = original.nextElementSibling;
    if (existing && existing.dataset.stripeFor === original.id) existing.remove();
    if (original.style.fill && (0, $7b5873fbd7a9e904$export$883528fb0afa7177)(original.style.fill) === color) return;
    const patternId = $09671b11e5fd9b2b$var$getOrCreatePattern(color);
    const clone = original.cloneNode(false);
    clone.removeAttribute('id');
    clone.dataset.stripeFor = original.id;
    clone.dataset.stripeColor = color;
    clone.setAttribute('style', `fill: url(#${patternId})`);
    original.insertAdjacentElement('afterend', clone);
}
function $09671b11e5fd9b2b$export$c2e765a549b2cf24(el) {
    if (el.nextElementSibling?.dataset.stripeFor === el.id) el.nextElementSibling.remove();
}
function $09671b11e5fd9b2b$var$getOrCreatePattern(color) {
    const patternId = `stripes_${color.replace('#', '')}`;
    if (document.getElementById(patternId)) return patternId;
    const defs = document.getElementById('defs4915');
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    pattern.setAttribute('id', patternId);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('width', '20');
    pattern.setAttribute('height', '20');
    pattern.setAttribute('patternTransform', 'rotate(45)');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '10');
    line.setAttribute('y1', '0');
    line.setAttribute('x2', '10');
    line.setAttribute('y2', '20');
    line.style.stroke = color;
    line.style.strokeWidth = '10px';
    pattern.appendChild(line);
    defs.appendChild(pattern);
    return patternId;
}


function $7b5873fbd7a9e904$export$883528fb0afa7177(rgb) {
    const match = rgb?.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) return;
    return '#' + match.slice(1).map((x)=>Number(x).toString(16).padStart(2, '0')).join('');
}
function $7b5873fbd7a9e904$export$66eec673fb17698c(state, fill = true) {
    for (const item of state.keys){
        if (!item) continue;
        const el = document.querySelector(`#${CSS.escape(item)}`);
        if (!el) continue;
        const value = state.get(item);
        const [color, stripeColor] = Array.isArray(value) ? value : [
            value,
            null
        ];
        if (fill) {
            el.style.fill = color ?? '';
            if (stripeColor) (0, $09671b11e5fd9b2b$export$490b36de5521dfa6)(el, stripeColor);
        } else {
            el.style.fill = '';
            (0, $09671b11e5fd9b2b$export$c2e765a549b2cf24)(el);
        }
    }
}
function $7b5873fbd7a9e904$export$751816bfcb437aef(state) {
    $7b5873fbd7a9e904$export$66eec673fb17698c(state, false);
}



class $9d0b9414ff526d4c$export$11a6af20c28b5410 {
    #state = {};
    #maxSnapshotHistory = 25;
    #redoStack = [];
    #undoStack = [];
    #localStorageKeyName;
    constructor(localStorageKeyName){
        this.#localStorageKeyName = localStorageKeyName;
    }
    get keys() {
        return Object.keys(this.#state);
    }
    get canUndo() {
        return this.#undoStack.length > 0;
    }
    get canRedo() {
        return this.#redoStack.length > 0;
    }
    get(id) {
        return this.#state[id];
    }
    set(items) {
        if (items.length <= 0) return;
        this.#saveSnapshot();
        for (const { pathId: pathId, color: color, stripeColor: stripeColor } of items)this.#state[pathId] = stripeColor ? [
            color,
            stripeColor
        ] : color;
    }
    remove(items) {
        if (items.length <= 0) return;
        this.#saveSnapshot();
        for (const id of items)delete this.#state[id];
    }
    reset() {
        this.#saveSnapshot();
        this.#state = {};
    }
    undo() {
        if (this.#undoStack.length === 0) return;
        this.#redoStack.push({
            ...this.#state
        });
        this.#state = this.#undoStack.pop();
    }
    redo() {
        if (this.#redoStack.length === 0) return;
        this.#undoStack.push({
            ...this.#state
        });
        this.#state = this.#redoStack.pop();
    }
    load() {
        this.#state = JSON.parse(window.localStorage.getItem(this.#localStorageKeyName)) || {};
    }
    save() {
        window.localStorage.setItem(this.#localStorageKeyName, JSON.stringify(this.#state));
    }
    #saveSnapshot() {
        this.#undoStack.push({
            ...this.#state
        });
        if (this.#undoStack.length > this.#maxSnapshotHistory) this.#undoStack.shift();
        this.#redoStack.length = 0;
    }
}


const $23483fd903922e0d$var$app = {
    map: null,
    canvas: null,
    mapState: null
};
const $23483fd903922e0d$var$tools = {
    menu: null,
    colorPicker: null,
    colorPickMode: null
};
const $23483fd903922e0d$var$config = {
    minZoom: 0.25,
    maxZoom: 4,
    scale: 1,
    palette: [
        '#cfe7c6',
        '#eed2c8',
        '#f8f09b',
        '#f2bb94',
        '#a3b7da',
        '#eca2ca',
        '#99b6dd',
        '#db82c0',
        '#f3c271',
        '#decfaa',
        '#93c9c0',
        '#f0e7b5'
    ]
};
const $23483fd903922e0d$var$isInvalidElement = (target)=>target.id === 'ocean' || target.tagName !== 'path';
const $23483fd903922e0d$var$handleMouseWheel = (event)=>{
    event.preventDefault();
    // calc nextScale
    const delta = event.deltaY || event.deltaX;
    const scaleStep = Math.abs(delta) < 50 ? 0.05 // touchpad pitch
     : 0.25 // mouse wheel
    ;
    const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
    const nextScale = $23483fd903922e0d$var$config.scale + scaleDelta // 'scale' is prev scale
    ;
    // calc fixedPoint
    const fixedPoint = {
        x: event.clientX,
        y: event.clientY
    };
    // scale
    // 'svgEl' is element to scale
    if (nextScale < $23483fd903922e0d$var$config.minZoom || nextScale > $23483fd903922e0d$var$config.maxZoom) return;
    (0, $696041bd1b84be8f$export$22a28e658597b9b4)($23483fd903922e0d$var$app.canvas, fixedPoint, $23483fd903922e0d$var$config.scale, nextScale);
    $23483fd903922e0d$var$config.scale = nextScale;
};
const $23483fd903922e0d$var$handleMapClick = (event)=>{
    const target = event.target;
    if ($23483fd903922e0d$var$isInvalidElement(target)) return;
    const color = $23483fd903922e0d$var$tools.colorPicker.value;
    const isStripeClone = !!target.dataset.stripeColor;
    const isColorPickMode = $23483fd903922e0d$var$tools.colorPickMode.checked;
    const isStripesMode = $23483fd903922e0d$var$tools.stripesMode.checked;
    if (isColorPickMode && target.tagName === 'path') {
        $23483fd903922e0d$var$tools.colorPicker.value = isStripeClone ? target.dataset.stripeColor : (0, $7b5873fbd7a9e904$export$883528fb0afa7177)(target.style.fill);
        $23483fd903922e0d$var$tools.colorPickMode.click();
        return;
    }
    if (isStripeClone) {
        const og = (0, $09671b11e5fd9b2b$export$2748120a496adc8e)(target);
        if (!isStripesMode) {
            target.remove();
            og.style.fill = color;
            $23483fd903922e0d$var$app.mapState.set([
                {
                    pathId: og.id,
                    color: color
                }
            ]);
        } else if ((0, $7b5873fbd7a9e904$export$883528fb0afa7177)(og.style.fill) === color || target.dataset.stripeColor === color) {
            target.remove();
            og.style.fill ? $23483fd903922e0d$var$app.mapState.set([
                {
                    pathId: og.id,
                    color: og.style.fill
                }
            ]) : $23483fd903922e0d$var$app.mapState.remove([
                og.id
            ]);
        } else {
            (0, $09671b11e5fd9b2b$export$490b36de5521dfa6)(target, color);
            $23483fd903922e0d$var$app.mapState.set([
                {
                    pathId: og.id,
                    color: og.style.fill,
                    stripeColor: color
                }
            ]);
        }
    } else if ((0, $7b5873fbd7a9e904$export$883528fb0afa7177)(target.style.fill) === color) {
        target.style.fill = '';
        $23483fd903922e0d$var$app.mapState.remove([
            target.id
        ]);
    } else if (isStripesMode) {
        (0, $09671b11e5fd9b2b$export$490b36de5521dfa6)(target, color);
        $23483fd903922e0d$var$app.mapState.set([
            {
                pathId: target.id,
                color: target.style.fill,
                stripeColor: color
            }
        ]);
    } else {
        target.style.fill = color;
        $23483fd903922e0d$var$app.mapState.set([
            {
                pathId: target.id,
                color: color
            }
        ]);
    }
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$handleMapMousedown = (event)=>{
    if (event.button !== 0) return;
    let moved = false;
    const position = (0, $696041bd1b84be8f$export$31d524b4cdd8591b)($23483fd903922e0d$var$app.canvas);
    const currentCursor = $23483fd903922e0d$var$app.map.style.cursor;
    $23483fd903922e0d$var$app.map.style.cursor = 'move';
    $23483fd903922e0d$var$app.map.setPointerCapture(event.pointerId);
    const handleMapDrag = (e)=>{
        const dx = e.clientX - event.clientX;
        const dy = e.clientY - event.clientY;
        if (!moved && Math.abs(dx) < 3 && Math.abs(dy) < 3) return;
        moved = true;
        $23483fd903922e0d$var$app.canvas.style.pointerEvents = 'none';
        (0, $696041bd1b84be8f$export$5506cdffa4707d37)($23483fd903922e0d$var$app.canvas, {
            x: position.x + dx,
            y: position.y + dy
        });
    };
    $23483fd903922e0d$var$app.map.addEventListener('pointermove', handleMapDrag);
    $23483fd903922e0d$var$app.map.addEventListener('pointerup', (e)=>{
        $23483fd903922e0d$var$app.map.releasePointerCapture(e.pointerId);
        $23483fd903922e0d$var$app.map.removeEventListener('pointermove', handleMapDrag);
        $23483fd903922e0d$var$app.canvas.style.pointerEvents = '';
        $23483fd903922e0d$var$app.map.style.cursor = currentCursor;
        if (!moved) $23483fd903922e0d$var$handleMapClick(event);
    }, {
        once: true
    });
};
const $23483fd903922e0d$var$handleMapContextmenu = (event)=>{
    event.preventDefault();
    const target = event.target;
    if ($23483fd903922e0d$var$isInvalidElement(target) || $23483fd903922e0d$var$tools.colorPickMode.checked) return;
    const original = (0, $09671b11e5fd9b2b$export$2748120a496adc8e)(target);
    const siblings = Array.from(target.parentNode.childNodes).filter((el)=>!$23483fd903922e0d$var$isInvalidElement(el) && !el.classList.contains('landxx') && !el.dataset.stripeFor);
    if (original.style.fill) {
        const paths = [];
        for (const item of siblings){
            item.style.fill = '';
            (0, $09671b11e5fd9b2b$export$c2e765a549b2cf24)(item);
            paths.push(item.id);
        }
        $23483fd903922e0d$var$app.mapState.remove(paths);
    } else {
        const color = $23483fd903922e0d$var$tools.colorPicker.value;
        const paths = [];
        for (const item of siblings){
            item.style.fill = color;
            (0, $09671b11e5fd9b2b$export$c2e765a549b2cf24)(item);
            paths.push({
                pathId: item.id,
                color: color
            });
        }
        $23483fd903922e0d$var$app.mapState.set(paths);
    }
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$readState = ()=>{
    $23483fd903922e0d$var$app.mapState.load();
    (0, $7b5873fbd7a9e904$export$66eec673fb17698c)($23483fd903922e0d$var$app.mapState);
};
const $23483fd903922e0d$var$handleColorPickModeChange = ()=>{
    $23483fd903922e0d$var$app.map.style.cursor = $23483fd903922e0d$var$tools.colorPickMode.checked ? 'crosshair' : 'auto';
};
const $23483fd903922e0d$var$init = (conf)=>{
    if (!conf.el || !conf.elToolsMenu || !conf.localStorageKey) return;
    $23483fd903922e0d$var$app.map = conf.el;
    $23483fd903922e0d$var$app.canvas = conf.el.querySelector('#canvas');
    $23483fd903922e0d$var$app.mapState = new (0, $9d0b9414ff526d4c$export$11a6af20c28b5410)(conf.localStorageKey);
    $23483fd903922e0d$var$tools.menu = conf.elToolsMenu;
    $23483fd903922e0d$var$tools.colorPicker = conf.elToolsMenu.querySelector('#colorpicker');
    $23483fd903922e0d$var$tools.colorPickMode = conf.elToolsMenu.querySelector('#colorpickerMode');
    $23483fd903922e0d$var$tools.stripesMode = conf.elToolsMenu.querySelector('#stripesMode');
    $23483fd903922e0d$var$config.minZoom = conf.minZoom || $23483fd903922e0d$var$config.minZoom;
    $23483fd903922e0d$var$config.maxZoom = conf.maxZoom || $23483fd903922e0d$var$config.maxZoom;
    $23483fd903922e0d$var$config.scale = conf.scale || $23483fd903922e0d$var$config.scale;
    $23483fd903922e0d$var$config.palette = conf.palette || $23483fd903922e0d$var$config.palette;
    $23483fd903922e0d$var$app.map.addEventListener('wheel', $23483fd903922e0d$var$handleMouseWheel);
    $23483fd903922e0d$var$app.map.addEventListener('pointerdown', $23483fd903922e0d$var$handleMapMousedown);
    $23483fd903922e0d$var$app.map.addEventListener('contextmenu', $23483fd903922e0d$var$handleMapContextmenu);
    $23483fd903922e0d$var$tools.menu.addEventListener('click', (event)=>{
        const targetId = event.target.id;
        if (targetId === 'colorpicker' && $23483fd903922e0d$var$tools.colorPickMode.checked) $23483fd903922e0d$var$tools.colorPickMode.click();
    });
    $23483fd903922e0d$var$tools.colorPickMode.addEventListener('change', $23483fd903922e0d$var$handleColorPickModeChange);
    $23483fd903922e0d$var$readState();
    $23483fd903922e0d$var$handleColorPickModeChange();
};
const $23483fd903922e0d$var$setTheme = (value)=>{
    $23483fd903922e0d$var$app.map.dataset.mapTheme = value;
};
const $23483fd903922e0d$var$setBg = (value)=>{
    $23483fd903922e0d$var$app.map.dataset.mapBg = value;
};
const $23483fd903922e0d$var$toFileName = (name, ext)=>{
    const clean = name?.trim().replace(/[\\/:*?"<>|]/g, '').slice(0, 30);
    const fileName = clean || 'map';
    return `${fileName}.${ext}`;
};
const $23483fd903922e0d$var$downloadFile = (data, fileName)=>{
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([
        data
    ]));
    link.href = url;
    link.download = fileName;
    link.click();
    setTimeout(()=>URL.revokeObjectURL(url), 0);
};
const $23483fd903922e0d$var$saveToSvgFile = (name)=>{
    /* global XMLSerializer */ const source = new XMLSerializer().serializeToString($23483fd903922e0d$var$app.map);
    $23483fd903922e0d$var$downloadFile(`<?xml version="1.0" standalone="no"?>\r\n${source}`, $23483fd903922e0d$var$toFileName(name, 'svg'));
};
const $23483fd903922e0d$var$saveToJsonFile = (name)=>{
    const content = [];
    for (const item of $23483fd903922e0d$var$app.mapState.keys)content.push({
        pathId: item,
        color: $23483fd903922e0d$var$app.mapState.get(item)
    });
    $23483fd903922e0d$var$downloadFile(JSON.stringify(content), $23483fd903922e0d$var$toFileName(name, 'json'));
};
const $23483fd903922e0d$var$resetMap = ()=>{
    (0, $7b5873fbd7a9e904$export$751816bfcb437aef)($23483fd903922e0d$var$app.mapState);
    $23483fd903922e0d$var$app.mapState.reset();
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$colorMap = ()=>{
    const colors = $23483fd903922e0d$var$config.palette;
    const groups = Array.from($23483fd903922e0d$var$app.canvas.children).filter((element)=>element.tagName === 'g').map((element)=>element.querySelectorAll('path'));
    let index = Math.floor(Math.random() * colors.length);
    const paths = [];
    for (const group of groups){
        if (index > colors.length - 1) index = 0;
        if (group.length <= 1) continue;
        const color = colors[index];
        for (const path of group){
            if (path.classList.contains('landxx') || path.style.fill) continue;
            path.style.fill = color;
            paths.push({
                pathId: path.id,
                color: color
            });
        }
        index += 1;
    }
    $23483fd903922e0d$var$app.mapState.set(paths);
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$moveMap = (direction)=>{
    const position = (0, $696041bd1b84be8f$export$31d524b4cdd8591b)($23483fd903922e0d$var$app.canvas);
    const offset = 50;
    const pos = {
        x: position.x,
        y: position.y
    };
    switch(direction){
        case 'right':
            pos.x -= offset;
            break;
        case 'left':
            pos.x += offset;
            break;
        case 'up':
            pos.y += offset;
            break;
        case 'down':
            pos.y -= offset;
            break;
        default:
            break;
    }
    (0, $696041bd1b84be8f$export$5506cdffa4707d37)($23483fd903922e0d$var$app.canvas, pos);
};
const $23483fd903922e0d$var$setMap = (data)=>{
    $23483fd903922e0d$var$resetMap();
    $23483fd903922e0d$var$app.mapState.set(data);
    (0, $7b5873fbd7a9e904$export$66eec673fb17698c)($23483fd903922e0d$var$app.mapState);
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$stepHistory = (direction)=>{
    if (direction === 'prev' && !$23483fd903922e0d$var$app.mapState.canUndo) return;
    if (direction === 'next' && !$23483fd903922e0d$var$app.mapState.canRedo) return;
    (0, $7b5873fbd7a9e904$export$751816bfcb437aef)($23483fd903922e0d$var$app.mapState);
    if (direction === 'prev') $23483fd903922e0d$var$app.mapState.undo();
    if (direction === 'next') $23483fd903922e0d$var$app.mapState.redo();
    (0, $7b5873fbd7a9e904$export$66eec673fb17698c)($23483fd903922e0d$var$app.mapState);
    $23483fd903922e0d$var$app.mapState.save();
};
const $23483fd903922e0d$var$svgMap = {
    init: $23483fd903922e0d$var$init,
    setTheme: $23483fd903922e0d$var$setTheme,
    setBg: $23483fd903922e0d$var$setBg,
    saveToSvgFile: $23483fd903922e0d$var$saveToSvgFile,
    saveToJsonFile: $23483fd903922e0d$var$saveToJsonFile,
    resetMap: $23483fd903922e0d$var$resetMap,
    colorMap: $23483fd903922e0d$var$colorMap,
    moveMap: $23483fd903922e0d$var$moveMap,
    setMap: $23483fd903922e0d$var$setMap,
    stepHistory: $23483fd903922e0d$var$stepHistory
};
var $23483fd903922e0d$export$2e2bcd8739ae039 = $23483fd903922e0d$var$svgMap;


const $cc2a27c5cf7938c0$var$storageKey = 'mapSettings';
const $cc2a27c5cf7938c0$var$state = {
    'map-theme': 'default',
    'map-bg': 'light'
};
const $cc2a27c5cf7938c0$var$showClass = 'settings-panel_show';
let $cc2a27c5cf7938c0$var$panel = null;
let $cc2a27c5cf7938c0$var$handleChange = null;
let $cc2a27c5cf7938c0$var$lastFocused = null;
const $cc2a27c5cf7938c0$var$open = ()=>{
    $cc2a27c5cf7938c0$var$lastFocused = document.activeElement;
    $cc2a27c5cf7938c0$var$panel.classList.add($cc2a27c5cf7938c0$var$showClass);
    $cc2a27c5cf7938c0$var$panel.focus();
};
const $cc2a27c5cf7938c0$var$close = ()=>{
    const hadFocus = $cc2a27c5cf7938c0$var$panel.contains(document.activeElement);
    $cc2a27c5cf7938c0$var$panel.classList.remove($cc2a27c5cf7938c0$var$showClass);
    if (hadFocus && $cc2a27c5cf7938c0$var$lastFocused) $cc2a27c5cf7938c0$var$lastFocused.focus();
};
const $cc2a27c5cf7938c0$var$toggle = ()=>{
    if ($cc2a27c5cf7938c0$var$panel.classList.contains($cc2a27c5cf7938c0$var$showClass)) $cc2a27c5cf7938c0$var$close();
    else $cc2a27c5cf7938c0$var$open();
};
const $cc2a27c5cf7938c0$var$save = ()=>{
    window.localStorage.setItem($cc2a27c5cf7938c0$var$storageKey, JSON.stringify($cc2a27c5cf7938c0$var$state));
};
const $cc2a27c5cf7938c0$var$restore = ()=>{
    const stored = JSON.parse(window.localStorage.getItem($cc2a27c5cf7938c0$var$storageKey)) || {};
    for (const name of Object.keys($cc2a27c5cf7938c0$var$state)){
        const value = stored[name];
        const input = value && $cc2a27c5cf7938c0$var$panel.querySelector(`input[name="${name}"][value="${value}"]`);
        if (!input) continue;
        input.checked = true;
        $cc2a27c5cf7938c0$var$state[name] = value;
    }
};
const $cc2a27c5cf7938c0$var$handlePanelClick = (event)=>{
    if (event.target.id === 'settingsClose') $cc2a27c5cf7938c0$var$close();
};
const $cc2a27c5cf7938c0$var$handlePanelChange = (event)=>{
    const { name: name, value: value } = event.target;
    if (!(name in $cc2a27c5cf7938c0$var$state)) return;
    $cc2a27c5cf7938c0$var$state[name] = value;
    $cc2a27c5cf7938c0$var$save();
    $cc2a27c5cf7938c0$var$handleChange(name, value);
};
const $cc2a27c5cf7938c0$var$handleKeydown = (event)=>{
    if (event.key !== 'Escape' || !$cc2a27c5cf7938c0$var$panel.classList.contains($cc2a27c5cf7938c0$var$showClass) || document.querySelector('dialog[open]')) return;
    $cc2a27c5cf7938c0$var$close();
};
const $cc2a27c5cf7938c0$var$create = (el, conf)=>{
    $cc2a27c5cf7938c0$var$panel = el;
    $cc2a27c5cf7938c0$var$handleChange = conf.onChange;
    $cc2a27c5cf7938c0$var$panel.addEventListener('click', $cc2a27c5cf7938c0$var$handlePanelClick);
    $cc2a27c5cf7938c0$var$panel.addEventListener('change', $cc2a27c5cf7938c0$var$handlePanelChange);
    document.addEventListener('keydown', $cc2a27c5cf7938c0$var$handleKeydown);
    $cc2a27c5cf7938c0$var$restore();
    for (const [name, value] of Object.entries($cc2a27c5cf7938c0$var$state))$cc2a27c5cf7938c0$var$handleChange(name, value);
};
const $cc2a27c5cf7938c0$var$settings = {
    create: $cc2a27c5cf7938c0$var$create,
    toggle: $cc2a27c5cf7938c0$var$toggle
};
var $cc2a27c5cf7938c0$export$2e2bcd8739ae039 = $cc2a27c5cf7938c0$var$settings;


const $56a0b18e519895ee$var$btnsMenu = document.querySelector('.menu-v');
const $56a0b18e519895ee$var$filePicker = document.querySelector('#filePicker');
const $56a0b18e519895ee$var$presets = document.querySelector('#presets');
const $56a0b18e519895ee$var$pickedFlag = document.querySelector('#pickedFlag');
const $56a0b18e519895ee$var$mapName = document.querySelector('#mapName');
(0, $23483fd903922e0d$export$2e2bcd8739ae039).init({
    el: document.querySelector('svg'),
    elToolsMenu: document.querySelector('.menu-tools'),
    localStorageKey: 'mapState'
});
(0, $c94cd653c1ae6b76$export$2e2bcd8739ae039).create(document.querySelector('.modal'));
(0, $cc2a27c5cf7938c0$export$2e2bcd8739ae039).create(document.querySelector('#settingsPanel'), {
    onChange: (name, value)=>{
        if (name === 'map-theme') (0, $23483fd903922e0d$export$2e2bcd8739ae039).setTheme(value);
        if (name === 'map-bg') (0, $23483fd903922e0d$export$2e2bcd8739ae039).setBg(value);
    }
});
const $56a0b18e519895ee$var$handleKeyboard = (event)=>{
    if (!event.target.matches('input')) {
        const key = event.key.toLowerCase();
        if (key === 'arrowright' || key === 'd') (0, $23483fd903922e0d$export$2e2bcd8739ae039).moveMap('right');
        if (key === 'arrowleft' || key === 'a') (0, $23483fd903922e0d$export$2e2bcd8739ae039).moveMap('left');
        if (key === 'arrowup' || key === 'w') (0, $23483fd903922e0d$export$2e2bcd8739ae039).moveMap('up');
        if (key === 'arrowdown' || key === 's') (0, $23483fd903922e0d$export$2e2bcd8739ae039).moveMap('down');
        if (key === 'z' && event.ctrlKey) (0, $23483fd903922e0d$export$2e2bcd8739ae039).stepHistory('prev');
        if (key === 'y' && event.ctrlKey) (0, $23483fd903922e0d$export$2e2bcd8739ae039).stepHistory('next');
    }
};








const $56a0b18e519895ee$var$dataLoaders = {
    0: ()=>(parcelRequire("9SVRk")),
    1: ()=>(parcelRequire("5za13")),
    2: ()=>(parcelRequire("8ZbcJ")),
    3: ()=>(parcelRequire("gnBwW")),
    4: ()=>(parcelRequire("cJcpM")),
    5: ()=>(parcelRequire("fogC1")),
    6: ()=>(parcelRequire("dvd5O")),
    7: ()=>(parcelRequire("gw9lm"))
};
const $56a0b18e519895ee$var$handlePresetChange = async (event)=>{
    const loader = $56a0b18e519895ee$var$dataLoaders[event.target.value];
    if (!loader) return;
    const data = await loader();
    document.activeElement.blur();
    (0, $23483fd903922e0d$export$2e2bcd8739ae039).setMap(data);
};
const $56a0b18e519895ee$var$pickCustomFlag = (event)=>{
    const file = event.target.files[0];
    $56a0b18e519895ee$var$filePicker.value = '';
    const img = document.createElement('img');
    const revoke = ()=>URL.revokeObjectURL(img.src);
    img.alt = file.name;
    img.classList.add('flag_file');
    img.addEventListener('load', revoke, {
        once: true
    });
    img.addEventListener('error', ()=>{
        revoke();
        $56a0b18e519895ee$var$pickedFlag.replaceChildren();
        $56a0b18e519895ee$var$pickedFlag.title = '';
    }, {
        once: true
    });
    img.src = URL.createObjectURL(file);
    $56a0b18e519895ee$var$pickedFlag.replaceChildren(img);
    $56a0b18e519895ee$var$pickedFlag.title = file.name;
};
document.addEventListener('keydown', $56a0b18e519895ee$var$handleKeyboard);
$56a0b18e519895ee$var$filePicker.addEventListener('change', $56a0b18e519895ee$var$pickCustomFlag);
$56a0b18e519895ee$var$presets.addEventListener('change', $56a0b18e519895ee$var$handlePresetChange);
$56a0b18e519895ee$var$btnsMenu.addEventListener('click', (event)=>{
    const targetId = event.target.id;
    if (targetId === 'menuBtn') (0, $c94cd653c1ae6b76$export$2e2bcd8739ae039).open();
    if (targetId === 'downloadBtn') (0, $23483fd903922e0d$export$2e2bcd8739ae039).saveToSvgFile($56a0b18e519895ee$var$mapName.value);
    if (targetId === 'resetBtn') {
        (0, $23483fd903922e0d$export$2e2bcd8739ae039).resetMap();
        $56a0b18e519895ee$var$presets.value = '';
    }
    if (targetId === 'colorBtn') (0, $23483fd903922e0d$export$2e2bcd8739ae039).colorMap();
    if (targetId === 'saveBtn') (0, $23483fd903922e0d$export$2e2bcd8739ae039).saveToJsonFile($56a0b18e519895ee$var$mapName.value);
    if (targetId === 'settingsBtn') (0, $cc2a27c5cf7938c0$export$2e2bcd8739ae039).toggle();
});


//# sourceMappingURL=mapa.0f3bd895.js.map
