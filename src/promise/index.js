const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    })
}

somethingWillHappen()
.then(console.log)
.catch(console.error);

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject)=>{
        if(true) {
            setTimeout(()=>{
                resolve('True!');
            },2000);
            
        } else {
            //imprime mas detalle sobre el error
            reject(new Error('Whoooops!'));
        }
    })
}

somethingWillHappen2()
.then(console.log)
.catch(console.error);

// Ejecutar un arreglo de promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err)
})

// Hey!
// True!
// Array of results [ 'Hey!', 'True!' ]