function primaOperazione(input, callback) {
    setTimeout(() => {
      const output = ' primaOperazione ' + input;
      console.log(output);
      if (callback) {
        callback(output);
      }
    }, 0)
  }
  
  function secondaOperazione(input, callback) {
    setTimeout(() => {
      const output = ' secondaOperazione ' + input;
      console.log(output);
      if (callback) {
        callback(output);
      }
    }, 0)
  }

function primaOperazionePromise(input){
    const promessa = new Promise((resolve,reject) =>{
        primaOperazione(input, (errore, risultato) =>{
            if(errore){
                reject(errore)
            }else{
                resolve(risultato);
            }
        })
    },)
    return promessa;
}
function secondaOperazionePromise(input){
    const promessa = new Promise((resolve,reject) =>{
        secondaOperazione(input, (errore, risultato) =>{
            if(errore){
                reject(errore)
            }else{
                resolve(risultato);
            }
        })
    },)
    return promessa;
}

const save = primaOperazionePromise(60).then((risultato) =>{
    return secondaOperazionePromise(risultato)
    }
    ).then(
        (risultato2)=>{
        console.log("Fatto!")
    }
    )