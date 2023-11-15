console.log('App is connected');

let sellBtns;

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    portfolio: [],
    garage: [],
    wallet: 0
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'Lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'Software Engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'Doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'Influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    },
    {
        name: 'Chef',
        description: 'cooks trash food for people'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 5 ; i > 0; i--){
 const job = careerDescriptions[careerDescriptions.length - i];
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

//change career functionality
const careerSelect = document.getElementById('career-select');
careers.forEach((career)=>{
    const option = document.createElement('option');
    option.value = career.id;
    option.innerText = career.name;
    careerSelect.appendChild(option);
})

careerSelect.addEventListener('change', (event)=>{
    const career = careers.find((career)=>{
        return career.id === event.target.value
    })
    barbie.career = career;
    barbie.render();
})

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const pradaBoots = new Clothing('Prada Boots', 'Prada', 'black', 'boots', '5', 3450 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Louboutin', 'black', 'shoes', '6', 3000)





// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>
            <button class="sell-btn">Sell</button>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Portfolio Contains: </h2> 
    <ul>${
        barbie.portfolio.map((item => {
            return `<li>
            ${barbie.name} has a ${item.name}
            located in ${item.location}
            that is worth $${item.price} and
            brings in $${item.income} a week.
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Garage Contains: </h2> 
    <ul>${
        barbie.garage.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color}
            ${item.make} ${item.model}
            that is worth $${item.price} and
            takes out $${item.income} a week.
            </li>`
        })).join('')
    }</ul>
    </div>
`;

sellBtns = document.querySelectorAll('.sell-btn');
console.log(sellBtns);
sellBtnListener(sellBtns);
}

barbie.render();

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})

//prada boots functionality

const pbButton = document.getElementById('prada-boots');

pbButton.addEventListener('click', ()=>{
    if(barbie.wallet >= pradaBoots.price){
        barbie.wardrobe.push(pradaBoots);
        barbie.wallet -= pradaBoots.price;
        barbie.render();
    } else {
        alert('We know you really ain\'t got it like that');
    }
})

//red bottoms functionality

const rbButton = document.getElementById('red-bottoms');

rbButton.addEventListener('click', ()=>{
    if(barbie.wallet >= redBottoms.price){
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
    } else {
        alert('We know you really ain\'t got it like that');
    }
})

const sellRbButton = document.getElementById('rb-sell');

sellRbButton.addEventListener('click', () => {
    const index = barbie.wardrobe.indexOf(redBottoms);
    if (index !== -1) {
        barbie.wardrobe = barbie.wardrobe.slice(0, index).concat(barbie.wardrobe.slice(index + 1));
        barbie.wallet += redBottoms.price * (Math.floor(Math.random() * 1.3 + 0.7)+1)
        barbie.render();
    } else {
        alert("You do not have any Red Bottom items to sell!");
    }
});

//property functionality

class Property {
    constructor(name, location, price, mortgage, income) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.mortgage = mortgage;
        this.income = income
    }
}

const barbieDreamHouse = new Property('Barbie Dream House', 'Malibu', 50000, 3000, 500);

const bdhButton = document.getElementById('barbie-dream-house');

bdhButton.addEventListener('click', ()=>{
    if(barbie.wallet >= barbieDreamHouse.price){
        barbie.portfolio.push(barbieDreamHouse);
        barbie.wallet -= barbieDreamHouse.price;
        barbie.career.income += barbieDreamHouse.income;
        barbie.render();
    } else {
        alert('We know you really ain\'t got it like that');
    }
})

const sellRentalButton = document.getElementById('rental-sell');

sellRentalButton.addEventListener('click', ()=>{
    if(barbie.portfolio.includes(barbieDreamHouse)){
        barbie.portfolio.pop(barbieDreamHouse);
        barbie.wallet += barbieDreamHouse.price * (Math.floor(Math.random() * 1.3 + 0.7)+1);
        barbie.career.income -= barbieDreamHouse.income;
        barbie.render();
    } else {
        alert("You do not have any Portfolio items to sell!")
    }
})


//selling wardrobe functionality

const sellWardrobe = document.getElementById('sell-clothes');

sellWardrobe.addEventListener('click', ()=>{
    if(barbie.wardrobe.length > 0){
        const item = barbie.wardrobe.pop();
        const randomMultiplier = Math.floor(Math.random() * 1.3 + 0.7) + 1;
        barbie.wallet += item.price * randomMultiplier;
        barbie.render();
    } else {
        alert('You ain\'t got no clothes to sell!');
    }
})

//car functionality

class Car {
    constructor(make, model, color, price, income){
        this.make = make;
        this.model = model;
        this.color = color;
        this.price = price;
        this.income = income;
    }
}

const pinkTesla = new Car('Tesla', 'Model S', 'pink', 50000, 150);

const ptButton = document.getElementById('buy-tesla');

ptButton.addEventListener('click', ()=>{
    if(barbie.wallet >= pinkTesla.price){
        barbie.garage.push(pinkTesla);
        barbie.wallet -= pinkTesla.price;
        barbie.career.income -= pinkTesla.income;
        barbie.render();
    } else {
        alert('Work harder, you can\'t afford this car!');
    }
})

function sellBtnListener(buttons) {
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", ()=> {            
            sellItem(index)
        })
    })
}


function sellItem(itemIdx) {

    // calculate sell price

    const randomMultiplier = Math.floor(Math.random() * 1.3 + 0.7) + 1;
    const earnings = barbie.wardrobe[itemIdx].price * randomMultiplier;
    barbie.wallet += earnings;

    // remove item from wardrobe
    barbie.wardrobe.splice(barbie.wardrobe[itemIdx],1);
    console.log(barbie.wardrobe);

    barbie.render();




}
