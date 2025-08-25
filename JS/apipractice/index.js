const container = document.getElementById('card-container');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Fill card content
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description.substring(0, 100)}...</p>
        <p class="price">$${product.price}</p>
      `;

      // Add to container
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));
