const products = [
    {
        id: 1,
        title: "MacBook Pro",
        price: 99999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 2,
        title: "iPhone 13 Pro",
        price: 79999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 3,
        title: "The Art of Programming",
        price: 1499,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500"
    },
    {
        id: 4,
        title: "Samsung Galaxy S21",
        price: 69999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500"
    },
    {
        id: 5,
        title: "iPad Air",
        price: 49999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },
    {
        id: 6,
        title: "Gaming Laptop",
        price: 119999,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500"
    },
    {
        id: 7,
        title: "Wireless Headphones",
        price: 15999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 8,
        title: "Smart Watch",
        price: 24999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 9,
        title: "Digital Camera",
        price: 59999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 10,
        title: "Portable Speaker",
        price: 9999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    return card;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.title} added to cart!`);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    products.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

// Initialize the product grid when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProducts);
