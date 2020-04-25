// tabs https://codepen.io/rafaelavlucas/pen/MLKGba?editors=1010

let tabLinks = document.querySelectorAll(".tab-links"),
    tabContent = document.querySelectorAll(".tab-content");


tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    let btnTarget = el.currentTarget,
        idTab = btnTarget.dataset.tab;

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + idTab).classList.add("active");

    btnTarget.classList.add("active");
}
