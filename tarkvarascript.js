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
    document.getElementById("vastus").innerHTML = syna ===synad[document.getElementById("random-sona").innerHTML]

}