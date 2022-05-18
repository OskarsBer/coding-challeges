// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// P: Write function that takes in persons weight and height as arguments. Then calculates person's BMI according to given formula. Returns BMI string.


function bmi(weight, height) {
    const bodyMassIndex = weight / (height**2);
    if(bodyMassIndex <= 18.5){
        return "Underweight";
    }else if(bodyMassIndex <= 25.0){
        return "Normal";
    }else if(bodyMassIndex <= 30.0){
        return "Overweight"
    }else{
    return "Obese";
    }
}


console.log(bmi(80, 1.80), "Normal")