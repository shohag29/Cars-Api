const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome To My Node Js App')
})

app.get('/cars', (req, res) => {
    res.send([
        {
            "id": 1,
            "url": "https://images.pexels.com/photos/6010581/pexels-photo-6010581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Ferrari Car",
            "price": "$429,815",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 2,
            "url": "https://images.pexels.com/photos/5759866/pexels-photo-5759866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Ferrari Car",
            "price": "$338,255",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 3,
            "url": "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Ferrari Car",
            "price": "$330,000",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 4,
            "url": "https://images.pexels.com/photos/10489426/pexels-photo-10489426.jpeg",
            "name": "Ferrari Car",
            "price": "$2,226,935",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 5,
            "url": "https://images.pexels.com/photos/6060938/pexels-photo-6060938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Ferrari Car",
            "price": "$524,814",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 6,
            "url": "https://images.pexels.com/photos/9735310/pexels-photo-9735310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Ferrari Car",
            "price": "$243,358",
            "discunt": "20%",
            "discription": "Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official"

        },
        {
            "id": 7,
            "url": "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "BMW Car",
            "price": "$44,500",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."

        },
        {
            "id": 8,
            "url": "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "BMW Car",
            "price": "$48,300",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."
        },
        {
            "id": 9,
            "url": "https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "BMW Car",
            "price": "$90,800",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."

        },
        {
            "id": 10,
            "url": "https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&w=600",
            "name": "BMW Car",
            "price": "$52,200",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."

        },
        {
            "id": 11,
            "url": "https://images.pexels.com/photos/99435/pexels-photo-99435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "BMW Car",
            "price": "$66,800",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."

        },
        {
            "id": 12,
            "url": "https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "BMW Car",
            "price": "$105,700",
            "discunt": "20%",
            "discription": "Discover the full range of BMW, from roadsters and SUVs to sedans, coupes, convertibles and high-performance M vehicles."

        },
        {
            "id": 13,
            "url": "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$41,090",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 14,
            "url": "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$63,280",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 15,
            "url": "https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$43,090",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 16,
            "url": "https://images.pexels.com/photos/6194412/pexels-photo-6194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$113,040",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 17,
            "url": "https://images.pexels.com/photos/10566897/pexels-photo-10566897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$51,085",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 18,
            "url": "https://images.pexels.com/photos/10123985/pexels-photo-10123985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Audi Car",
            "price": "$64,775",
            "discunt": "20%",
            "discription": "Audi e-tron; Audi A6; Audi Q7; Audi Q8. SUV; Sportback; Sedan. The Audi Q7. Versatile top-class SUV. Discover now. The Audi Q8."

        },
        {
            "id": 19,
            "url": "https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$249,865",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
        {
            "id": 20,
            "url": "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$344,778",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
        {
            "id": 21,
            "url": "https://images.pexels.com/photos/18413128/pexels-photo-18413128/free-photo-of-lamborghini-huracan-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$302,939",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
        {
            "id": 22,
            "url": "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$344,778",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
        {
            "id": 23,
            "url": "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$249,865",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
        {
            "id": 24,
            "url": "https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "name": "Lamborghini Car",
            "price": "$344,778",
            "discunt": "20%",
            "discription": "Lamborghini Official Website: find Lamborghini models, new releases, latest news, events, and the dealers across the world."

        },
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})