const stringObject = {
  a: "343",
  c: "444",
  d: "344",
};


const unpredictable1 = {
  a: 22,
  c: {
    xcd: {
      ddffd: {
        xyz: [
          {
            a: "343",
            c: "444",
            d: "344",
          },
          {
            x: "7889",
            c: "blabla",
            d: "344",
          },
        ],
      },
    },
  },
};
const unpredictable2 = {
  a: 22,                     // loop and for each entry, check if its an object. then
  c: {
    xcd: {
      ddffd: {
        fff: {
          b: 44,
          ggg: {
            a: 44,
            b: 44,
            c: 44,
            hhh: {
              jjj: {
                kkk: {
                  a: 44,
                  b: 44,
                  c: {
                    a: 44,
                    b: 44,
                    c: 44,
                  },
                  xyz: [
                    {
                      x: "7889",
                      c: "blabla",
                      d: "344",
                    },
                    {
                      a: "343",
                      c: "444",
                      d: "344",
                      e: "234234324",
                      f: "777",
                    },
                  ]
                }
              }
            }
          }
        },
      },
    },
  },
};

// below function collates any array available inside the given input, irespective of how deep it is inside the input object
const getAllTheArrays = (arrayData, inputData) => {
  let arrayCollection = [...arrayData];
  for (const key in inputData) {
    if (typeof (inputData[key]) === 'object' &&
      !Array.isArray(inputData[key]) &&
      inputData[key] !== null) {
        arrayCollection = [...arrayCollection, ...getAllTheArrays(arrayCollection, inputData[key])];
    } else if (Array.isArray(inputData[key])) {
      arrayCollection = [...arrayCollection, ...inputData[key]];
    }
  };
  return arrayCollection;
}
// below function first makes a list of all the arrays in the unpredictable, then searches in each of them to find a
// object which includes all the key value pairs present in stringObject
const findTheObject = (objectToFind, sourceObject) => {
  const allTheArrays = getAllTheArrays([], sourceObject);
  let finalResult = [];

  allTheArrays.forEach(item => {
    const isObjectPresent = Object.keys(objectToFind).every(function (k) {
      return item[k] === objectToFind[k]
    })
    if (isObjectPresent) { finalResult.push(item) }
  })
  return (finalResult.length === 0) ? null : finalResult;
}
console.log(findTheObject(stringObject, unpredictable1));
console.log(findTheObject(stringObject, unpredictable2));
