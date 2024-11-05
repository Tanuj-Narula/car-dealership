const container = document.getElementById('product-container');
const searchInput = document.querySelectorAll("[data-search]");

const renderProducts = (filteredProducts) => {
  container.innerHTML = ''; 

  filteredProducts.forEach(product => {
    const productLink = document.createElement('a');
    productLink.href = `checkout.html?product=${encodeURIComponent(product.name)}`; 
    productLink.classList.add('product-link'); 

    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productDiv.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = product.name;
    productDiv.appendChild(name);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating.stars} (${product.rating.count} reviews)`;
    productDiv.appendChild(rating);

    const price = document.createElement('p');
    price.textContent = `₹ ${product.priceRupees}`;
    productDiv.appendChild(price);

    productLink.appendChild(productDiv);

    container.appendChild(productLink);
  });
};

renderProducts(products);



document.querySelectorAll(".search-container button").forEach((button)=>{
  button.addEventListener("click", ()=>{
    searchInput.forEach((input)=>{
      input.value = "";
    })
  })
})

searchInput.forEach((input)=>{
  input.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
    renderProducts(filteredProducts);

    if(filteredProducts.length === 0){
      container.innerHTML = `<h1 style="color: white; text-align: center; padding: 50px 0px; width:100vw;">Product not found!</h1>`
      setTimeout(()=>{
        renderProducts(products);
      },2000)
    }
  });
})

function toggleHeaders() {
  const oldHeader = document.querySelector('.header');
  const oldHeader2 = document.querySelector(".header2");
  const newHeader = document.querySelector('.new-header');

  if(window.scrollY > 315){
    oldHeader.style.opacity = 0;
    oldHeader2.style.opacity = 0;
    newHeader.style.display = 'flex';
    newHeader.style.opacity = '1';
    setTimeout(()=>{
      oldHeader.classList.add('hide');
      oldHeader2.classList.add('hide');
      newHeader.classList.remove('hide');
    }, 800);
  }else{
    oldHeader.style.opacity = 1;
    oldHeader2.style.opacity = 1;
    newHeader.style.opacity = 0;
    setTimeout(()=>{
      oldHeader.classList.remove('hide');
      oldHeader2.classList.remove('hide');
      newHeader.classList.add('hide');
    }, 800);
  }
}

window.addEventListener("scroll",()=>{
  toggleHeaders(); 
});
