import { stdin, stdout } from "process"
import readline from "readline"
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})
// 1. Swap
let a = 5
let b = 10
a = a ^ b
b = a ^ b
a = a ^ b
console.log(a, b)

// 2. Simple Interest
let principle, rate, time
rl.question("Enter the principle: ", (p) => {
    principle = p
    rl.question("Enter the rate: ", (r) => {
    rate = r
    rl.question("Enter the time: ", (t) => {
    time = t
    const SI = (principle * rate * time) / 100;
    console.log(`Simple interest: ${SI}`)
    rl.close()
})
})
})

// 3. Celsius to Fahrenheit
rl.question("Enter the celsius (℃) to convert to fahrenheit (℉): ", c => {
    let fahrenheit = (c * 9/5) + 32
    console.log(`${c}℃ is converted into: ${fahrenheit}℉`)
    rl.close()
})

// 4. pnz
rl.question("Enter a number to check whether the number is +, -, 0: ", n => {
    if(n > 0)
        console.log(n + " is positive (+)")
    else if(n < 0)
        console.log(n + " is negative (-)")
    else
        console.log(n + " is zero (0)")
    rl.close()
})

// 5. Vowel or Consonent
rl.question("Enter a character to check whether the character is vowel or consonent: ", ch => {
    switch(ch.toLowerCase()){
        case 'a':
            console.log(ch + " is vowel")
             break
        case 'e':
            console.log(ch + " is vowel")
             break
        case 'i':
            console.log(ch + " is vowel")
             break
        case 'u':
            console.log(ch + " is vowel")
             break
        case 'o':
            console.log(ch + " is vowel")
             break
        default:
            console.log(ch + " is consonent")
    }
    rl.close()
})

let square = document.getElementById("square")
square.style.width = "150px"
square.style.height = "100px"
square.style.textAlign = "center"
square.style.backgroundColor = "lightgreen"
square.style.cursor = "pointer"
let cm = document.getElementById("cm")
square.addEventListener("mouseover", e => {
    cm.textContent = "Don't do it 😲"
    square.style.backgroundColor = "yellow"
})
square.addEventListener("mouseout", e => {
    cm.textContent = "Click me 😊"
    square.style.backgroundColor = "lightgreen"
})
square.addEventListener("click", e => {
    cm.textContent = "OUCH! 🤕"
    square.style.backgroundColor = "red"
    square.addEventListener("mouseout", e => {
    cm.textContent = "OUCH! 🤕"
    square.style.backgroundColor = "red"
    square.addEventListener("mouseover", e => {
    cm.textContent = "OUCH! 🤕"
    square.style.backgroundColor = "red"
})
})
})

// 6. Grade system
rl.question("Enter your mark: ", m => {
    switch(true){
        case m >= 90:
            console.log("Grade: O")
            break
        case m >= 80:
            console.log("Grade: D+")
            break
        case m >= 70:
            console.log("Grade: D")
            break
        case m >= 60:
            console.log("Grade: A")
            break
        case m >= 50:
            console.log("Grade: B")
            break
        case m >= 40:
            console.log("Grade: C")
            break
        default:
            console.log("Grade: E")
    }
    rl.close()
})

// 7. Fibnacci series
rl.question("Enter n: ", n => {
    let a = 0, b = 1, c = 0
    for(let i = 0;i <= n;i++){
        console.log(a)
        c = b
        b = a + b
        a = c
    }
    rl.close()
})

// 8. Sum of digits
rl.question("Enter n: ", n => {
    let sum = 0, t = 0, c = 0
    while(0 < n){
        t = n % 10
        sum += t
        n = Math.floor(n / 10)
        c++
    }
    console.log(sum)
    rl.close()
})

// 9. Reverse number
rl.question("Enter n: ", n => {
    let r = 0
    while(0 < n){
        r = r * 10 + (n % 10)
        n = Math.floor(n / 10)
    }
    console.log(r)
    rl.close()
})

// 10. Power function
function pow(n, expo){
    console.log(n ** expo)
}
pow(2, 3)

// 11. Prime function
function prime(n){
    let bool = false
    for(let i = 2;i < n;i++){
        if(n % i == 0){
            bool = true
            break
        }
    }
    if(bool)
        console.log(`${n} is not a prime`)
    else
        console.log(`${n} is a prime`)
}
prime(2)

// 12. Sum of array
function sumOfArray(...arrelems){
    let sum = 0
    for(let arrelem of arrelems){
        sum += arrelem
    }
    return sum
}
console.log(sumOfArray(5, 6, 7, 8, 9, 1, 2))

// 13. Duplicate elements
let arr = [2, 5, 7, 7, 5, 4, 3, 3, 5, 4, 2, 7, 7, 2, 2, 5, 4, 3, 9, 9, 4, 6, 8, 8]
let t = []
for(let i = 0;i < arr.length;i++){
    for(let j = i + 1;j <= arr.length;j++){
        if(arr[i] === arr[j] && !t.includes(arr[i])){
            console.log(arr[i])
            t.push(arr[i])
        }
    }
}

