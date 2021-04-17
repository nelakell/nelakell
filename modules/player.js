import * as Constants from "./constants.js";
import {GAME_HEIGHT, GAME_WIDTH} from "./game.js";

const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 30;
const PLAYER_IMG = "./img/playerShip1_red.png";

export default class Player {
    constructor(name, xPos, yPos) {
        this.player = document.createElement("img");
        this.player.src = PLAYER_IMG;
        this.player.className = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.player.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
    }
}

export function move($player, keyCode) {
    switch (keyCode) {
        case Constants.KEY_CODE_LEFT:
            $player.xPos -= 5;
            break;
        case Constants.KEY_CODE_RIGHT:
            $player.xPos += 5;
            break;
        case Constants.KEY_CODE_UP:
            $player.yPos -= 5;
            break;
        case Constants.KEY_CODE_DOWN:
            $player.yPos += 5;
            break;
    }
    $player.xPos = respectBoundaries($player.xPos, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);
    $player.yPos = respectBoundaries($player.yPos, PLAYER_HEIGHT, GAME_HEIGHT - PLAYER_HEIGHT);
    setPosition($player.player, $player.xPos, $player.yPos)
}

function setPosition($el, x, y) {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

function respectBoundaries(v, min, max) {
    if (v < min) {
        return min;
    } else if (v > max) {
        return max;
    } else {
        return v;
    }
}
