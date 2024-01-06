const data = [
    {
        id: 1,
        itemName:"Tandoori Paneer Tikka",
        // https://drive.google.com/file/d/1GDbu2aqZAsRCaWtYxqSXNUp5N3qQDT1y/view?usp=sharing
        img:"https://drive.google.com/uc?export=view&id=1GDbu2aqZAsRCaWtYxqSXNUp5N3qQDT1y",
        category: "Vegetarian Starters",
        price: 70,
        description: "It's spicy, juicy, light and slightly smoky."
    },
    {   id: 2,
        itemName:"Paneer Chilli",
        // img:"https://drive.google.com/file/d/14M-UvfUZuda7kzHRxldMLy8NEvRypTmh/view?usp=sharing",
        // https://drive.google.com/file/d/10dBt6rEf1weGxY1NsMymUtdzQm8V02Qv/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=10dBt6rEf1weGxY1NsMymUtdzQm8V02Qv",
        category: "Vegetarian Starters",
        price: 80,
        description:"crispy fried paneer cubes tossed in a delicious Chinese style sauce."
    },
    {   id: 3,
        itemName:"Pahadi Paneer Tikka",
        // img:"https://drive.google.com/file/d/1MnkUINvggVTfSbxwUYb0kljV8LE9V14d/view?usp=sharing",
        // https://drive.google.com/file/d/1rEabt3MhPUYLXljoXP-yNZj6lbmgOfyW/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1rEabt3MhPUYLXljoXP-yNZj6lbmgOfyW",
        category: "Vegetarian Starters",
        price: 90,
        description:"Pahadi Paneer Tikka is a wonderful tikka with an enticing flavour and the green chillies, mint and coriander ensure a well-balanced taste."
    },
    // {   id: 4,
    //     itemName:"Steamed Rice",
    //     img:"https://drive.google.com/file/d/16ppuVsnJRA15ZndasD7RJfsZRCwWicZ6/view?usp=sharing",
    //     category: "Vegetarian Main Course",
    //     price: "₹ 100",
    //     description:"crispy fried paneer cubes tossed in a delicious Chinese style sauce."
    // }, 
    // {   id: 5,
    //     itemName:"Paneer Lababdar",
    //     img:"https://drive.google.com/file/d/1GNkVyua5nVee2jkx0LcGpDzSiIvnbjEj/view?usp=sharing",
    //     category: "Vegetarian Main Course",
    //     price: "₹ 150"
    // },
    {   id: 4,
        itemName:"Paneer Do Pyaaza",
        // img:"https://drive.google.com/file/d/1tj0PhwCb6YJqeRZsbeVLBGLSvaJX4M0y/view?usp=sharings",
        // https://drive.google.com/file/d/1U2iPJp2pxwt4WjGsVljsl9S5CemhUz-2/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1U2iPJp2pxwt4WjGsVljsl9S5CemhUz-2",
        category: "Vegetarian Main Course",
        price: 170,
        description: "Paneer do pyaza is a rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes."
    },
    {   id: 5,
        itemName:"Paneer Butter Masala",
        // img:"https://drive.google.com/file/d/1YwPZ8dZV5Ld4GhydbQgNFLCogGfu4eyV/view?usp=sharing",
        // https://drive.google.com/file/d/1WpGx9lUOuz29xM45_uKrCv0OQnIvRbUE/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1WpGx9lUOuz29xM45_uKrCv0OQnIvRbUE",
        category: "Vegetarian Main Course",
        price: 200,
        description:"Soft paneer dunked in a creamy, silky, super flavorful and delicious curry."
    },
    {   id: 6,
        itemName:"Butter Naan",
        // img:"https://drive.google.com/file/d/1A1UIUzM0sJA_4oV4Dz5DzPsUlddHMBBb/view?usp=sharing",
        // https://drive.google.com/file/d/1kPwrYo_--LtBBnNpzbK-C1k5_Rwf0l5_/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1kPwrYo_--LtBBnNpzbK-C1k5_Rwf0l5_",
        category: "Vegetarian Main Course",
        price:  50,
        description:"topped with melted butter is a delicious Indian bread."
    },
    {   id: 7,
        itemName:"Butter Tawa Roti",
        // img:"https://drive.google.com/file/d/1rCTrNUHwF4YXv6N7_WBXSSs4Nc7wslMp/view?usp=sharing",
        // https://drive.google.com/file/d/1AoWk6xhOlZNUkRsqTsfrWMgC1crRRNrd/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1AoWk6xhOlZNUkRsqTsfrWMgC1crRRNrd",
        category: "Vegetarian Main Course",
        price: 60,
        description:"delicious and soft"
    },
    {   id: 8,
        itemName:"Kaju Pulao",
        // img:"https://drive.google.com/file/d/1cGYz15R7N3WvDzWga5GAhFzg3YNsmIdz/view?usp=sharing",
        // https://drive.google.com/file/d/1e_9gx9M69pNuGPnfV8rVIlt8rk5GLl_g/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1e_9gx9M69pNuGPnfV8rVIlt8rk5GLl_g",
        category: "Vegetarian Main Course",
        price: 170,
        description:"Kaju Pulao is the  flavorful pulaos that you can ever think of."
    },
    {   id: 9,
        itemName:"Palak Paneer",
        // img:"https://drive.google.com/file/d/1cr6dgx8uibDexypvNzRtyBHrAdB1uYi2/view?usp=sharing",
        // https://drive.google.com/file/d/118TX8u_umY424l2tOvNp3dMDUP05hSJj/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=118TX8u_umY424l2tOvNp3dMDUP05hSJj",
        category: "Vegetarian Main Course",
        price: 180,
        description:"Delicious and healthy!."
    },
    {   id: 10,
        itemName:"Kadai Paneer",
        // img:"https://drive.google.com/file/d/1ac9dbQLG_W3GxM0RVJ_aQbVAl7MbLPMs/view?usp=sharing",
        // https://drive.google.com/file/d/1AvnA4-Wfb0qlVw7EAalO42_IJbsF3RlR/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1AvnA4-Wfb0qlVw7EAalO42_IJbsF3RlR",
        category: "Vegetarian Main Course",
        price: 200,
        description:"Kadai Paneer is a popular paneer recipe where paneer and bell peppers are cooked in a spicy masala."
    },
    {   id: 11,
        itemName:"Chicken Lollipop",
        // img:"https://drive.google.com/file/d/1ERSXWibdJON2APgXJNt83N5N0pCt2E6M/view?usp=sharing",
        // https://drive.google.com/file/d/1b52zdy0eDvHb57QluMJGpaYNZHK1hNyr/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1b52zdy0eDvHb57QluMJGpaYNZHK1hNyr",
        category: "Non-Vegetarian Starters",
        price: 250,
        description:"Lollipop chicken makes a great party appetiser."
    },
    {   id: 12,
        itemName:"Chilli Chicken",
        // img:"https://drive.google.com/file/d/1f5tJEeKRqAZhFcFF7pF5T0UYo3JeNOq6/view?usp=sharing",
        // https://drive.google.com/file/d/1gsh4gNnag_Dl9HejKcNSU5eSlXnGrt67/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1gsh4gNnag_Dl9HejKcNSU5eSlXnGrt67",
        category: "Non-Vegetarian Starters",
        price: 210,
        description:"Chilli Chicken is one of the most famous recipes from Indian Chinese Cuisine."
    },
    {   id: 13,
        itemName:"Spicy Chicken Fry",
        // img:"https://drive.google.com/file/d/1o0FGlMTYrgtvuOuPf_pJB-dfO00-7FIM/view?usp=sharing",
        img:"http://drive.google.com/uc?export=view&id=126PgwqMR7jT9sVPewF7YFcD1Bi7MsSwF",
        category: "Non-Vegetarian Starters",
        price: 180,
        description:"Crunchy and juicy."
    },
    {   id: 14,
        itemName:"Tandoori Chicken",
        // img:"https://drive.google.com/file/d/1AGasOimH3mY82zjVEp1pbVE_alCeaCdA/view?usp=sharing",
        // https://drive.google.com/file/d/12rIqqZZCAO4JMSu-Hc_WgQ97iGlLatdQ/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=12rIqqZZCAO4JMSu-Hc_WgQ97iGlLatdQ",
        category: "Non-Vegetarian Starters",
        price: 200,
        description:"Spicy and flavorful, with a slightly smoky taste."
    },
    {   id: 15,
        itemName:"Chicken Fried Rice",
        // img:"https://drive.google.com/file/d/1upAv2T-OPr9vuR8Jcs_afZyGcYrwA1t0/view?usp=sharing",
        // https://drive.google.com/file/d/1hX3fFd_n7NwJ66dB2pNlE1MjIf3Ciyxw/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1hX3fFd_n7NwJ66dB2pNlE1MjIf3Ciyxw",
        category: "Non-Vegetarian Main Course",
        price: 150,
        description:"Delicious fried rice made with tender chunks of chicken."
    },
    {   id: 16,
        itemName:"Egg Fried Rice",
        // img:"https://drive.google.com/file/d/1f-8WfEHB9TFhglupusY8dQGRRvoxQ8jY/view?usp=sharing",
        // https://drive.google.com/file/d/1UPpwXTREVWmeSprqwSiLbMFYMxYKeY8f/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1UPpwXTREVWmeSprqwSiLbMFYMxYKeY8f",
        category: "Non-Vegetarian Main Course",
        price: 120,
        description:"Delicious fried rice made with tender chunks of chicken."
    },
    {   id: 17,
        itemName:"Hyderabadi Chicken Biryani",
        // img:"https://drive.google.com/file/d/1IxQD2wIRUihdA2AH2-2dfldzM6ZC98Ic/view?usp=sharing",
        img:"http://drive.google.com/uc?export=view&id=1kkGGdS8DcEn2u13Q-khbAhLo2nV2AbBB",
        category: "Non-Vegetarian Main Course",
        price: 180,
        description:"Long-grained rice seasoned with aromatic spices like saffron and stacked with tender and juicy chicken in a rich sauce."
    },
    {   id: 18,
        itemName:"Mutton Handi",
        // img:"https://drive.google.com/file/d/1oDyNmNiQ2o8N1aU1nxwU8vvYrEfEVxWY/view?usp=sharing",
        // https://drive.google.com/file/d/1qkhx_SWhWdN0HbVk9FpfvaneCUYTVdmX/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1qkhx_SWhWdN0HbVk9FpfvaneCUYTVdmX",
        category: "Non-Vegetarian Main Course",
        price: 250,
        description:"Mutton Handi is a very traditional rich stew with lots of spicy and a velvety rich masala gravy."
    },
    // {   id: 19,
    //     itemName:"Blue Lagoon Cocktail",
    //     img:"https://drive.google.com/file/d/1QVbAq1sawWW99_R762q4DwaZ2cKsl06u/view?usp=sharing",
    //     img:"http://drive.google.com/uc?export=view&id=1QVbAq1sawWW99_R762q4DwaZ2cKsl06u",
    //     category: "Beverage",
    //     price: 70,
    //     description:"Blue Lagoon is a combination of Blue Curacao + Lemonade made to impress you."
    // },
    {   id: 20,
        itemName:"Black Cola Mojito",
        // img:"https://drive.google.com/file/d/1xnMgeZyUv-_2JuowtEYplGFwpIjEF2Qv/view?usp=sharing",
        // https://drive.google.com/file/d/1bDdTbB4Nckp1-xdUv3-6g-n26EBN4Pki/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1bDdTbB4Nckp1-xdUv3-6g-n26EBN4Pki",
        category: "Beverage",
        price: 90,
        description:"With warm spiced notes from Coca-Cola and dark rum and brightness from the lime and mint, this black mojito is a spin on a classic."
    },
    {   id: 21,
        itemName:"Green Apple Mojito",
        // img:"https://drive.google.com/file/d/1XAmPJmfGGG2h8DR3JM74bs99aGQ_qorP/view?usp=sharing",
        // https://drive.google.com/file/d/1V75maq_Ql5ATlmuG7QadMAS-nDgOLaok/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1V75maq_Ql5ATlmuG7QadMAS-nDgOLaok",
        category: "Beverage",
        price: 100,
        description:"Make a healthy choice and try out this super easy recipe!."
    },
    {   id: 22,
        itemName:"Mint Mojito",
        // img:"https://drive.google.com/file/d/1Jfp3RHA_A17cmBt9jWrRLi7-A9F_yxSf/view?usp=sharing",
        // https://drive.google.com/file/d/1fSkCXSTc09BNUpaxrLj4ixrIEEw_zY_f/view?usp=sharing
        img:"http://drive.google.com/uc?export=view&id=1fSkCXSTc09BNUpaxrLj4ixrIEEw_zY_f",
        category: "Beverage",
        price: 70,
        description:"A simple drink to make that looks impressive and great for spring and summer entertaining."
    },
]

module.exports = data