const theme=document.getElementById("theme-select")
if (localStorage.getItem('darkmode') === "active") {
    document.body.classList.add('darkmode');
    theme.value = "dark";
} else {
    document.body.classList.remove('darkmode');
    theme.value = "light";
}

theme.addEventListener("change", function () {
    if (theme.value === "dark") {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    } else {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'inactive'); 
    }
});
