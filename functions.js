// returns a random integer between min (included) and max (included)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a random float between min (included) and max (included)
function randFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

// returns a random item from the list of items passed in
function randItem(items) {
  return items[randInt(0, items.length - 1)];
}
