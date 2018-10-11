function start(){

}
function loneSum(number, letter, phone){
    var sum = number + letter + phone;
    var a = number;
    var b = letter;
    var c = phone;

    if (b == c && a != b){
        return a;
    }
    if(a != b && a != c ){  
        return sum;
    }else {
        if (a == b || a == c || a == c && a == b){
            if (a == c && a == b){
                return 0;
            }
            if (a == b){
                return c;
            }
            if(a == c){
                return b;
            }

        }
    }
    if(b != c){
        return sum;
    }else {
        if (b == c) {
            if(b == c){
                return b;
            }

        }
    }
}

function blackjack(spades, cards) {
    var b = spades;
    var c = cards;
    var miss = 0;

    if (c <= 21 || b <= 21) {
        if (c > b) {
            if (c <= 21) {
                return c;
            }
        }
        if (b <= 21) {
            if (b > c || c > 21) {
                return b;
            }
        }
    }



    if (c <= 21){
        if (c > b || b > 21){
            return c;
        }
    }
    if (c > 21 || b > 21){
        return miss;
    }


}

function teaParty(tea, candy) {
    var bad = 0;
    var good = 1;
    var great = 2;

    if (tea < 5 || candy < 5) {
        return bad;
    } else {
        for (var i = 0; i < 1; i++) {
            if (tea >= 2 * candy || candy >= 2 * tea) {
                return great;
            }

            if (tea >= 5 || candy >= 5) {
                return good;
            }

        }
    }
}

function fizz_buzz(number) {
    var fizz = "Fizz";
    var buzz = "Buzz";
    var c = number;
    for (var i = 0; i < 1; i ++){
        if (number % 3 == 0 && number % 5 == 0){
            return fizz + buzz;
        }
        if (number % 3 == 0){
            return fizz;
        }
        if (number % 5 == 0){
            return buzz;
        }

        }

    if (number % 3 != 0 || number % 5 != 0 || number % 3 == 0 && number % 5 == 0) {
        return c + "!";
    }
}
function caughtSpeeding(speed, birthday) {
    var no_ticket = 0;
    var small_ticket = 1;
    var big_ticket = 2;
    if (birthday == true){
        if (speed <= 60 + 5){
            return no_ticket;
        }
        if (speed >= 61 + 5 && speed <= 81 + 5){
            return small_ticket;
        }
        if (speed > 81 + 5){
            return big_ticket;
        }

    }else {
        if(birthday == false){
            if (speed <= 60 ){
                return no_ticket;
            }
            if (speed >= 61 && speed <= 81){
                return small_ticket;
            }
            if (speed > 81) {
                return big_ticket;
            }
        }
    }

}

function string_bits(word) {
    var d = word.length;
    var x = word;
    var y = 0;
    var z = 0;
    var b = "";
    for(var i = 0; i < d; i += 2){
         b += x.substring(i, i+1);
    }
    return b;
}

function front_times(word, n) {
    var x = word;
    var d = 0;
    var y = 0;
    var z = 0;
    if (n !== 0) {
        z = x.substring(0,3);
        d = z;
        for(var i = 0; i < (n - 1); i ++){
            d += z;
        }
        return  d;
    }
    if (n === 0){
        return false;
    }
}
function string_times(word , n) {
    var j = word;
    if (n !== 0){
        for(var i = 0; i < (n - 1); i ++) {
            j += word
        }
    }
    if (n !== 0){
        return j;
    }else {
        if (n == 0){
            return 0;
        }
    }
}
function monkey_trouble(a_smile, b_smile){
    if(a_smile == true && b_smile == true || a_smile == false && b_smile == false){
        return true;
    }else {
        if(a_smile == true && b_smile == false || a_smile == false && b_smile == true){
            return false;
        }
    }
}

function sleep_in(weekday, vacation) {
    if (vacation == true && weekday == false || vacation && weekday == false || vacation == false && weekday == false || weekday == true && vacation == true){
        return true;
    }else {
        if (weekday == true && vacation == false){
            return false;
        }
    }
}



//write second method
//function nextOne(param1, param2) {
//    return param1;
//}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += loneSum(9, 2, 2);
    //document.getElementById("output").innerHTML += blackjack(19, 22);
    //document.getElementById("output").innerHTML += teaParty(11, 4);
    //document.getElementById("output").innerHTML+= fizz_buzz(6);
    //document.getElementById("output").innerHTML+= string_bits("Hellos");
    //document.getElementById("output").innerHTML += front_times('Chocolate', 3);
    //document.getElementById("output").innerHTML += string_times('yeah', 0);
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    //document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
