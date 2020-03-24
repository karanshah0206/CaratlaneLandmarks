var flag = 0;
document.getElementById("burger").addEventListener("click", burgout);
document.getElementById("burger1").addEventListener("click", burgin);
function burgout() {
    document.getElementById("burglist").classList.remove('nahidikhta');
    document.getElementById("burglist").classList.add('dikhta');
    document.getElementById("burger1").classList.remove('nahidikhta');
    document.getElementById("burger1").classList.add('dikhta');
    document.getElementById("burger").classList.remove('dikhta');
    document.getElementById("burger").classList.add('nahidikhta');
    flag = 1;
    setTimeout(function(){document.getElementById("runner").addEventListener("click", burginsp);}, 100);
}
function burgin() {
    document.getElementById("burglist").classList.remove('dikhta');
    document.getElementById("burglist").classList.add('nahidikhta');
    document.getElementById("burger1").classList.remove('dikhta');
    document.getElementById("burger1").classList.add('nahidikhta');
    document.getElementById("burger").classList.remove('nahidikhta');
    document.getElementById("burger").classList.add('dikhta');
    flag = 0;
    document.getElementById("runner").removeEventListener("click", burginsp);
}
function burginsp() {
    if (flag == 1) {
            burgin();
    }
}