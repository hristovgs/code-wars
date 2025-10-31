// ++++++++ KATA1 - Function 1 - hello world 
// export
function greet(): string {
    return "hello world!";
}




// ++++++++ KATA2 -  Basic Mathematical Operations

export function basicOp(operation: string, value1: number, value2: number): number {
    let result: number;

    if (operation == "+") {
        result = value1 + value2;
        return result;
    } else if (operation == "-") {
        result = value1 - value2;
        return result;
    } else if (operation == "*") {
        result = value1 * value2;
        return result;
    } else {
        result = value1 / value2;
        return result;
    }
}

//console.log(basicOp("*",4,2));



// +++++++ KATA3 - Convert a string to an array - function to split a string and convert it into an array of words.

function stringToArray(s: string): string[] {
    return s.split(" ");
}
console.log(stringToArray("Изключително интересни срещи ни очакват тази вечер в осмия кръг на Евролигата."));



// +++++++ KATA4 - Is he gonna survive

export function hero(bullets: number, dragons: number): boolean {
    if (bullets >= 2 * dragons) { return true; }
    else { return false; }

}



// +++++++ KATA5 - Convert a String to a Number!

export function stringToNumber(str: string): number {
    return Number(str);
}



// +++++ KATA6 - Sum of positive in an array

export function positiveSum(arr: number[]): number {
    let sum: number = 0;
    arr.filter((num: number) => {
        if (num > 0) {
            sum = sum + num;
        };
    });
    return sum;
}

