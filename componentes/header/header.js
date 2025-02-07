function header() {
    let header = document.createElement('header');
    header.classList.add("header"); 

    let logo = document.createElement('img');
    logo.src = "https://www.clipartmax.com/png/middle/102-1027295_preview-1-snoopy-blanco-y-negro.png";
    logo.classList.add("logo");
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "pokis";
    header.appendChild(h1);

    return header;
}

export { header };
