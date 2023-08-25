/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/





for (let n = 1; n <= 100; n++) { //loop da 1 a 100 
 
    if (n % 3 == 0 || n % 5 == 0 ) {// se n multiplo di 3 o 5 entra
       
        if (n % 3 == 0 && n % 5 == 0 ) {// se n multiplo di 3 e 5 .log fizzbuzz
        console.log('FizzBuzz');
    
        }else if (n % 3 == 0) {// se n multiplo di 3 .log fizz
            console.log('Fizz');

        }else if(n % 5== 0) {// se n multiplo di 5 .log buzz
            console.log('Buzz');

        }
    }else {//se non ha un multiplo definito .log n
        console.log(n);

    }
}