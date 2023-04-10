function generatorQuote(){
    let quotes = {
        '-Наполеон Хилл': "'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.'",
       '-Флоренс Найтингейл':"'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.'",
       'Амелия Эрхарт': "'Сложнее всего начать действовать, все остальное зависит только от упорства.'"
    };
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote =quotes[author];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;


}