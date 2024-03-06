"use strict";

const productData = [
    {
        laptop: {
            LAP1: {
                productId: "LAP1",
                category: "laptop",
                company: "Acer",
                name: "Acer Nitro 5",
                price: 100000,
                quantity: 2,
                availability: 1,
            },

            LAP2: {
                productId: "LAP2",
                category: "laptop",
                company: "ROG",
                name: "ROG 6",
                price: 70000,
                quantity: 3,
                availability: 0,
            },
            LAP3: {
                productId: "LAP3",
                category: "laptop",
                company: "MSI",
                name: "MSI",
                price: 150000,
                quantity: 10,
                availability: 1,
            },
        },
        mobile: {
            MOB1: {
                productId: "MOB1",
                category: "mobile",
                company: "Oneplus",
                name: "Oneplus 6t",
                price: 40000,
                quantity: 8,
                availability: 0,
            },
            MOB2: {
                productId: "MOB2",
                category: "mobile",
                company: "Apple",
                name: "iPhone 16",
                price: 140000,
                quantity: 5,
                availability: 1,
            },
            MOB3: {
                productId: "MOB3",
                category: "mobile",
                company: "Samsung",
                name: "Samsung s23",
                price: 100000,
                quantity: 10,
                availability: 0,
            },
        },
    },
];

function searchGlobal(productData, filter) {
    let data = [];
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                let prod = true;
                for (let type in Object.keys(filter)) {
                    switch (Object.keys(filter)[type]) {
                        case "name":
                            for (let nam in filter.name) {
                                if (!productDataIJ[k].name.toLowerCase().includes(filter.name[nam].toLowerCase())) {
                                    prod = false;
                                }
                            }
                            break;

                        case "category":
                            for (let cat in filter.category) {
                                if (!productDataIJ[k].category.toLowerCase().includes(filter.category[cat].toLowerCase())) {
                                    prod = false;
                                }
                            }
                            break;

                        case "company":
                            for (let com in filter.company) {
                                if (!productDataIJ[k].company.toLowerCase().includes(filter.company[com].toLowerCase())) {
                                    prod = false;
                                }
                            }
                            break;

                        case "availability":
                            for (let avail in filter.availability) {
                                if (!productDataIJ[k].availability == filter.availability[avail]) {
                                    prod = false;
                                }
                            }
                            break;

                        case "price":
                            switch (filter.price.compare) {
                                case "lessThan":
                                    if (!(productDataIJ[k].price < filter.price.amount)) {
                                        prod = false;
                                    }
                                    break;
                                case "greaterThan":
                                    if (!(productDataIJ[k].price > filter.price.amount)) {
                                        prod = false;
                                    }
                                    break;
                                case "equal":
                                    if (!(productDataIJ[k].price === filter.price.amount)) {
                                        prod = false;
                                    }
                                    break;
                                case "greaterThanEqualTo":
                                    if (!(productDataIJ[k].price >= filter.price.amount)) {
                                        prod = false;
                                    }
                                    break;
                                case "lessThanEqualTo":
                                    if (!(productDataIJ[k].price <= filter.price.amount)) {
                                        prod = false;
                                    }
                                    break;
                            }
                            break;

                        case "quantity":
                            for (let qty in filter.quantity) {
                                if (!productDataIJ[k].quantity >= filter.quantity[qty]) {
                                    prod = false;
                                }
                            }
                            break;
                    }
                    if (!prod) {
                        break;
                    }
                }
                if (prod) {
                    data.push(productDataIJ[k]);
                }
            }
        }
    }
    return data;
}
let enterFilter = {
    availability: [],
    category: ["laptop"],
    company: [""],
    name: [],
    quantity: [],
    price: {
        amount: 100000,
        compare: "lessThan",
    },
};

let searchFunction = searchGlobal(productData, enterFilter);
console.log(searchFunction);

// let names = (data) => {
//     console.log(data[0]);
// };
// names(productData);

// function getNestedItems(array, category, id, name) {
//     return array.map((item) => {
//         return item[category][id];
//     });
// }

// console.log(getNestedItems(productData, "laptop", "LAP2"));
