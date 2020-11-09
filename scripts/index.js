    
    var hours = 23; var minutes = 59; var interval = 31;

    //сложим минуты
    var allmin = minutes + interval;
    //если минут больше 60, то получим количество часов и остаток минут
    if (allmin == 60) {
        var allhours = hours + 1;
        var minResult = "00";
    } else if (allmin == 0) {
        allhours = hours;
        minResult = "00";
    } else if (allmin > 60) {
        var i = Math.floor(allmin/60);
        allhours = hours + i;
        var j = (interval + minutes) - i * 60;
        if (j == 0) {
            minResult = "00"
        } else {
            minResult = j;
        };
    };
    //есть минуты разберемся с часами
    if (allhours == 0) {
        allhours = "00";
    } else if (allhours == 24) {
        allhours = "00";
    } else if (allhours > 23) {
        allhours = Math.floor(allhours/24)
    };

    //дополним до 00 и напечатаем результат
    if (allhours != "00" && allhours < 10) {
        var hh = "0" + allhours;
    } else {
        var hh = allhours;
    };

    if (minResult != "00" && minResult < 10) {
       var mm = "0" + minResult;
    } else {
       var mm = minResult;
    };
    alert(allhours + ":" + minResult);
    alert(hh + ":" + mm);
