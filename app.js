console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    portfilio: [],
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
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    },
    {
        name: 'chef',
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


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

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
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Portfolio Contains: </h2> 
    <ul>${
        barbie.portfilio.map((item => {
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
}

barbie.render()



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

bdhButton.addEventListener('click', ()=>{{
    if(barbie.wallet >= barbieDreamHouse.price){
        barbie.portfilio.push(barbieDreamHouse);
        barbie.wallet -= barbieDreamHouse.price;
        barbie.career.income += barbieDreamHouse.income;
        barbie.render();
    } else {
        alert('We know you really ain\'t got it like that');
    }
}})

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

