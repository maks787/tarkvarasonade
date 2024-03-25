const synad= {
    'teostus': 'реализация',
    'kavand': 'план',
    'algoritm': 'алгоритм',
    'kasutajaliides': 'пользовательский интерфейс',
    'muudel': 'модель',
    'andmebaasiskeem': 'схема базы данных',
    'standart': 'стандарт',
    'tsükkel': 'цикл',
    'andmetõõtlus': 'обработка данных',
    'andmestruktuur': 'структура данных',
    'arenduskeskkond': 'среда разработки',
    'projektihaldus töörist': 'работник по управлению проектами',
    'kavandamine': 'планирование',
    'iteratsioon': 'итерация',
    'parandus': 'исправление',
    'koskmudel': 'каскадная модель',
    'agiline mudel': 'агильная модель',
    'spiraalne mudel': 'спиральная модель',
    'inkrementaalne mudel': 'инкрементальная модель',
    'nõudmised': 'требованя',
    'ealiseerimine': 'каскадная модель',
    'testimine': 'каскадная модель',
    'integreerimine': 'каскадная модель',
    'kasutamine': 'каскадная модель',
    'holdus': 'каскадная модель',
    'eelised': 'преимущества',
    'puudused': 'недостатки',
    'elutsükel': 'каскадная модель',
    'arendamine': 'разработка',
    'valideerimine': 'каскадная модель',



}
const vsynad = {
    'реализация': 'teostus',
    'план': 'kavand',
    'алгоритм': 'algoritm',
    'пользовательский интерфейс': 'kasutajaliides',
    'модель': 'muudel',
    'схема базы данных': 'andmebaasiskeem',
    'стандарт': 'standart',
    'цикл': 'tsükkel',
    'обработка данных': 'andmetõõtlus',
    'структура данных': 'andmestruktuur',
    'среда разработки': 'arenduskeskkond',
    'работник по управлению проектами': 'projektihaldus töörist',
    'планирование': 'kavandamine',
    'итерация': 'iteratsioon',
    'исправление': 'parandus',
    'каскадная модель': 'koskmudel',
    'агильная модель': 'agiline mudel',
    'спиральная модель': 'spiraalne mudel',
    'инкрементальная модель': 'inkrementaalne mudel',
    'требованя': 'nõudmised',
    'каскадная модель': 'ealiseerimine',
    'тестирование': 'testimine',
    'интеграция': 'integreerimine',
    'использование': 'kasutamine',
    'поддержка': 'holdus',
    'преимущества': 'eelised',
    'недостатки': 'puudused',
    'жизненный цикл': 'elutsükel',
    'разработка': 'arendamine',
    'проверка на правильность': 'valideerimine',
};
function randomSyna(){

    const keys = Object.keys(synad)
    //random sõna
    const juhuslikSyna=keys[Math.floor(Math.random()*keys.length)]

    //võtame random sõna masiivist

    //lisame HTML lehele
    document.getElementById("random-sona").innerHTML=juhuslikSyna;
}
function sonakontroll(){

    const syna= document.getElementById("kontroll").value
    document.getElementById("vastus").innerHTML = syna ===synad[document.getElementById("random-sona").innerHTML] ? "Õige!" : "Vale!";

}
//uus funktsioonid
function vrandomSyna(){
    const keys = Object.keys(vsynad);
    const vjuhuslikSyna = keys[Math.floor(Math.random() * keys.length)];

    document.getElementById("vrandom-sona").innerHTML = vjuhuslikSyna;
}

function vsonakontroll(){
    const syna = document.getElementById("vkontroll").value;
    document.getElementById("vvastus").innerHTML = syna === vsynad[document.getElementById("vrandom-sona").innerHTML] ? "Õige!" : "Vale!";
}