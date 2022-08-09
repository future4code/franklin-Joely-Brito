const value1 = Number(process.argv[2])
const value2 = Number(process.argv[4])
const operation = process.argv[3]

switch(operation){
    case "soma": 
    console.log('\x1b[36m%s\x1b[0m', `O resultado de sua operação matemática é ${value1 + value2}`);
    break;

    case"subtracao":
    console.log('\x1b[36m%s\x1b[0m', `O resultado de sua operação matemática é ${value1 - value2}`);
    break;

    case"multiplicacao":
    console.log('\x1b[36m%s\x1b[0m', `O resultado de sua operação matemática é ${value1 * value2}`);
    break;

    case"divisao":
    console.log('\x1b[36m%s\x1b[0m', `O resultado de sua operação matemática é ${value1 / value2}`);
    break;
}
