let n = -1;
let table = document.querySelector(".table-sm");
let thead = table.insertRow();
let head1 = thead.insertCell();
let head2 = thead.insertCell();
let textHead1 = document.createTextNode("n!");
let textHead2 = document.createTextNode("eredmény");
head1.appendChild(textHead1);
head2.appendChild(textHead2);
thead.className = "text-center font-weight-bold alert-primary";

for (let i = 0; i <= 20; i++) {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.className = "text-center alert-dark";
    n += 1;
    let text1 = document.createTextNode(n + "!");
    cell1.appendChild(text1);

    function fact(i) {
        if (i == 0 || i == 1) {
            return 1;
        }
        return fact(i - 1) * i;
    }

    let cell2 = row.insertCell();
    cell2.className = "text-right alert-dark";
    let text2 = document.createTextNode(fact(i));
    cell2.appendChild(text2);
}