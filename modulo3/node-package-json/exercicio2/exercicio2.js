const value1 = Number(process.argv[2])
const value2 = Number(process.argv[4])
const operation = process.argv[3]

switch(operation){
    case "soma": 
    console.log(`O resultado de sua operação matemática é ${value1 + value2}`);
    break;

    case"subtracao":
    console.log(`O resultado de sua operação matemática é ${value1 - value2}`);
    break;

    case"multiplicacao":
    console.log(`O resultado de sua operação matemática é ${value1 * value2}`);
    break;

    case"divisao":
    console.log(`O resultado de sua operação matemática é ${value1 / value2}`);
    break;
}
