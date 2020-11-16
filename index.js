console.log("Function declaring using name and pecentage");
function isPerct(name, percentage){
    if(percentage < 35){
        console.log("FAIL");
    } else if(percentage == 35){
        console.log("JUST PASS");
    } else if(percentage < 65 ){
        console.log("SECOND CLASS");
    } else if(percentage < 85){
        console.log("FIRST CLASS");
    } else{
        console.log("DISTINCTION");
    }
    console.log("The percentage of " +name+ "is" +percentage);
}
isPerct("Pluto", 20);
isPerct("Sun",35);
isPerct("Moon", 60);
isPerct("Jupiter",70);
isPerct("Earth", 90);


console.log("Function declaring using name and pecentage");
function ismarks(name, marks){
marks< 35? console.log( name + " isFAIL") : console.log( name + " is PASS");
}
ismarks("Arjun", 30);
ismarks("Karn", 90)


console.log("Function converting from celsius to Fahernite ");

function inCelsius(temp){
    fahr = temp * 9/5 + 32 ;
    console.log("The Temparature in Fahrenheit" +fahr);
    console.log("The Temparature in Celsius" +temp);
}

inCelsius(0);
inCelsius(-1);
inCelsius(1);