let isLoading = false
const addbtn = document.getElementById("add")
const addinp = document.getElementById("addinp")
const pardiv = document.createElement("div")
const h12 = document.createElement("h1")

h12.style.textAlign = "center"
h12.style.color = "red"
document.body.appendChild(h12)

/* ===== localStorage helpers ===== */
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || []
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

/* ===== Add Task ===== */
addbtn.addEventListener("click", _ => {
    if (addinp.value !== "") {
        h12.textContent = ""
        document.body.appendChild(pardiv)
        const div = document.createElement("div")
        const taskId = Date.now()
        div.dataset.id = taskId
        const p = document.createElement("p")
        const com = document.createElement("input")
        const delbtn = document.createElement("button")

        com.type = "checkbox"
        p.textContent = addinp.value
        p.style.fontSize = "26px"   
        p.style.padding = "10px"
        com.style.width = "20px"
        com.style.height = "20px"
        com.style.cursor = "pointer"
        com.style.marginRight = "10px"

        com.addEventListener("change", _ => {
            if (com.checked) {
                p.style.textDecoration = "line-through"
                p.style.color = "gray"
            } else {
                p.style.textDecoration = "none"
                p.style.color = "black"
            }

            // ❗ DO NOT save while loading
            if (isLoading) return

            const tasks = getTasks()
            const taskId = Number(div.dataset.id)

            tasks.forEach(task => {
                if (task.id === taskId) {
                    task.completed = com.checked
                }
            })

            saveTasks(tasks)
        })


        /* ===== Delete logic ===== */
        delbtn.addEventListener("click", _ => {
            div.style.transition = "all 0.1s linear"
            div.style.transform = "scale(0)"

            setTimeout(_ => {
                div.remove()

                // remove from localStorage
                const taskId = Number(div.dataset.id)
                const tasks = getTasks().filter(task => task.id !== taskId)
                saveTasks(tasks)
            }, 200)
        })

        /* ===== Styles ===== */
        delbtn.textContent = "Delete"
        delbtn.style.cursor = "pointer"
        delbtn.style.width = "100px"
        delbtn.style.backgroundColor = "red"
        delbtn.style.borderRadius = "10px"
        delbtn.style.border = "2px solid gold"
        delbtn.style.transition = "all 0.5s linear"
        delbtn.style.padding = "10px"
        delbtn.style.color = "white"
        delbtn.style.marginBottom = "10px"

        delbtn.addEventListener("mouseenter", _ => {
            delbtn.style.backgroundColor = "orangered"
        })
        delbtn.addEventListener("mouseleave", _ => {
            delbtn.style.backgroundColor = "red"
        })

        div.appendChild(p)
        p.prepend(com)
        div.appendChild(delbtn)
        pardiv.appendChild(div)

        div.style.minWidth = "300px"
        div.style.backgroundColor = "lightgreen"
        div.style.borderRadius = "10px"
        div.style.textAlign = "center"

        pardiv.style.display = "flex"
        pardiv.style.flexDirection = "column"
        pardiv.style.justifyContent = "center"
        pardiv.style.alignItems = "center"
        pardiv.style.marginTop = "50px"
        pardiv.style.gap = "10px"

        /* ===== Save to localStorage ===== */
        if (!isLoading) {
            const tasks = getTasks()
            tasks.push({
                id: taskId,
                text: p.textContent,
                completed: false
            })
            saveTasks(tasks)
        }

        addinp.value = ""
    } else {
        h12.textContent = "Please enter a task!"
    }
})

/* ===== Load saved tasks on refresh ===== */
window.addEventListener("load", () => {
    const tasks = getTasks()

    if (tasks.length > 0) {
        document.body.appendChild(pardiv)
    }
    isLoading = true

    tasks.forEach(task => {
        addinp.value = task.text
        addbtn.click()

        const lastDiv = pardiv.lastElementChild
        lastDiv.dataset.id = task.id
        const checkbox = lastDiv.querySelector("input[type='checkbox']")

        if (task.completed) {
            checkbox.checked = true
            checkbox.dispatchEvent(new Event("change"))
        }
    })
    isLoading = false
})
function createStars(){
    const container = document.querySelector("body")
    for(let i = 0;i < 1000;i++){
        const star = document.createElement("div")
        star.className = "star"
        star.style.width = ".1px"
        star.style.height = ".1px"

        star.style.top = Math.random() * 100 + '%'
        star.style.left = Math.random() * 100 + '%'

        container.appendChild(star)
    }
}
createStars()
