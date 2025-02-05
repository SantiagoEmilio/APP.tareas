function header() {
    let header = document.createElement('header');
    header.className = "div-header";

    let logo = document.createElement('img');
    logo.src = "https://w7.pngwing.com/pngs/514/837/png-transparent-snoopy-illustration-snoopy-charlie-brown-wood-peanuts-snoopy-miscellaneous-white-text-thumbnail.png";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "pokis";
    header.appendChild(h1);

    return header;


}
export { header };