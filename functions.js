// returns a random integer between min (included) and max (included)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a random float between min (included) and max (included)
function randFloat(min, max) {
  return Math.random() * (max - 1 - min + 1) + min;
}

// returns a random item from the list of items passed in
function randItem(items) {
  return items[randInt(0, items.length - 1)];
}

// returns the number passed in with a precision number of digits after the decimal point
function toPrecision(number, precision) {
    return +((number).toFixed(precision));
}

// shuffles items and returns a new array. Based on the modern Fisher-Yates shuffle algorithm
function shuffleItems(items) {
	return items.reduce((result, item, index) => {
  	if (index === items.length - 1) {
    	return result;
    }
  
  	const jindex = Math.floor(Math.random() * (items.length - 1 - index + 1)) + index;
    [result[index], result[jindex]] = [result[jindex], result[index]];
    
    return result;
  }, items);
}
