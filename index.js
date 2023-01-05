function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i], i, values);
      }
    }
    return collection;
  }
  
function myMap (collection, callback) {
    const newCollection = []
    for (const element of collection) {
        newCollection.push(callback(element))
    }
    return newCollection
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      }
    } else {
      const values = Object.values(collection);
      if (acc === undefined) {
        acc = values[0];
        for (let i = 1; i < values.length; i++) {
          acc = callback(acc, values[i], values);
        }
      } else {
        for (let i = 0; i < values.length; i++) {
          acc = callback(acc, values[i], values);
        }
      }
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
    for (let value of collection) {
      if (predicate(value)) {
        result.push(value);
      }
    }
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n = 1) {
    return array.slice(0, n);
  }

  function myLast(array, n = 1) {
    return array.slice(array.length - n);
  }

  function myKeys(obj) {
    return Object.keys(obj);
  }

  function myValues(obj) {
    return Object.values(obj);
  }