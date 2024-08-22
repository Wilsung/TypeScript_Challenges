//Enumerator
enum LoadingState {
    beforeLoad = "beforeLoad", // defaults to 0 if not set
    loading = "loading", // defalts to 1 if above is not set
    loaded = "loaded" , // defaults to 2 ...
}

const isLoading = (state: string) => state === LoadingState.loading;

//Literal Types
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0;
    for (let i =0; i<dice; i++){
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}

//Sum of rolling a dice 3 times.
console.log(rollDice(3))


function sendEvent(name: 'addToCart', data: { productId: number}):void;
function sendEvent(name: 'checkout', data: { cart: number}):void;
function sendEvent(name: string, data: unknown): void{
    console.log(`${name}: ${JSON.stringify(data)}`)
}

//This matched the literal type of the overloaded function above.
sendEvent('addToCart', { productId: 123 })