// 14. Merge arrays
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let mer = [...arr1, ...arr2]
console.log(mer)

// 15. Frequency element
let arr3 = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 5, 3, 1, 1, 3, 5, 2, 4]
let count = {}
for(let ar of arr3){
    count[ar] = (count[ar] || 0) + 1
}
for(let ar in arr3){
    if(count[ar] > 1)
        console.log(`${ar} appears ${count[ar]} times`)
}

// 16. Product object
let products = [
    {name: "IPhone", price: 69000, quantity: 59},
    {name: "Moto e13", price: 12000.99, quantity: 55},
    {name: "Samsung Galaxy Ultra S25", price: 79990.99, quantity: 32}
]
for(let i = 0;i < products.length;i++){
    for(let product in products[i]){
        console.log(`${product.at(0).toUpperCase() + product.slice(1)}: ${products[i][product]}`)
    }
    console.log("------------------")
}

// 17. Discount price
let products1 = [
    {name: "IPhone", price: 69000, quantity: 59, discount: function(){
        return (this.price - (this.price * (20/100))).toFixed(2)
    }},
    {name: "Moto e13", price: 12000.99, quantity: 55, discount: function(){
        return (this.price - (this.price * (10/100))).toFixed(2)
    }},
    {name: "Samsung Galaxy Ultra S25", price: 79990.99, quantity: 32, discount: function(){
        return (this.price - (this.price * (15/100))).toFixed(2)
    }}
]
for(let i = 0;i < products1.length;i++){
    console.log(
        `Product name: ${products1[i].name}\nOriginal price: ${products1[i].price}\nQuantity: ${products1[i].quantity}\nDiscounted price: ${products1[i].discount()}`
    )
    console.log("------------------")
}

// 18. Array of objects
let arofobjs = [
    {name: "Parthi", age: 19, graduation: "BCA"},
    {name: "Joshua", age: 20, graduation: "BSC"},
    {name: "Sakthi", age: 19, graduation: "Data Science"},
    {name: "Pranav", age: 21, graduation: "MCA"},
    {name: "Jaidan", age: 18, graduation: "BCA"}
]
for(let i = 0;i < arofobjs.length;i++){
    console.log(`Name: ${arofobjs[i].name}\nAge: ${arofobjs[i].age}\nGraduation: ${arofobjs[i].graduation}`)
    console.log("--------------")
}

// 19. Change background
document.body.appendChild(document.createElement("button")).textContent = "Click me"
document.querySelector("button").addEventListener("click", _ => {
    document.body.style.backgroundColor = "lightgreen"
})

// 20. Show/Hide Paragraph
document.body.appendChild(document.createElement("button")).textContent = "Show"
document.body.appendChild(document.createElement("p"))
document.querySelector("button").addEventListener("click", _ => {
    document.querySelector("button").className = "hide"
    if(document.querySelector("p").className === "hide"){
        document.querySelector("button").textContent = "Show"
        document.querySelector("p").textContent = ""
        document.querySelector("p").className = "show"
    }
    else{
        document.querySelector("p").textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a quos fugit! Natus adipisci mollitia laborum numquam rerum, fugiat harum error autem culpa tenetur ipsum fugit laudantium ex, magnam amet? A illum delectus, quibusdam fuga voluptates eum inventore deleniti quam accusantium voluptatibus libero! Enim vitae magni fugiat quibusdam minima iste libero sapiente voluptas aspernatur hic vel necessitatibus architecto nostrum saepe, dolor magnam odit iusto a dicta? Architecto facere eveniet pariatur exercitationem, at quo earum tenetur possimus velit ut impedit perspiciatis perferendis unde numquam suscipit temporibus. Tenetur distinctio similique quod, incidunt beatae minima? Nesciunt ullam nobis soluta facere incidunt deleniti esse perferendis dolorem reiciendis, alias sed exercitationem distinctio totam excepturi maiores inventore minima nihil magni quaerat velit praesentium unde aut? Velit voluptatum, modi ipsam, voluptas quam laudantium consectetur saepe soluta vero maiores cumque iusto harum magni id labore temporibus doloribus ipsa odit! Unde rem, ipsam obcaecati praesentium quam ratione repellat. Assumenda voluptates cupiditate pariatur, reiciendis perspiciatis atque esse explicabo sequi culpa dolorum tempore autem non, odio eaque labore architecto nam ipsam cumque id. Voluptates, neque deleniti corporis voluptatibus odio, in eius nemo iusto officiis provident corrupti sit. Assumenda magni alias odit quia eum qui, fuga doloribus labore eligendi, quisquam ea culpa."
        document.querySelector("p").className = "hide"
        document.querySelector("button").textContent = "Hide"
    }
})

