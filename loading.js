function showLoading() {
    const div_pai = document.createElement("div");
    div_pai.classList.add("d-flex", "justify-content-center", "loading");

    const div = document.createElement("div");
    div.classList.add("spinner-border",  "text-primary");
    div_pai.appendChild(div)

    const span = document.createElement("span");
    span.classList.add("sr-only");
    span.innerText="Loading...";

    div.appendChild(span);

    document.body.appendChild(div_pai)

    setTimeout(() => hideLoading(), 2000)
}

function hideLoading() {
    const loading = document.getElementsByClassName("loading")
    if (loading.length) {
        loading[0].remove();
    }
}
