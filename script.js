const secondArray = [10, 1, 2, 5, 6]
const num = [1, 2, 3, 4, 5, 6, 7, 8];

const conditionPari = (item, index, array) =>  (item %2 === 0 ? true : false)


const itemIn = num.filter(element => secondArray.includes(element));

console.log((itemIn));
console.log(num.filter(conditionPari))



  const futureFn1 = () => {

    num.forEach((element, index) => {
      setTimeout(() => {
      console.log(element);
      }, 1000 * element * index);
    
   });
  };
  futureFn1();
   
 
