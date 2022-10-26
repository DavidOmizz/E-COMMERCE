

const initialData = {
    watch: [
        {
            id: 1,
            name: "Tommy Hilfiger Watch",
            price: "N15,000",
            photo: "watch1.jpg"
        },
        {
            id: 2,
            name: "Android Smartwatch",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
            photo : "watch2.jpg"
        },
        {
            id: 3,
            name: "smart watch",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80"
            photo: "shoe1.jpg"
        },
        {
            id: 4,
            name: "In the Air",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80"
            photo: "shoe2.jpg"
        },
        {
            id: 5,
            name: "smart watch",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1632497775897-815042a13216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNuZWFrZXJzJTIwb24lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            photo: "shoe3.jpg"
        },
        {
            id: 6,
            name: "NIKE FREE",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            photo: "shoe1.jpg"
        },
        {
            id: 7,
            name: "He's Her Lobster Black and White Fashion Accessory Standard Tote Bag",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            photo: "pic1.png"
        },
        {
            id: 8,
            name: "Leather back pack by Wiser by the Mile",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            photo: "pic2.png"
        },
        {
            id: 9,
            name: "Ferragamo BOXYZ bag",
            price: "N15,000",
            // photo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            photo: "pic.png"
        },
    ],
    count: []
}

function ProductReducer(state= initialData, action) {

    switch(action.type){
        case "ADD": {
                return{
                ...state,
                count: [...state.count, ++state.count],
            }
        }
        default: {
            return state
        }
    }
    
}

export default ProductReducer