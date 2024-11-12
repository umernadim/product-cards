const products = [
    {
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$40",
        image: "https://i.pinimg.com/564x/3f/aa/c2/3faac2dc9257df26604dcb8304994d40.jpg",
        ratings: "(137 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$34",
        image: "https://i.pinimg.com/564x/ee/66/e3/ee66e3b3439adb3bf40459ff094b696a.jpg",
        ratings: "(140 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$40",
        image: "https://i.pinimg.com/564x/ba/94/a2/ba94a29bdc80c2fad58beba8fda6e6c8.jpg",
        ratings: "(129 ratings)",
    }, {
        title: "Ceiling Fan",
        description: "A perfect blend of functionality and design.",
        price: "$37",
        image: "https://i.pinimg.com/564x/7b/1e/8c/7b1e8c9a9e1d559ac8c39848621b84bc.jpg",
        ratings: "(139 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$35",
        image: "https://i.pinimg.com/564x/3c/14/ca/3c14ca8a7c2dd67c9893086b5f673162.jpg",
        ratings: "(143 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Breathe easy and chill out in style.",
        price: "$37",
        image: "https://i.pinimg.com/564x/6d/3b/5d/6d3b5d7dabd4180bc948879c7f508fc8.jpg",
        ratings: "(147 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$40",
        image: "https://i.pinimg.com/564x/d9/a6/65/d9a6659ea039bef18864bb0490fb43cd.jpg",
        ratings: "(150 ratings)",
    }, {
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$37",
        image: "https://i.pinimg.com/564x/f3/21/e3/f321e302fd07a961096d7c72786be58a.jpg",
        ratings: "(136 ratings)",
    }, {
        title: "Ceiling Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$45",
        image: "https://i.pinimg.com/564x/b3/f5/b4/b3f5b4935ac6a360075fb8b6e73d9921.jpg",
        ratings: "(144 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$39",
        image: "https://i.pinimg.com/474x/be/e7/ee/bee7ee2fb23301333376ddc73561c3a3.jpg",
        ratings: "(133 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$42",
        image: "https://i.pinimg.com/474x/85/51/43/855143fff333ed310d78addcb552368b.jpg",
        ratings: "(128 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Circulate comfort and charm in any room",
        price: "$40",
        image: "https://i.pinimg.com/474x/cf/c3/d1/cfc3d148e7a1d360cfaf536f33ee7f90.jpg",
        ratings: "(140 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$38",
        image: "https://i.pinimg.com/474x/4d/01/6d/4d016d93bd612007cbf057c961b8ae8c.jpg",
        ratings: "(138 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$36",
        image: "https://i.pinimg.com/564x/b8/98/bd/b898bd4ad828875729627aab25b29242.jpg",
        ratings: "(133 ratings)",
    },
    {
        title: "Ceiling Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$44",
        image: "https://i.pinimg.com/474x/c7/34/43/c7344399c222a50c8d83b7945fdd3bd9.jpg",
        ratings: "(130 ratings)",
    },
];


const cardContainer = document.getElementById('card-container');
products.forEach((product, index) => {
    cardContainer.innerHTML += `
        <div class="product-card">
            <div class="image-container">
                <img src="${product.image}">
                <span class="favorite-star">❤</span>
            </div>
            <div class="product-info">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <div class="price-order">
                    <span class="price">${product.price}</span>
                    <button class="details" data-index="${index}">Details</button>
                </div>
            </div>
        </div>
    `;
});


// // click event for favorite-card 

function showToast(message) {
    const toast = document.getElementById('sample-toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); 
}

document.addEventListener('DOMContentLoaded', () => {
    const favoriteStars = document.querySelectorAll('.favorite-star');
    favoriteStars.forEach(star => {
        star.addEventListener('click', function () {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                showToast("Added to your favorites! ❤️");
            } else {
                showToast("Removed from favorites. 💔");
            }
        });
    });

    const detailsBtns = document.querySelectorAll('.details');
    detailsBtns.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            openModal(products[index]);
        });
    });

    document.getElementById('cross-icon').addEventListener('click', closeModal);

    modalContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('container-description')) {
            closeModal();
        }
    });
});

// // Open modal function
const modalContainer = document.querySelector('.container-description');
const modalImage = document.querySelector('.product-img img');
const modalTitle = document.querySelector('.description-part h2');
const modalPrice = document.querySelector('.description-part .price');
const modalDescription = document.querySelector('.img-description');
const modalRatings = document.querySelector('.ratings-count');

function openModal(product) {
    modalImage.src = product.image;
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    modalRatings.textContent = product.ratings;
    modalContainer.classList.add('active');
    document.body.classList.add('blur-background');
}

// // Close modal function
function closeModal() {
    modalContainer.classList.remove('active');
    document.body.classList.remove('blur-background');
}

// // click event for addd-to-cart-button
document.querySelector('#cart-btn').addEventListener('click', () => {
    alert("Got it! Your item has been added to the cart 🛒");
});