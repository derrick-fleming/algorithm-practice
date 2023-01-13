function isBeautiful(inputString: string): boolean {
  let array = inputString.split('');
  array.sort();
  if (array[0] !== 'a') return false;
  let organizedArray = {};
  for (let i = 0; i < array.length; i++) {
    if (organizedArray[array[i]]) {
      organizedArray[array[i]] = organizedArray[array[i]] + 1;
    } else {
      organizedArray[array[i]] = 1;
    }
  }
  console.log(organizedArray);
  let prevNumber: number;
  let prevKey: number;
  for (let key in organizedArray) {
    if (prevNumber < organizedArray[key] && key !== 'a') {
      return false;
    } else {
      prevNumber = organizedArray[key];
    }
    if (prevKey + 1 !== key.charCodeAt(0) && key !== 'a') {
      return false;
    } else {
      prevKey = key.charCodeAt(0)
    }

  }
  return true;
}

isBeautiful("bbbaacdafe");
