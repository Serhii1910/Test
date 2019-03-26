const iMax = 10;
const jMax = 10;
const dX = 50;
const dY = 50;

function fieldDrower(rows, columns) {
    console.log("call");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (i === 0 || j === 0 || i === iMax - 1 || j === jMax - 1) {
                $('body').append('<div style="position: absolute" data-x="' + i + '" data-y="' + j + '" data-type="#" data-envir="1">#</div>');
            }
            

        }
    }
}
function setToPos() {
    $('div').each(function (n, e) {
        let el = $(e);
        let x = dX * el.data('x') ;
        let y = dY * el.data('y');
        el.offset({ top: x, left: y });
    });
}
console.log('ax');
$(document).ready(function () {
    fieldDrower(10, 10);
    setToPos();
});