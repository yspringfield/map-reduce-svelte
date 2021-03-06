export function randomGaussian(length, v=4){
  // https://riptutorial.com/javascript/example/8330/random--with-gaussian-distribution
  let r = 0;
  for(let i = v; i > 0; i --){
    r += Math.random();
  }
  return Math.ceil((r / v)*length);
}

export function randomIndex(length) {
  return Math.random()*length | 0;
}

export function randomFromDataWithInclude(data, shouldInclude, dataItems=10) {
  let shouldBeIncluded = data.filter((d) => d[shouldInclude.key] === shouldInclude.value)
  let randomData = randomFromData(data, dataItems);
  // if randomData does not one of shouldBeIncluded, remove one from randomData and add one from shouldBeIncluded

}
export function randomFromData(data, dataItems=10) {
  let selected = [];
  for(let i=0;i<dataItems;i++) {
    const randomIndex = randomGaussian(data.length);
    selected.push(data[randomIndex]);
  }
  return selected;
}

export function randomInChunks(data, chunks=10) {
  let result = [];
  let addedIndizes = []
  for(let i=0;i<data.length;i++) {
    console.log(addedIndizes)
    let randomIndex = randomGaussian(data.length);
    console.log(addedIndizes.indexOf(randomIndex))
    while(addedIndizes.indexOf(randomIndex) > 0) {
      randomIndex = randomGaussian(data.length);
    }
    console.log(randomIndex)
    addedIndizes.push(randomIndex)
    const chunkIndex = Math.floor(randomIndex/chunks)
    if(!result[chunkIndex]) {
      result[chunkIndex] = [] // start a new chunk
    }
    result[chunkIndex].push(data[randomIndex])
  }
  return result;
}

export function chunkArray(inputArray, chunks = 2) {
  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/chunks)
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])
}
