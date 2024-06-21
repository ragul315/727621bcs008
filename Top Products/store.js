const mockData = {
    products: {
        AMZ: {
            Laptop: [
                { id: "AMZ1", productName: "Laptop 1", price: 2236, rating: 4.7, discount: 63, availability: "yes" },
                { id: "AMZ2", productName: "Laptop 13", price: 1244, rating: 4.5, discount: 45, availability: "out-of-stock" },
                { id: "AMZ3", productName: "Laptop 3", price: 9102, rating: 4.44, discount: 98, availability: "out-of-stock" }
            ],
            Phone: [
                { id: "AMZ8", productName: "Phone X", price: 999, rating: 4.8, discount: 20, availability: "yes" },
                { id: "AMZ9", productName: "Phone Y", price: 799, rating: 4.5, discount: 15, availability: "yes" },
                { id: "AMZ10", productName: "Phone Z", price: 1299, rating: 4.6, discount: 25, availability: "out-of-stock" }
            ]
            
        },
        SNP: {
            Laptop: [
                { id: "SNP1", productName: "Laptop SNP1", price: 2000, rating: 4.5, discount: 50, availability: "yes" },
                { id: "SNP2", productName: "Laptop SNP2", price: 1800, rating: 4.2, discount: 40, availability: "yes" },
                { id: "SNP3", productName: "Laptop SNP3", price: 2200, rating: 4.8, discount: 60, availability: "out-of-stock" }
            ],
            Phone: [
                
            ]

        },
        MYN: {
            Laptop: [
                { id: "MYN1", productName: "Laptop MYN1", price: 2500, rating: 4.6, discount: 55, availability: "yes" },
                { id: "MYN2", productName: "Laptop MYN2", price: 2300, rating: 4.3, discount: 48, availability: "out-of-stock" },
                { id: "MYN3", productName: "Laptop MYN3", price: 2800, rating: 4.9, discount: 62, availability: "yes" }
            ],
            Tablet: [
                { id: "MYN4", productName: "Tablet MYN4", price: 799, rating: 4.7, discount: 30, availability: "yes" },
                { id: "MYN5", productName: "Tablet MYN5", price: 599, rating: 4.5, discount: 25, availability: "yes" }
            ]
            
        },
        AZO: {
            Laptop: [
                { id: "AZO1", productName: "Laptop AZO1", price: 2100, rating: 4.4, discount: 45, availability: "yes" },
                { id: "AZO2", productName: "Laptop AZO2", price: 1900, rating: 4.1, discount: 38, availability: "out-of-stock" }
            ],
            Earphone: [
                { id: "AZO3", productName: "Earphone AZO3", price: 99, rating: 4.6, discount: 15, availability: "yes" },
                { id: "AZO4", productName: "Earphone AZO4", price: 79, rating: 4.4, discount: 10, availability: "yes" }
            ]
          
        }
    }
};

module.exports = mockData;
