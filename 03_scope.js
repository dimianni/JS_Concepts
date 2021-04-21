/*-----------------------------------------------------------------------------*/
/* Scope (видимость переменных)
-------------------------------------------------------------------------------*/
// Global and local

function funcA(){
    let a = 1;

    function funcB() {
        let b = 2;

        function funcC(params) {
            let c = 3;

            console.log("funcC:", a, b, c);
        }

        funcC();
        console.log("funcB:", a, b);
    }

    funcB();
    console.log("funcA:", a);
}

funcA();

{
    let i = 0;
    var j = 0;
}

console.log(i); // not defined
console.log(j); // 0