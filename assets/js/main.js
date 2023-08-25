console.log('hello there');

/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

//creo elementi DOM
const bodyEl = document.querySelector('body');
const titleEl = document.createElement('h1')
const containerEl = document.createElement('div');
const ulEl = document.createElement('ul');

//aggiungo El DOM
bodyEl.append(titleEl);
titleEl.append('FizzBuzz');
bodyEl.append(containerEl);
containerEl.append(ulEl);

//css per il DOM
bodyEl.classList.add('main_bg') // Body
containerEl.classList.add('container');// container
titleEl.classList.add('text-center', 'text-light', 'font_size_big')// h1
ulEl.classList.add('d-flex', 'flex-wrap' , ); // ul

for (let n = 1; n <= 100; n++) { //loop da 1 a 100 
   
    const liEl = document.createElement('li');
    ulEl.append(liEl);
    liEl.classList.add('d-flex', 'd-flex' , 'justify-content-center' , 'align-items-center', 'm-4', 'square'); //li css

    if (n % 3 == 0 || n % 5 == 0 ) {// se n multiplo di 3 o 5 entra
       
        if (n % 3 == 0 && n % 5 == 0 ) {// se n multiplo di 3 e 5 .log fizzbuzz
       
        console.log('FizzBuzz');
        liEl.append("FizzBuzz")
        liEl.classList.add('fizzbuzz_bg');

        }else if (n % 3 == 0) {// se n multiplo di 3 .log fizz
          
            console.log('Fizz');
            liEl.append("Fizz")
            liEl.classList.add('fizz_bg');

        }else if(n % 5== 0) {// se n multiplo di 5 .log buzz
           
            console.log('Buzz');
            liEl.append("Buzz")
            liEl.classList.add('buzz_bg');

        }
    }else {//se non ha un multiplo definito .log n
        
        console.log(n);
        liEl.append(n);
        liEl.classList.add('n_bg');

    }
}