//returns a random integer between min (included) and max (included)
function randRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
