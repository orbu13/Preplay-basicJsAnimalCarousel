const rightButton = document.querySelector(".right")
const leftButton = document.querySelector(".left")
const backgroundPicture = document.querySelector(".backgroundPicture")

const buttons = document.querySelector(".buttons")
// const cats = document.querySelector("cat")
// const dogs = document.querySelector("dog")
// const giraffe = document.querySelector("giraffe")
// const lion = document.querySelector("lion")
// const fish = document.querySelector("fish")
// const rabbit = document.querySelector("rabbit")
// const monkey = document.querySelector("monkey")


const img = document.querySelector(".img")
img.src = "https://media.istockphoto.com/id/1445196818/photo/group-of-cute-pets-on-white-background-banner-design.jpg?s=612x612&w=0&k=20&c=TFz9WoJfr7o_9VhuUA4XM6B4BC3gQ_TmA2C8Xe372C8="

let img1 = "https://news.harvard.edu/wp-content/uploads/2023/11/dog_brains_2500.png"
let img2 = "https://www.purina.co.uk/sites/default/files/2023-03/Teaser%20Pedigree%20Cats.jpg"
let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6lo_-wOijdI-4qrprT30-tY6fVhJJPLjNnCf5RaT6Q&s"
let img4 = "https://media.istockphoto.com/id/472258238/photo/goldfish-in-an-aquarium.jpg?s=612x612&w=0&k=20&c=B4uJdl2XCuisGKdai0mZUyOg1t-iM8kdCEqnn23Mu1c="
let img5 = "https://nationalzoo.si.edu/sites/default/files/2024-01/20110107-365MM-web.png"
let img6 = "https://images.theconversation.com/files/99177/original/image-20151021-15434-rytxbv.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
let img7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIytaJbBDqJ98SIc1iqj2nXO2STEZjG1E2Jw&s"
let img8 = "https://cdn.vox-cdn.com/thumbor/xYSUaNbrtoz-HUrW5CIStGurgWk=/0x0:4987x3740/1200x800/filters:focal(0x0:4987x3740)/cdn.vox-cdn.com/uploads/chorus_image/image/45503430/453801468.0.0.jpg"

const imgArrays = [img1, img2, img3, img4, img5, img6, img7, img8]
let currentIndex = 0 

rightButton.addEventListener("click", function(e){
    currentIndex++
    if(currentIndex >= 8){
        console.log(currentIndex);
        currentIndex = 0
    }
    img.src = imgArrays[currentIndex]
    backgroundColorSpan(null, currentIndex)

})

leftButton.addEventListener("click", function(e){
    console.log(currentIndex);
    currentIndex--
    if(currentIndex <= 0){
        console.log(currentIndex);
        currentIndex = imgArrays.length-1
    }
    img.src = imgArrays[currentIndex]
    backgroundColorSpan(null, currentIndex)
    
})

buttons.addEventListener("click", function(e){
    if(e.target.className === "dog"){
        backgroundColorSpan(e)
        img.src = "https://news.harvard.edu/wp-content/uploads/2023/11/dog_brains_2500.png"
    }
    console.log(e.target.className);
    if(e.target.className === "cat"){
        backgroundColorSpan(e)
        img.src = "https://www.purina.co.uk/sites/default/files/2023-03/Teaser%20Pedigree%20Cats.jpg"
        
    }
    if(e.target.className === "giraffe"){
        backgroundColorSpan(e)
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIytaJbBDqJ98SIc1iqj2nXO2STEZjG1E2Jw&s"

    }
    if(e.target.className === "lion"){
        backgroundColorSpan(e)
        img.src = "https://nationalzoo.si.edu/sites/default/files/2024-01/20110107-365MM-web.png"

    }
    if(e.target.className === "penguin"){
        backgroundColorSpan(e)
        img.src = "https://cdn.vox-cdn.com/thumbor/xYSUaNbrtoz-HUrW5CIStGurgWk=/0x0:4987x3740/1200x800/filters:focal(0x0:4987x3740)/cdn.vox-cdn.com/uploads/chorus_image/image/45503430/453801468.0.0.jpg"

    }
    if(e.target.className === "fish"){
        backgroundColorSpan(e)
        img.src = "https://media.istockphoto.com/id/472258238/photo/goldfish-in-an-aquarium.jpg?s=612x612&w=0&k=20&c=B4uJdl2XCuisGKdai0mZUyOg1t-iM8kdCEqnn23Mu1c="

    }
    if(e.target.className === "monkey"){
        backgroundColorSpan(e)
        img.src = "https://images.theconversation.com/files/99177/original/image-20151021-15434-rytxbv.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"

    }
    if(e.target.className === "rabbit"){
        backgroundColorSpan(e)
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6lo_-wOijdI-4qrprT30-tY6fVhJJPLjNnCf5RaT6Q&s"

    }
})

function backgroundColorSpan (e, ind){
    let bullets = document.querySelectorAll(".buttons span")
    if(e !== null){
        bullets.forEach(function(bullet){
            if(bullet.className === e.target.className){
                bullet.style.backgroundColor = "pink"
            }else{
                bullet.style.backgroundColor = "purple"
            }
        })
    }else{
        bullets.forEach(function(bullet, index){
            if(index === ind){
                bullet.style.backgroundColor = "pink"
            }else{
                bullet.style.backgroundColor = "purple"
            }
    })
}


    // if(e.target.className === "cat"){
    //     let spanA = document.querySelector(".cat")
    //     spanA.style.backgroundColor = "red"
    // }
    // if(e.target.className === "dog"){
    //     let spanB = document.querySelector(".dog")
    //     spanB.style.backgroundColor = "red"
    // }
    // if(e.target.className === "giraffe"){
    //     let spanC = document.querySelector(".giraffe")
    //     spanC.style.backgroundColor = "red"
    // }

    // if(e.target.className === "lion"){
    //     let spanD = document.querySelector(".lion")
    //     spanD.style.backgroundColor = "red"
    // }

    // if(e.target.className === "penguin"){
    //     let spanE = document.querySelector(".penguin")
    //     spanE.style.backgroundColor = "red"
    // }

    // if(e.target.className === "fish"){
    //     let spanF = document.querySelector(".fish")
    //     spanF.style.backgroundColor = "red"
    // }

    // if(e.target.className === "monkey"){
    //     let spanG = document.querySelector(".monkey")
    //     spanG.style.backgroundColor = "red"
    // }

    // if(e.target.className === "rabbit"){
    //         let spanH = document.querySelector(".rabbit")
    //         spanH.style.backgroundColor = "red"
    // }
}
