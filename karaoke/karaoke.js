const lyrics = `Jadę moim 5-7, więc nie mogę zwolnić
Jestem szefem, więc nie mogą mnie zwolnić
Topi się asfalt, topi się chodnik
Ona odjebana jak na pokazach mody
Ja chodzę w dresie, bo to styl sportowy
I robię to co przyjdzie mi do głowy
Wszechobecny tak jak na mieście crack
Zawsze pewny tak jak na giełdzie krach
Robię rap i znowu jara mnie to brat
Robię atak i wjeżdżam, a ze mną skład
Robisz zdjęcia jak masz kilka klocków w rękach
Moja chata to pierdolony Legoland
Nigdy numer dwa - zawsze chcę jeden
Zawsze białe buty nawet kiedy deszcz leje
Wbijam na parkiet, mój rap jest best ever
Twoja Mazda zgasła, mój rap jest Bentleyem
I płynę po bicie, bo jestem za sterem
Jak wchodzę pytają mnie czy to Betlejem
No bo widzą gwiazdę, to pewny bestseller
Bit ciepły jakby krzyczał, że jest gejem
I nie ma ich trzech - król jest jeden
Jeśli niebo w gębie to mój chuj jest niebem
A każdy mój wers to w ich ustach knebel
Szczam na rap, bo oznaczam swój teren
Piękna aktorka mierzy kolię i
Młody milioner puka do jej drzwi
Każdy wieczór jest kozak, to nie deja vu
Potem młody milioner puka - to nie film`;

const lyricsArr = lyrics.split("\n");

let line = 0

const karaoke = setInterval( () => {
    console.log(lyricsArr[line]);
    line++;

    if (line == lyricsArr.length) {
        clearInterval(karaoke);
    }
}, 1000)