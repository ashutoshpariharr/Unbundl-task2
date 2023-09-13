// Sample data for the header
const headerData = {
    title: "CarDekho",
};


// Sample data for banners
const bannersData = [
    {
        caption: "See the below new cars and models."
    },
    {
        caption: "Discover the Best Deals",
    },
    {
        caption: "Experience Luxury Cars",
    },
];

// Sample data for most searched cars
const mostSearchedData = [
    {
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde velit accusantium aperiam quo natus possimus nam?",
        imageSrc: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde velit accusantium aperiam quo natus possimus nam?",
        imageSrc: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Step inside, and you'll find a tech-savvy interior that's loaded with features. The audi model comes with a user-frindly infoatainment.",
        imageSrc: "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

// Sample data for latest cars
const latestCarsData = [
    {
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde velit accusantium aperiam quo natus possimus nam? dummy",
        imageSrc: "https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde velit accusantium aperiam quo natus possimus nam?",
        imageSrc: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde velit accusantium aperiam quo natus possimus nam?",
        imageSrc: "https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

// Function to populate header
function populateHeader() {
    const headerElement = document.querySelector("header");
    headerElement.innerHTML = `
    <div class="logo-items">
    <h1>${headerData.title}</h1>
    </div>
    `;
}

// Function to populate banners
const banner = document.getElementsByClassName('benner');

function populateBanners() {
    const bannerSection = document.querySelector(".banner");
    const bannerHTML = bannersData.map((banner) => `
        <div class="banner-item">
            <p>${banner.caption}</p>
        </div>
    `).join('');
    bannerSection.innerHTML = bannerHTML;
}

// Function to populate most searched cars
function populateMostSearchedCars() {
    const mostSearchedSection = document.querySelector(".most-searched");
    const mostSearchedHTML = mostSearchedData.map((car) => `
        <div class="car-item">
            <img src="${car.imageSrc}" alt="${car.name}">
            <p>${car.name}</p>
        </div>
    `).join('');
    mostSearchedSection.innerHTML = mostSearchedHTML;
}

// Function to populate latest cars
function populateLatestCars() {
    const latestCarsSection = document.querySelector(".latest-cars");
    const latestCarsHTML = latestCarsData.map((car) => `
        <div class="car-item">
            <img src="${car.imageSrc}" alt="${car.name}">
            <p>${car.name}</p>
        </div>
    `).join('');
    latestCarsSection.innerHTML = latestCarsHTML;
}

// Call the functions to populate content

function exploreData () {
    populateHeader();
    populateBanners();
    populateMostSearchedCars();
    populateLatestCars();
    console.log("shree ram");
};