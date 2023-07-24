export default function returnHowManyArguments(arg1, ...args) {

    return args.length() + 1 ? args : 1
}