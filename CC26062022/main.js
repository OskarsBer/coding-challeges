// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"



class Ball {
    constructor(type) {
    this.ballType = this.checkBall(type);
           }    
    checkBall(type) {
            if(type === undefined) {
                return "regular";
        }else{
            return type;
        }
    }    
};



console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");