let i = 0;
let image = document.getElementById("mic");
let imgs = new Array('style/image/micoff.svg', 'style/image/micon.svg');
function imgsrc() {
    if (i == 2) {
        i = 0
    }
    image.src = imgs[i];
    i++;
};

let h = 0;
let imageh = document.getElementById("headp");
let imgsh = new Array('style/image/headoff.svg', 'style/image/headon.svg');
function headp() {
    if (h == 2) {
        h = 0
    }
    imageh.src = imgsh[h];
    h++;
};