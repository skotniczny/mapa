const FLAGS = [
  { emoji: '🇦🇨', description: 'Flaga Wyspy Wniebowstąpienia', name: 'Wyspa Wniebowstąpienia' },
  { emoji: '🇦🇩', description: 'Flaga Andory', name: 'Andora' },
  { emoji: '🇦🇪', description: 'Flaga Zjednoczonych Emiratów Arabskich', name: 'Zjednoczone Emiraty Arabskie' },
  { emoji: '🇦🇫', description: 'Flaga Afganistanu', name: 'Afganistan' },
  { emoji: '🇦🇬', description: 'Flaga Antigui i Barbudy', name: 'Antigua i Barbuda' },
  { emoji: '🇦🇮', description: 'Flaga Anguilli', name: 'Anguilla' },
  { emoji: '🇦🇱', description: 'Flaga Albanii', name: 'Albania' },
  { emoji: '🇦🇲', description: 'Flaga Armenii', name: 'Armenia' },
  { emoji: '🇦🇴', description: 'Flaga Angoli', name: 'Angola' },
  { emoji: '🇦🇶', description: 'Flaga Antarktyki', name: 'Antarktyka' },
  { emoji: '🇦🇷', description: 'Flaga Argentyny', name: 'Argentyna' },
  { emoji: '🇦🇸', description: 'Flaga Samoa Amerykańskiego', name: 'Samoa Amerykańskie' },
  { emoji: '🇦🇹', description: 'Flaga Austrii', name: 'Austria' },
  { emoji: '🇦🇺', description: 'Flaga Australii', name: 'Australia' },
  { emoji: '🇦🇼', description: 'Flaga Aruby', name: 'Aruba' },
  { emoji: '🇦🇽', description: 'Flaga Wysp Alandzkich', name: 'Wyspy Alandzkie' },
  { emoji: '🇦🇿', description: 'Flaga Azerbejdżanu', name: 'Azerbejdżann' },
  { emoji: '🇧🇦', description: 'Flaga Bośni i Hercegowiny', name: 'Bośnia i Hercegowina' },
  { emoji: '🇧🇧', description: 'Flaga Barbadosu', name: 'Barbados' },
  { emoji: '🇧🇩', description: 'Flaga Bangladeszu', name: 'Bangladesz' },
  { emoji: '🇧🇪', description: 'Flaga Belgii', name: 'Belgia' },
  { emoji: '🇧🇫', description: 'Flaga Burkina Faso', name: 'Burkina Faso' },
  { emoji: '🇧🇬', description: 'Flaga Bułgarii', name: 'Bułgaria' },
  { emoji: '🇧🇭', description: 'Flaga Bahrajnu', name: 'Bahrajn' },
  { emoji: '🇧🇮', description: 'Flaga Burundi', name: 'Burundi' },
  { emoji: '🇧🇯', description: 'Flaga Beninu', name: 'Benin' },
  { emoji: '🇧🇱', description: 'Flaga Saint-Barthélemy', name: 'Saint-Barthélemy' },
  { emoji: '🇧🇲', description: 'Flaga Bermudów', name: 'Bermudy' },
  { emoji: '🇧🇳', description: 'Flaga Brunei', name: 'Brunei' },
  { emoji: '🇧🇴', description: 'Flaga Boliwii', name: 'Boliwia' },
  { emoji: '🇧🇶', description: 'Flaga Bonaire', name: 'Bonaire' },
  { emoji: '🇧🇷', description: 'Flaga Brazylii', name: 'Brazylia' },
  { emoji: '🇧🇸', description: 'Flaga Bahamów', name: 'Bahamy' },
  { emoji: '🇧🇹', description: 'Flaga Bhutanu', name: 'Bhutan' },
  { emoji: '🇧🇻', description: 'Flaga Wyspy Bouveta', name: 'Wyspy Bouveta' },
  { emoji: '🇧🇼', description: 'Flaga Botswany', name: 'Botswana' },
  { emoji: '🇧🇾', description: 'Flaga Białorusi', name: 'Białoruś' },
  { emoji: '🇧🇿', description: 'Flaga Belize', name: 'Belize' },
  { emoji: '🇨🇦', description: 'Flaga Kanady', name: 'Kanada' },
  { emoji: '🇨🇨', description: 'Flaga Wysp Kokosowych', name: 'Wyspy Kokosowe' },
  { emoji: '🇨🇩', description: 'Flaga Demokratycznej Republiki Konga', name: 'Demokratyczna Republika Konga' },
  { emoji: '🇨🇫', description: 'Flaga Republiki Środkowoafrykańskiej', name: 'Republika Środkowoafrykańska' },
  { emoji: '🇨🇬', description: 'Flaga Republiki Konga', name: 'Republika Konga' },
  { emoji: '🇨🇭', description: 'Flaga Szwajcarii', name: 'Szwajcaria' },
  { emoji: '🇨🇮', description: 'Flaga Wybrzeża Kości Słoniowej', name: 'Wybrzeże Kości Słoniowej' },
  { emoji: '🇨🇰', description: 'Flaga Wysp Cooka', name: 'Wyspy Cooka' },
  { emoji: '🇨🇱', description: 'Flaga Chile', name: 'Chile' },
  { emoji: '🇨🇲', description: 'Flaga Kamerunu', name: 'Kamerun' },
  { emoji: '🇨🇳', description: 'Flaga Chin', name: 'Chiny' },
  { emoji: '🇨🇴', description: 'Flaga Kolumbii', name: 'Kolumbia' },
  { emoji: '🇨🇵', description: 'Flaga Wyspy Clippertona', name: 'Wyspa Clippertona' },
  { emoji: '🇨🇷', description: 'Flaga Kostaryki', name: 'Kostaryka' },
  { emoji: '🇨🇺', description: 'Flaga Kuby', name: 'Kuba' },
  { emoji: '🇨🇻', description: 'Flaga Republiki Zielonego Przylądka', name: 'Republika Zielonego Przylądka' },
  { emoji: '🇨🇼', description: 'Flaga Curaçao', name: 'Curaçao' },
  { emoji: '🇨🇽', description: 'Flaga Wyspy Bożego Narodzenia', name: 'Wyspa Bożego Narodzenia' },
  { emoji: '🇨🇾', description: 'Flaga Cypru', name: 'Cypr' },
  { emoji: '🇨🇿', description: 'Flaga Czech', name: 'Czechy' },
  { emoji: '🇩🇪', description: 'Flaga Niemiec', name: 'Niemcy' },
  { emoji: '🇩🇬', description: 'Flaga Diego Garcia', name: 'Diego Garcia' },
  { emoji: '🇩🇯', description: 'Flaga Dżibuti', name: 'Dżibuti' },
  { emoji: '🇩🇰', description: 'Flaga Danii', name: 'Dania' },
  { emoji: '🇩🇲', description: 'Flaga Dominiki', name: 'Dominika' },
  { emoji: '🇩🇴', description: 'Flaga Dominikany', name: 'Dominikana' },
  { emoji: '🇩🇿', description: 'Flaga Algierii', name: 'Algieria' },
  { emoji: '🇪🇦', description: 'Flaga Ceuty i Melilli', name: 'Ceuta i Melilla' },
  { emoji: '🇪🇨', description: 'Flaga Ekwadoru', name: 'Ekwador' },
  { emoji: '🇪🇪', description: 'Flaga Estonii', name: 'Estonia' },
  { emoji: '🇪🇬', description: 'Flaga Egiptu', name: 'Egipt' },
  { emoji: '🇪🇭', description: 'Flaga Sahary Zachodniej', name: 'Sahara Zachodnia' },
  { emoji: '🇪🇷', description: 'Flaga Erytrei', name: 'Erytrea' },
  { emoji: '🇪🇸', description: 'Flaga Hiszpanii', name: 'Hiszpania' },
  { emoji: '🇪🇹', description: 'Flaga Etiopii', name: 'Etiopia' },
  { emoji: '🇪🇺', description: 'Flaga Unii Europejskiej', name: 'Unia Europejska' },
  { emoji: '🇫🇮', description: 'Flaga Finlandii', name: 'Finlandia' },
  { emoji: '🇫🇯', description: 'Flaga Fidżi', name: 'Fidżi' },
  { emoji: '🇫🇰', description: 'Flaga Falklandów', name: 'Falklandy' },
  { emoji: '🇫🇲', description: 'Flaga Mikronezji', name: 'Mikronezja' },
  { emoji: '🇫🇴', description: 'Flaga Wysp Owczych', name: 'Wyspy Owcze' },
  { emoji: '🇫🇷', description: 'Flaga Francji', name: 'Francja' },
  { emoji: '🇬🇦', description: 'Flaga Gabonu', name: 'Gabon' },
  { emoji: '🇬🇧', description: 'Flaga Zjednoczonego Królestwa', name: 'Wielka Brytania' },
  { emoji: '🇬🇩', description: 'Flaga Grenady', name: 'Grenada' },
  { emoji: '🇬🇪', description: 'Flaga Gruzji', name: 'Gruzja' },
  { emoji: '🇬🇫', description: 'Flaga Gujany Francuskiej', name: 'Gujana Francuska' },
  { emoji: '🇬🇬', description: 'Flaga Wyspy Guernsey', name: 'Wyspa Guernsey' },
  { emoji: '🇬🇭', description: 'Flaga Ghany', name: 'Ghana' },
  { emoji: '🇬🇮', description: 'Flaga Gibraltaru', name: 'Gibraltar' },
  { emoji: '🇬🇱', description: 'Flaga Grenlandii', name: 'Grenlandia' },
  { emoji: '🇬🇲', description: 'Flaga Gambii', name: 'Gambia' },
  { emoji: '🇬🇳', description: 'Flaga Gwinei', name: 'Gwinea' },
  { emoji: '🇬🇵', description: 'Flaga Gwadelupy', name: 'Gwadelupa' },
  { emoji: '🇬🇶', description: 'Flaga Gwinei Równikowej', name: 'Gwinea Równikowa' },
  { emoji: '🇬🇷', description: 'Flaga Grecji', name: 'Grecja' },
  { emoji: '🇬🇸', description: 'Flaga Południowej Georgii i Południowych Wysp Sandwich', name: 'Południowa Georgia i Południowe Wyspy Sandwich' },
  { emoji: '🇬🇹', description: 'Flaga Gwatemali', name: 'Gwatemala' },
  { emoji: '🇬🇺', description: 'Flaga Guamu', name: 'Guam' },
  { emoji: '🇬🇼', description: 'Flaga Gwinei Bissau', name: 'Gwinea Bissau' },
  { emoji: '🇬🇾', description: 'Flaga Gujany', name: 'Gujana' },
  { emoji: '🇭🇰', description: 'Flaga Hongkongu', name: 'Hongkong' },
  { emoji: '🇭🇲', description: 'Flaga Wysp Heard i McDonalda', name: 'Wyspy Heard i McDonald' },
  { emoji: '🇭🇳', description: 'Flaga Hondurasu', name: 'Honduras' },
  { emoji: '🇭🇷', description: 'Flaga Chorwacji', name: 'Chorwacja' },
  { emoji: '🇭🇹', description: 'Flaga Haiti', name: 'Haiti' },
  { emoji: '🇭🇺', description: 'Flaga Węgier', name: 'Węgry' },
  { emoji: '🇮🇨', description: 'Flaga Wysp Kanaryjskich', name: 'Wyspy Kanaryjskie' },
  { emoji: '🇮🇩', description: 'Flaga Indonezji', name: 'Indonezja' },
  { emoji: '🇮🇪', description: 'Flaga Irlandii', name: 'Irlandia' },
  { emoji: '🇮🇱', description: 'Flaga Izraela', name: 'Izrael' },
  { emoji: '🇮🇲', description: 'Flaga Wyspy Man', name: 'Wyspa Man' },
  { emoji: '🇮🇳', description: 'Flaga Indii', name: 'Indie' },
  { emoji: '🇮🇴', description: 'Flaga Brytyjskiego Terytorium Oceanu Indyjskiego', name: 'Brytyjskie Terytorium Oceanu Indyjskiego' },
  { emoji: '🇮🇶', description: 'Flaga Iraku', name: 'Irak' },
  { emoji: '🇮🇷', description: 'Flaga Iranu', name: 'Iran' },
  { emoji: '🇮🇸', description: 'Flaga Islandii', name: 'Islandia' },
  { emoji: '🇮🇹', description: 'Flaga Włoch', name: 'Włochy' },
  { emoji: '🇯🇪', description: 'Flaga Wyspy Jersey', name: 'Wyspa Jersey' },
  { emoji: '🇯🇲', description: 'Flaga Jamajki', name: 'Jamajka' },
  { emoji: '🇯🇴', description: 'Flaga Jordanii', name: 'Jordania' },
  { emoji: '🇯🇵', description: 'Flaga Japonii', name: 'Japonia' },
  { emoji: '🇰🇪', description: 'Flaga Kenii', name: 'Kenia' },
  { emoji: '🇰🇬', description: 'Flaga Kirgistanu', name: 'Kirgistan' },
  { emoji: '🇰🇭', description: 'Flaga Kambodży', name: 'Kambodża' },
  { emoji: '🇰🇮', description: 'Flaga Kiribati', name: 'Kiribati' },
  { emoji: '🇰🇲', description: 'Flaga Komorów', name: 'Komory' },
  { emoji: '🇰🇳', description: 'Flaga Saint Kitts i Nevis', name: 'Saint Kitts i Nevis' },
  { emoji: '🇰🇵', description: 'Flaga Korei Północnej', name: 'Korea Północna' },
  { emoji: '🇰🇷', description: 'Flaga Korei Południowej', name: 'Korea Południowa' },
  { emoji: '🇰🇼', description: 'Flaga Kuwejtu', name: 'Kuwejt' },
  { emoji: '🇰🇾', description: 'Flaga Kajmanów', name: 'Kajmany' },
  { emoji: '🇰🇿', description: 'Flaga Kazachstanu', name: 'Kazachstan' },
  { emoji: '🇱🇦', description: 'Flaga Laosu', name: 'Laos' },
  { emoji: '🇱🇧', description: 'Flaga Libanu', name: 'Liban' },
  { emoji: '🇱🇨', description: 'Flaga Saint Lucia', name: 'Saint Lucia' },
  { emoji: '🇱🇮', description: 'Flaga Liechtensteinu', name: 'Liechtenstein' },
  { emoji: '🇱🇰', description: 'Flaga Sri Lanki', name: 'Sri Lanka' },
  { emoji: '🇱🇷', description: 'Flaga Liberii', name: 'Liberia' },
  { emoji: '🇱🇸', description: 'Flaga Lesotho', name: 'Lesotho' },
  { emoji: '🇱🇹', description: 'Flaga Litwy', name: 'Litwa' },
  { emoji: '🇱🇺', description: 'Flaga Luksemburga', name: 'Luksemburg' },
  { emoji: '🇱🇻', description: 'Flaga Łotwy', name: 'Łotwa' },
  { emoji: '🇱🇾', description: 'Flaga Libii', name: 'Libia' },
  { emoji: '🇲🇦', description: 'Flaga Maroka', name: 'Maroko' },
  { emoji: '🇲🇨', description: 'Flaga Monako', name: 'Monako' },
  { emoji: '🇲🇩', description: 'Flaga Mołdawii', name: 'Mołdawia' },
  { emoji: '🇲🇪', description: 'Flaga Czarnogóry', name: 'Czarnogóra' },
  { emoji: '🇲🇫', description: 'Flaga Saint-Martin', name: 'Saint-Martin' },
  { emoji: '🇲🇬', description: 'Flaga Madagaskaru', name: 'Madagaskar' },
  { emoji: '🇲🇭', description: 'Flaga Wysp Marshalla', name: 'Wysp Marshalla' },
  { emoji: '🇲🇰', description: 'Flaga Macedonii Północnej', name: 'Macedonia Północna' },
  { emoji: '🇲🇱', description: 'Flaga Mali', name: 'Mali' },
  { emoji: '🇲🇲', description: 'Flaga Mjanmy (Birmy)', name: 'Mjanma (Birma)' },
  { emoji: '🇲🇳', description: 'Flaga Mongolii', name: 'Mongolia' },
  { emoji: '🇲🇴', description: 'Flaga Makau', name: 'Makau' },
  { emoji: '🇲🇵', description: 'Flaga Marianów Północnych', name: 'Mariany Północne' },
  { emoji: '🇲🇶', description: 'Flaga Martyniki', name: 'Martynika' },
  { emoji: '🇲🇷', description: 'Flaga Mauretanii', name: 'Mauretania' },
  { emoji: '🇲🇸', description: 'Flaga Montserratu', name: 'Montserrat' },
  { emoji: '🇲🇹', description: 'Flaga Malty', name: 'Malta' },
  { emoji: '🇲🇺', description: 'Flaga Mauritiusa', name: 'Mauritius' },
  { emoji: '🇲🇻', description: 'Flaga Malediwów', name: 'Malediwy' },
  { emoji: '🇲🇼', description: 'Flaga Malawi', name: 'Malawi' },
  { emoji: '🇲🇽', description: 'Flaga Meksyku', name: 'Meksyk' },
  { emoji: '🇲🇾', description: 'Flaga Malezji', name: 'Malezja' },
  { emoji: '🇲🇿', description: 'Flaga Mozambiku', name: 'Mozambik' },
  { emoji: '🇳🇦', description: 'Flaga Namibii', name: 'Namibia' },
  { emoji: '🇳🇨', description: 'Flaga Nowej Kaledonii', name: 'Nowej Kaledonia' },
  { emoji: '🇳🇪', description: 'Flaga Nigru', name: 'Niger' },
  { emoji: '🇳🇫', description: 'Flaga Wyspy Norfolk', name: 'Wyspa Norfolk' },
  { emoji: '🇳🇬', description: 'Flaga Nigerii', name: 'Nigeria' },
  { emoji: '🇳🇮', description: 'Flaga Nikaragui', name: 'Nikaragua' },
  { emoji: '🇳🇱', description: 'Flaga Holandii', name: 'Holandia' },
  { emoji: '🇳🇴', description: 'Flaga Norwegii', name: 'Norwegia' },
  { emoji: '🇳🇵', description: 'Flaga Nepalu', name: 'Nepal' },
  { emoji: '🇳🇷', description: 'Flaga Nauru', name: 'Nauru' },
  { emoji: '🇳🇺', description: 'Flaga Niue', name: 'Niue' },
  { emoji: '🇳🇿', description: 'Flaga Nowej Zelandii', name: 'Nowa Zelandia' },
  { emoji: '🇴🇲', description: 'Flaga Omanu', name: 'Oman' },
  { emoji: '🇵🇦', description: 'Flaga Panamy', name: 'Panama' },
  { emoji: '🇵🇪', description: 'Flaga Peru', name: 'Peru' },
  { emoji: '🇵🇫', description: 'Flaga Polinezji Francuskiej', name: 'Polinezja Francuska' },
  { emoji: '🇵🇬', description: 'Flaga Papui-Nowej Gwinei', name: 'Papua-Nowea Gwinea' },
  { emoji: '🇵🇭', description: 'Flaga Filipin', name: 'Filipiny' },
  { emoji: '🇵🇰', description: 'Flaga Pakistanu', name: 'Pakistan' },
  { emoji: '🇵🇱', description: 'Flaga Polski', name: 'Polska' },
  { emoji: '🇵🇲', description: 'Flaga Saint-Pierre i Miquelon', name: 'Saint-Pierre i Miquelon' },
  { emoji: '🇵🇳', description: 'Flaga Wyspy Pitcairn', name: 'Wyspa Pitcairn' },
  { emoji: '🇵🇷', description: 'Flaga Portoryko', name: 'Portoryko' },
  { emoji: '🇵🇸', description: 'Flaga Autonomii Palestyńskiej', name: 'Autonomia Palestyńska' },
  { emoji: '🇵🇹', description: 'Flaga Portugalii', name: 'Portugalia' },
  { emoji: '🇵🇼', description: 'Flaga Palau', name: 'Palau' },
  { emoji: '🇵🇾', description: 'Flaga Paragwaju', name: 'Paragwaj' },
  { emoji: '🇶🇦', description: 'Flaga Kataru', name: 'Katar' },
  { emoji: '🇷🇪', description: 'Flaga Reunionu', name: 'Reunion' },
  { emoji: '🇷🇴', description: 'Flaga Rumunii', name: 'Rumunia' },
  { emoji: '🇷🇸', description: 'Flaga Serbii', name: 'Serbia' },
  { emoji: '🇷🇺', description: 'Flaga Rosji', name: 'Rosja' },
  { emoji: '🇷🇼', description: 'Flaga Rwandy', name: 'Rwanda' },
  { emoji: '🇸🇦', description: 'Flaga Arabii Saudyjskiej', name: 'Arabia Saudyjska' },
  { emoji: '🇸🇧', description: 'Flaga Wysp Salomona', name: 'Wyspy Salomona' },
  { emoji: '🇸🇨', description: 'Flaga Seszeli', name: 'Seszele' },
  { emoji: '🇸🇩', description: 'Flaga Sudanu', name: 'Sudan' },
  { emoji: '🇸🇪', description: 'Flaga Szwecji', name: 'Szwecja' },
  { emoji: '🇸🇬', description: 'Flaga Singapuru', name: 'Singapur' },
  { emoji: '🇸🇭', description: 'Flaga Wyspy Świętej Heleny', name: 'Wyspy Świętej Heleny' },
  { emoji: '🇸🇮', description: 'Flaga Słowenii', name: 'Słowenia' },
  { emoji: '🇸🇯', description: 'Flaga Wysp Svalbard i Jan Mayen', name: 'Wyspy Svalbard i Jan Mayen' },
  { emoji: '🇸🇰', description: 'Flaga Słowacji', name: 'Słowacja' },
  { emoji: '🇸🇱', description: 'Flaga Sierra Leone', name: 'Sierra Leone' },
  { emoji: '🇸🇲', description: 'Flaga San Marino', name: 'San Marino' },
  { emoji: '🇸🇳', description: 'Flaga Senegalu', name: 'Senegal' },
  { emoji: '🇸🇴', description: 'Flaga Somalii', name: 'Somalia' },
  { emoji: '🇸🇷', description: 'Flaga Surinamu', name: 'Surinam' },
  { emoji: '🇸🇸', description: 'Flaga Sudanu Południowego', name: 'Sudan Południowy' },
  { emoji: '🇸🇹', description: 'Flaga Wysp Świętego Tomasza i Książęcej', name: 'Wyspa Świętego Tomasza i Książęca' },
  { emoji: '🇸🇻', description: 'Flaga Salwadoru', name: 'Salwador' },
  { emoji: '🇸🇽', description: 'Flaga Sint Maarten', name: 'Sint Maarten' },
  { emoji: '🇸🇾', description: 'Flaga Syrii', name: 'Syria' },
  { emoji: '🇸🇿', description: 'Flaga Eswatini', name: 'Eswatini' },
  { emoji: '🇹🇦', description: 'Flaga Tristan da Cunha', name: 'Tristan da Cunha' },
  { emoji: '🇹🇨', description: 'Flaga Wysp Turks i Caicos', name: 'Wyspy Turks i Caicos' },
  { emoji: '🇹🇩', description: 'Flaga Czadu', name: 'Czad' },
  { emoji: '🇹🇫', description: 'Flaga Francuskich Terytoriów Południowych', name: 'Francuskie Terytoria Południowe' },
  { emoji: '🇹🇬', description: 'Flaga Togo', name: 'Togo' },
  { emoji: '🇹🇭', description: 'Flaga Tajlandii', name: 'Tajlandia' },
  { emoji: '🇹🇯', description: 'Flaga Tadżykistanu', name: 'Tadżykistan' },
  { emoji: '🇹🇰', description: 'Flaga Tokelau', name: 'Tokelau' },
  { emoji: '🇹🇱', description: 'Flaga Timoru Wschodniego', name: 'Timor Wschodni' },
  { emoji: '🇹🇲', description: 'Flaga Turkmenistanu', name: 'Turkmenistan' },
  { emoji: '🇹🇳', description: 'Flaga Tunezji', name: 'Tunezja' },
  { emoji: '🇹🇴', description: 'Flaga Tonga', name: 'Tongo' },
  { emoji: '🇹🇷', description: 'Flaga Turcji', name: 'Turcja' },
  { emoji: '🇹🇹', description: 'Flaga Trynidadu i Tobago', name: 'Trynidad i Tobago' },
  { emoji: '🇹🇻', description: 'Flaga Tuvalu', name: 'Tuvalu' },
  { emoji: '🇹🇼', description: 'Flaga Tajwanu', name: 'Tajwan' },
  { emoji: '🇹🇿', description: 'Flaga Tanzanii', name: 'Tanzania' },
  { emoji: '🇺🇦', description: 'Flaga Ukrainy', name: 'Ukraina' },
  { emoji: '🇺🇬', description: 'Flaga Ugandy', name: 'Uganda' },
  { emoji: '🇺🇲', description: 'Flaga Dalekich Wysp Mniejszych Stanów Zjednoczonych', name: 'Dalekie Wyspy Mniejsze Stanów Zjednoczonych' },
  { emoji: '🇺🇳', description: 'Flaga ONZ', name: 'ONZ' },
  { emoji: '🇺🇸', description: 'Flaga Stanów Zjednoczonych', name: 'Stany Zjednoczone' },
  { emoji: '🇺🇾', description: 'Flaga Urugwaju', name: 'Urugwaj' },
  { emoji: '🇺🇿', description: 'Flaga Uzbekistanu', name: 'Uzbekistan' },
  { emoji: '🇻🇦', description: 'Flaga Watykanu', name: 'Watykan' },
  { emoji: '🇻🇨', description: 'Flaga Saint Vincent i Grenadyn', name: 'Saint Vincent i Grenadyn' },
  { emoji: '🇻🇪', description: 'Flaga Wenezueli', name: 'Wenezuela' },
  { emoji: '🇻🇬', description: 'Flaga Brytyjskich Wysp Dziewiczych', name: 'Brytyjskie Wyspy Dziewicze' },
  { emoji: '🇻🇮', description: 'Flaga Wysp Dziewiczych Stanów Zjednoczonych', name: 'Wyspy Dziewicze Stanów Zjednoczonych' },
  { emoji: '🇻🇳', description: 'Flaga Wietnamu', name: 'Wietnam' },
  { emoji: '🇻🇺', description: 'Flaga Vanuatu', name: 'Vanuatu' },
  { emoji: '🇼🇫', description: 'Flaga Wysp Wallis i Futuna', name: 'Wyspy Wallis i Futuna' },
  { emoji: '🇼🇸', description: 'Flaga Samoa', name: 'Samoa' },
  { emoji: '🇽🇰', description: 'Flaga Kosowa', name: 'Kosowo' },
  { emoji: '🇾🇪', description: 'Flaga Jemenu', name: 'Jemen' },
  { emoji: '🇾🇹', description: 'Flaga Majotty', name: 'Majotta' },
  { emoji: '🇿🇦', description: 'Flaga Republiki Południowej Afryki', name: 'Republika Południowej Afryki' },
  { emoji: '🇿🇲', description: 'Flaga Zambii', name: 'Zambia' },
  { emoji: '🇿🇼', description: 'Flaga Zimbabwe', name: 'Zimbabwe' }
]

export { FLAGS }
