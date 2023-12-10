const translations = {
    hungarian: {
        kolumbus: "Kolumbusz",
        america: "Amerika",
        projects: "Projektek",
        team: "Csapattagok",
        map: "Helyszín",
        galery: "Galéria",
        landingtext: "A nagy földrajzi felfedezések",
        wikibutton: "Tovább a Wikipédiára!",
        kolumbus1: "Kolumbusz Kristóf",
        kolumbus2: "Cristoforo Colombo, vagyis Kolumbusz Kristóf, az olasz származású tengerész és felfedező volt, aki az új világ kapuját nyitotta meg az európaiak számára. 1492-ben, a spanyol királyok, Ferdinánd és Izabella támogatásával, elindult útjára, hogy hajóival átszelje az Atlanti-óceánt és eljusson Ázsia keleti partjára.",
        kolumbus3: "Kolumbusz azonban véletlenül ért partot egy karibi szigeten, és ezzel az eseménnyel megkezdődött az európaiak és az amerikai őslakosok közötti kapcsolat. Bár sok vita kísérte életét és munkásságát, Kolumbusz Kristóf jelentős szerepet játszott a korszak határainak kitolásában és az új korszak kezdetében.",
        america1: "Amerika Felfedezése",
        america2: "Az amerikai kontinens felfedezése az európaiak számára jelentős mérföldkő volt. Kolumbusz Kristóf érkezése után további felfedezők, például Amerigo Vespucci, az új világ térképészetének fejlődéséhez és az európai telepesek kolonizációs kísérleteihez vezettek. Az új világ gazdag kultúrával és forrásokkal rendelkezett, amelyek megváltoztatták az európai történelmet.",
        america3: "Ebben az időszakban kialakultak az első állandó európai települések Észak- és Dél-Amerikában, és elindult az európai gyarmati jelenlét kialakítása.",
        project1: "Projektjeink",
        project2: "Történelem",
        project3: "Történelemből prezentációs feladatunk volt Vasco Da Gammáról.",
        project4: "Informatika",
        project5: "Informatika feladatunk volt egy hajótársaság hálózatának modellezése.",
        project6: "Magyar",
        project7: "Tovább a Blog-ra!",
        project8: "Magyar feladatunk, blog készítése Vasco Da Gammával.",
        team1: "Csapattagok",
        team2: "Hernádi Bence",
        team3: "Véber-Jurassa Márk",
        team4: "Lakatos-Dienes Ádám",
        bence: "Kívül cigány, bellül vidám",
        mark: "Átlagos Szomódi",
        adam: "Biciklis köcsög",
        footer: "Minden jog fenntartva - 2023 - All rights reserved"

    },
    english: {
        kolumbus: "Kolumbus",
        america: "America",
        projects: "Projects",
        team: "Team",
        map: "Location",
        galery: "Galery",
        landingtext: "The great geographical discoveries",
        wikibutton: "To the Wikipedia!",
        kolumbus1: "Christopher Columbus",
        kolumbus2: "It was Cristoforo Colombo, or Christopher Columbus, the Italian-born navigator and explorer who opened the gates of the New World to Europeans. In 1492, with the support of the Spanish kings Ferdinand and Isabella, he set sail on a voyage to cross the Atlantic and reach the east coast of Asia.",
        kolumbus3: "But Columbus accidentally landed on a Caribbean island, and this event marked the beginning of contact between Europeans and Native Americans. Although much controversy surrounded his life and work, Christopher Columbus played a significant role in pushing the boundaries of the era and ushering in a new era.",
        america1: "Exploring America",
        america2: "The discovery of the Americas was a major milestone for Europeans. After the arrival of Christopher Columbus, further explorers, such as Amerigo Vespucci, led to the development of cartography of the New World and colonisation attempts by European settlers. The New World was rich in culture and resources that changed European history.",
        america3: "This period saw the establishment of the first permanent European settlements in North and South America, and the start of the European colonial presence.",
        project1: "Our Projects",
        project2: "History",
        project3: "For history, we had a presentation task about Vasco Da Gama.",
        project4: "Computer Science",
        project5: "In computer science, our task was to model a shipping company's network.",
        project6: "Hungarian",
        project7: "To the Blog!",
        project8: "In Hungarian, our task was to create a blog related to Vasco Da Gama.",
        team1: "Team Members",
        team2: "Bence Hernádi",
        team3: "Márk Véber-Jurassa",
        team4: "Ádám Lakatos-Dienes",
        bence: "Gypsy on the outside, cheerful on the inside",
        mark: "Average man from Szomód",
        adam: "Bicycle bastard",
        footer: "All rights reserved - 2023"

    }
};

function translatePage(language) {
    const translatedElements = document.querySelectorAll('[data-translate]');

    translatedElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageDropdown = document.querySelector('#languageDropdown');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu .dropdown-item');
    let selectedLanguage = 'hungarian'; // Alapértelmezett nyelv

    languageDropdown.addEventListener('click', (event) => {
        event.preventDefault();
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            selectedLanguage = link.getAttribute('data-language');
            translatePage(selectedLanguage);
        });
    });
    
    function translatePage(language) {
        const translatedElements = document.querySelectorAll('[data-translate]');
    
        translatedElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }
});

