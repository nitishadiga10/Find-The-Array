# Find-The-Array
This JS file is the solution written in JavaScript to the below mentioned problem question. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------
type StringObject = { [key: string]: string };

export type UnpredictableObject = any;

// please create a function with return type Array<StringObject> | null.
// Your function should be called: resolveXYZArray, and it should do the following:
// - take a minimum of 2 parameters: one parameter is called checkObject and is of type StringObject. The other parameter is of the type UnpredictableObject. (You can assume that the UnpredictableObject
//   can have 0 or 1 arrays somehwere inside of it)
// - find any array anywhere inside the UnpredictableObject that has xyz as a key. for example, this could be the case:

const stringObject: StringObject = {
  a: "343",
  c: "444",
  d: "344",
};

const unpredictable: UnpredictableObject = {
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

// in this case, let's assume that your function gets called like so: resolveXYZArray(stringObject, unpredictable);
// your function should return:
[
  {
    a: "343",
    c: "444",
    d: "344",
  },
];

// - if the array is not found, your function returns null
// - if the array is found, it returns a filtered version of the array. The filtered array only has objects
//   that contain all key value pairs that are present inside the StringObject that was provided to your function as a first argument (parameter called checkObject)


-----------------------------------------------------------------------------------------------------------------------------------------------------------
