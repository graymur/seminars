/* basic class */

class MovingObject {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y) ;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

const movingObject = new MovingObject(1, 5, 10);

console.log(movingObject);









/* inheritance */

class MovingShowingObject extends MovingObject {
    show() {
        console.log(this);
    }
}

const movingShowingObject = new MovingShowingObject(1, 5, 10);

movingShowingObject.show();














/* super calls */

class DoubleMovingShowingObject extends MovingShowingObject {
    constructor(id, x, y) {
        super(id, x, y);

        this.x = this.x * this.x;
        this.y = this.y * this.y;
    }
}

const doubleMovingShowingObject = new DoubleMovingShowingObject(1, 5, 10);

doubleMovingShowingObject.show();
