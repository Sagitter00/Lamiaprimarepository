/**
 * 
 * @param (string)input
 */
 const a=10;
 const b="Pietro";
 const c= true;
 const ogetto ={};
 const array =[];
 const data= new Date;
 function funzione() {};
 
 console.log(
     typeof a,
     typeof b,
     typeof c,
     typeof ogetto,
     typeof array,
     typeof data,
 )
 
 const carrello={
     prodotti:[
         {
         prodotto: "kebab",
         prezzo: 5,
         quantità:2
         },
         {
         prodotto: "gamberi",
         prezzo: 2,
         quantità: 5
         }
     ],
     getTot(){
         let Tot=0;
         for(let i=0; i<this.prodotti.length; i++){
             const prodotto = this.prodotti[i];
             Tot= Tot + prodotto.quantità*prodotto.prezzo;
         }
         return Tot;
     }
 }
 console.log("prodotto", carrello.getTot());