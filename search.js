document.querySelector(".new-header").classList.remove("hide");

document.querySelector(".new-search-container button").addEventListener('click',()=>{
    let searchBar = document.querySelector("[data-search]");
    let searchValue = searchBar.value.toLowerCase().trim();
    const product = products.find(p => p.name.toLowerCase().includes(searchValue));
    if (product && searchBar.value !== " ") {
        window.location.assign(`checkout.html?product=${encodeURIComponent(product.name)}`);
        searchValue = " ";
        searchBar.value = " ";
    } else {
        window.alert("Product not found"); 
        setTimeout(() => {
            window.location.assign("index.html");
        }, 2000);
    }
})