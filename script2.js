
let likes = [9,12,9]
let likes_neil = 9
let likes_nichole = 12
let likes_jim = 9



//logic behind ${}
// ${} acts as a placeholder for a variable, like concatination
//console.log("elementi 1 ", likes[0])
// console.log(`elementi 0 ${likes[0]}`)

function like(id){
    var elementi = document.getElementById(id)
    if(id == 'nichole'){
        // likes_nichole = likes_nichole + 1 
        // elementi.innerHTML = `${likes_nichole} likes`

        likes[1] = likes[1]+1
        elementi.innerHTML=`${likes[1]} likes`
    }
    else if(id == 'neil'){
       
        // likes_neil = likes_neil + 1
        // elementi.innerHTML = `${likes_neil} likes`
        likes[0] = likes[0] + 1
        elementi.innerHTML=`${likes[0]} likes`
    }
    else{
        
        // likes_jim = likes_jim + 1
        // elementi.innerHTML = `${likes_jim} likes`
        likes[2] = likes[2] + 1
        elementi.innerHTML=`${likes[2]} likes`
    }
    
    

}