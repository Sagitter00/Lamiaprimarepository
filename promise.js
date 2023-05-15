function primaOperazione(input, genoveffa) {
    const output = ' primaOperazione ' + input;
    console.log(output);
    if(genoveffa) {
      genoveffa(output);
    }
  }
  
  function secondaOperazione(input, genoveffa) {
    const output = ' secondaOperazione ' + input;
    console.log(output);
    if(genoveffa) {
      genoveffa(output);
    }
  }
  function primaOperazionePromise(input){
    const p = new Promise(
        (resolve,reject) =>{
            primaOperazione(input, (output1) =>{
                resolve(output1)
            })
        }
    )
    return p;
  }

  function secondaOperazionePromise(input){
    const p = new Promise(
        (resolve,reject) =>{
            secondaOperazione(input, (output2) =>{
                resolve(output2)
            })
        }
    )
    return p;
  }

const genoveffa1 = primaOperazionePromise("esperimento")
    .then(
        (output1) =>{
            return secondaOperazionePromise(output1)
        }
    )
const genoveffa2 = genoveffa1
    .then(
        (output2) =>{
            console.log(output2)
            return output2;
        }
    );
  
const fine = genoveffa2.then(
    finale => console.log(finale)
)