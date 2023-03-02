import images from "./images"

const feautered = [
    {
        mug: images.Pink,
        title: 'Pink Premium Ceramic',
        price: '$ 99.00 USD',
    },
    {
        mug: images.Golden,
        title: 'Golden Designers Mug',
        price: '$ 99.00 USD',
        markdown: '$60.00'
    },

]

const moreMugs = [
    {
        mug: images.CoffeeOne,
        title: 'Red Love Cup',
        price: '$ 37.00 USD',
        markdown: '$25.00'
    },
    {
        mug: images.CoffeeTwo,
        title: 'Black Tea Cup',
        price: '$ 29.00 USD',
        markdown: '$15.00'
    },
    {
        mug: images.CoffeeThree,
        title: 'B&W Essentials Mug',
        price: '$ 19.00 USD',
    },
    {
        mug: images.CoffeeFour,
        title: 'Winter Style Mug',
        price: '$ 25.00 USD',
    },
    {
        mug: images.CoffeeFive,
        title: 'Ceramic Tea',
        price: '$ 46.00 USD',
    },
    {
        mug: images.CoffeeSix,
        title: 'No Handle Bar Cup',
        price: '$ 34.00 USD',
    },
    {
        mug: images.CoffeeSeven,
        title: 'Espresso Cup by Mugs.co',
        price: '$ 25.00 USD',
    },
    {
        mug: images.CoffeeEight,
        title: 'Pink Premium Ceramic',
        price: '$ 99.00 USD',
    },
 
    {
        mug: images.CoffeeNine,
        title: 'Summer Designer Cup',
        price: '$ 29.00 USD',
    },
 
]

const blog = [
    {
        image: images.blogOne,
        title: "Health Check: why do I get a headache when I haven't had my coffee?",
        miniDescription: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        time: 'October 9, 2022',
        link: '#linkAbou'
    },
    {
        image: images.blogTwo,
        title: 'How long does a cup of coffee keep you awake?',
        miniDescription: 'It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.',
        time: 'October 19, 2022',
        link: '#linkHome'
    },
    {
        image: images.blogThree,
        title: 'Recent research suggests that heavy coffee drinkers may reap health benefits.',
        miniDescription: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        time: 'November 9, 2022',
        link: '#linkContact'
    },
]

const footerLinkOne = [
    {
       link: '/menu',
       name: 'Home',
    },
    {
       link: '/menu',
       name: 'Our Products',
    },
    {
       link: '/menu',
       name: 'About',
    },
    {
       link: '/menu',
       name: 'Contact',
    },
    {
       link: '/menu',
       name: 'Styleguide',
    },
]

const footerLinkTwo = [
    {
        link: '/social',
        name: 'Facebook',
     },
    {
        link: '/social',
        name: 'Instagram',
     },
    {
        link: '/social',
        name: 'Pinterest',
     },
    {
        link: '/social',
        name: 'Twitter',
     },
]

export default {
    feautered,
    moreMugs,
    blog,
    footerLinkOne,
    footerLinkTwo,
}

