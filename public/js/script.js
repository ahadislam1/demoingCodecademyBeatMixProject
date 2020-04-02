// Drum Arrays
let kicks
let snares
let hiHats
let rideCymbals

const drums = {
    'kicks' : kicks = Array(16).fill(false),
    'snares' : snares = Array(16).fill(false),
    'hiHats' : hiHats = Array(16).fill(false),
    'rideCymbals' : rideCymbals = Array(16).fill(false),
};

const toggleDrum = (drumName, i) => {
    if (drums.hasOwnProperty(drumName) && i < drums[drumName].length && i >= 0) {
        drums[drumName][i] = !drums[drumName][i]
    }
};

const clear = name => {
    if (drums.hasOwnProperty(name)) {
        drums[name].fill(false)
    }

}

const invert = drumName => {
    if (drums.hasOwnProperty(drumName)) {
        for (let i = 0; i < drums[drumName].length; i++) {
            drums[drumName][i] = !drums[drumName][i];
        }
    }
}

const getNeighborPads = (x, y, size) => {
    if (x < size && y < size && x >= 0 && y >= 0) {
        if (x === size - 1 && y === size - 1) {
            return [[x - 1, y], [x, y - 1]]
        } else if (x === 0 && y === 0) {
            return [[x + 1, y], [x, y + 1]]
        } else if (x === 0) {
            return [[x + 1, y], [x, y + 1], [x, y - 1]]
        } else if (x === size - 1) {
            return [[x - 1, y], [x, y + 1], [x, y + 1]]
        } else if (y === 0) {
            return [[x + 1, y], [x, y + 1], [x - 1, y]]
        } else if (y === size -1) {
            return [[x + 1, y], [x, y - 1], [x - 1, y]]
        } else {
            return [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]
        }
    } else {
        return []
    }
}