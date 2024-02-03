var diplayInput = document.getElementById("dispInput");

function getval(val) {
    diplayInput.value += val;
}
function calculator() {
    diplayInput.value = eval(diplayInput.value);
}
function clearAll() {
    diplayInput.value = "";
}