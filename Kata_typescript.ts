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
//console.log(stringToArray("Изключително интересни срещи ни очакват тази вечер в осмия кръг на Евролигата."));



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





// +++++ KATA7 - If you can't sleep, just count sheeps!! 

export function countSheep(num: number): string {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}




export function countSheepArr(num: number): string {
    return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}



// KATA8 - Write a function which converts the input string to uppercase.

export function makeUpperCase(str: string): string {
    return str.toUpperCase();
}



// KATA9 - Will you make it?

export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    if (mpg * fuelLeft >= distance) {
        return true;
    } else { return false; }
};


export const zeroFuel2 = (distance: number, mpg: number, fuelLeft: number): boolean => {
   return mpg * fuelLeft >= distance
};

//console.log(zeroFuel2(60,25,2));


// KATA 10 - Breaking chocolate problem

// n - rows
// m - columns

export function breakChocolate(n: number, m: number): number {
  // If input is invalid or no chocolate exists, return 0
  if (n <= 0 || m <= 0) return 0;

  // Minimum breaks needed = total squares - 1
  return n * m - 1;
}

//console.log(breakChocolate(7,4));



// KATA 11 - Descending Order

export function descendingOrder(n: number): number {
  return parseInt(          // Converts the string back to a number.
    n
      .toString()  //  Converts the number to a string so we can manipulate digits.
      .split('')   //  Turns it into an array of individual characters (digits).
      .sort((a, b) => Number(b) - Number(a))  // Sorts digits in descending numerical order.
      .join('')    // Joins them back into a string
  );
}

//console.log(descendingOrder(2384692));



// KATA12 