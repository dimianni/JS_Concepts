function counter() {
    var i = 0;
    setInterval(function () {
        if (i == 5) {
            clearInterval(this); // this refers to interval
        } else {
            i++
            console.log(i);
        }
    }, 1000);
}

counter()