// 21. Live word/character counter
document.body.appendChild(document.createElement("textarea")).name = "ta"
document.body.appendChild(document.createElement("h1"))
document.body.appendChild(document.createElement("h2"))
document.querySelector("textarea").addEventListener("input", _ => {
    document.querySelector("h1").textContent = "Character(s): " + document.querySelector("textarea").value.length
    document.querySelector("textarea").value.length === 0 ? document.querySelector("h2").textContent = "Word(s): " + 0 : document.querySelector("h2").textContent = "Word(s): " + document.querySelector("textarea").value.trim().split(" ").length
})

// 22. Form validation
const form = document.createElement("form")
document.body.appendChild(form)
const namelab = document.createElement("label")
namelab.textContent = "Name: "
const nameinp = document.createElement("input")
nameinp.required = "true"
document.querySelector("form").appendChild(namelab)
document.querySelector("form").appendChild(nameinp)
const agelab = document.createElement("label")
agelab.textContent = "Age: "
const ageinp = document.createElement("input")
ageinp.required = "true"
document.querySelector("form").appendChild(agelab)
document.querySelector("form").appendChild(ageinp)
const genlab = document.createElement("label")
genlab.textContent = "Gender: "
const geninp = document.createElement("select")
geninp.required = "true"
const genopt = document.createElement("option")
genopt.text = "--Select Gender--"
genopt.value = ""
geninp.add(genopt)
let genders = ["Male", "Female", "Others"]
genders.forEach(gender => {
    const genopt = document.createElement("option")
    genopt.text = gender
    genopt.value = gender
    geninp.add(genopt)
})
document.querySelector("form").appendChild(genlab)
document.querySelector("form").appendChild(geninp)
const submit = document.createElement("button")
submit.textContent = "Submit"
document.querySelector("form").appendChild(submit)

// 23. Image description
const img = document.createElement("img")
img.src = "earth.jpeg"
img.alt = "Earth Image"
img.className = "show"
img.style.cursor = "pointer"
document.body.appendChild(img)
const h1 = document.createElement("h1")
document.body.appendChild(h1)
img.addEventListener("click", _ => {
    if(img.className === "show"){
        h1.textContent = img.alt
        img.className = "hide"
    }else{
        h1.textContent = ""
        img.className = "show"
    }
})

// 24. Increments button
let c = 0
const btn = document.createElement("button")
btn.textContent = "Increment(+)"
document.body.appendChild(btn)
const btn2 = document.createElement("button")
btn2.textContent = "Decrement(-)"
document.body.appendChild(btn2)
const h1_2 = document.createElement("h1")
document.body.appendChild(h1_2)
btn.addEventListener("click", _ => {
    c++
    h1_2.textContent = "Increments: " + c
})
btn2.addEventListener("click", _ => {
    c--
    h1_2.textContent = "Decrements: " + c
})

// 25. To-Do List
const addbtn = document.getElementById("add")
const addinp = document.getElementById("addinp")
const pardiv = document.createElement("div")
const h12 = document.createElement("h1")
h12.style.textAlign = "center"
h12.style.color = "red"
document.body.appendChild(h12)
addbtn.addEventListener("click", _ => {
    if(addinp.value !== ""){
        h12.textContent = ""
        document.body.appendChild(pardiv)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const delbtn = document.createElement("button")
        delbtn.addEventListener("click", _ => {
            div.style.transition = "all 0.5s linear"
            div.style.transform = "scale(0)"
            setTimeout(_ => {
                div.remove()
            }, 1000)
        })
        delbtn.style.cursor = "pointer"
        delbtn.style.width = "100px"
        delbtn.id = "delbtn"
        delbtn.textContent = "Delete"
        delbtn.style.backgroundColor = "red"
        delbtn.style.borderRadius = "10px"
        delbtn.style.border = "2px solid gold"
        delbtn.style.transition = "all 0.5s linear"
        delbtn.addEventListener("mouseenter", _ => {
            delbtn.style.backgroundColor = "orangered"
        })
        delbtn.addEventListener("mouseleave", _ => {
            delbtn.style.backgroundColor = "red"
        })
        delbtn.style.padding = "10px"
        delbtn.style.color = "white"
        delbtn.style.marginBottom = "10px"
        div.appendChild(h1)
        div.appendChild(delbtn)
        pardiv.appendChild(div)
        div.style.minWidth = "300px"
        div.style.backgroundColor = "lightgreen"
        div.style.borderRadius = "10px"
        pardiv.style.display = "flex"
        pardiv.style.flexDirection = "column"
        pardiv.style.justifyContent = "center"
        pardiv.style.alignItems = "center"
        pardiv.style.marginTop = "50px"
        pardiv.style.gap = "10px"
        h1.textContent = addinp.value
        div.style.textAlign = "center"
        addinp.value = ""
    }else
        h12.textContent = "Please enter a task!"
})
