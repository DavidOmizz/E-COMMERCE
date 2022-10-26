const initialData = {
    items:[
        {
            id: 1,
            name: "Tommy Hilfiger Watch",
            price: "15,000",
            photo: "watch-1.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "watch",
            gender: 'Men'
        },
        {
            id: 2,
            name: "Android Smartwatch",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
            photo : "watch-2.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "watch",
            gender: 'Men'

        },
        {
            id: 3,
            name: "Android Smartwatch",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
            photo : "watch-3.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "watch",
            gender: 'Men'

        },
        {
            id: 4,
            name: "Nikee",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80"
            photo: "shoe-1.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Men'
    
        },
        {
            id: 5,
            name: "In the Air",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80"
            photo: "shoe-2.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Men'
        },
        {
            id: 6,
            name: "Nike",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1632497775897-815042a13216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNuZWFrZXJzJTIwb24lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            photo: "shoe-3.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Men'
        },
        {
            id: 7,
            name: "NIKE FREE",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            photo: "shoe-4.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Men'
    
        },
        {
            id: 8,
            name: "Designer Shirt",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            photo: "picc.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shirt",
            gender: 'Men'

        },
        {
            id: 9,
            name: "Black Shirt",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            photo: "shirt-4.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shirt",
            gender: 'Men'
        },
        {
            id: 10,
            name: "Cool shirt",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shirt-5.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shirt",
            gender: 'Men'
    
        },
        {
            id: 11,
            name: "Black shirt",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shirt-6.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shirt",
            gender: 'Men'
    
        },
        {
            id: 12,
            name: "Nice Watch",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "watch-4.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "watch",
            gender: 'Men'
    
        },
        {
            id: 13,
            name: "Designer Shoe",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-5.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shirt",
            gender: 'Women'
    
        },
        {
            id: 14,
            name: "Ferragamo BOXYZ bag",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "cloth-2.jpg",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "cloth",
            gender: 'Women'
    
        },
        {
            id: 15,
            name: "Green",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "cloth-1.jpg",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "cloth",
            gender: 'Women'
    
        },
        {
            id: 16,
            name: "Brown Men Shoe",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-15.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Men'
    
        },
        {
            id: 17,
            name: "Black Heels",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-14.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Women'
    
        },
        {
            id: 18,
            name: "Designer shoe",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-13.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Women'
    
        },
        {
            id: 19,
            name: "Ferragamo BOXYZ",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-12.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Women'
    
        },
        {
            id: 20,
            name: "Ferragamo BOXYZ bag",
            price: "15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "shoe-8.png",
            info : "This is me explaining what is not and I'm trying to make it fictional enough so mr ernste will not complain of lorem ipsum and trying hard to do my best and make thiongs go well and cool. I guess by now i have enough words for my info",
            category: "shoe",
            gender: 'Women'
    
        },
    ],
    cartitem: []
}

function itemReducer (state=initialData, action) {
    switch(action.type){
        case "addCart": return{
            ...state,
            cartitem: [...state.cartitem, action.payload],
        }
        case "delCart": return{
            ...state,
            cartitem: state.cartitem.filter((delItem)=>delItem !== action.payload)
        }
        default: {
            return state
        }
    }
}

export default itemReducer