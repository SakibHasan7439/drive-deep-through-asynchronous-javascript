function doStep1(init, callback){
    const result = init + 1;
    callback(result);
};

function doStep2(init, callback){
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback){
    const result = init + 3;
    callback(result);
}

function doOperation() {
    doStep1(0, (result1) =>{
        doStep2(result1, (result2) =>{
            doStep3(result2, (result3) =>{
                console.log("result is: ", result3);
            })
        })
    })
}

// doOperation();

const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    response.json();
  })
  .then((data) =>{
    console.log(data[0].price);
  })
  .catch((error) =>{
    console.log(`Could not got products: ${error}`);
  })