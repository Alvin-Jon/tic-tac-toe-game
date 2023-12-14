function ai(){
    if(ai_Enabled && game.alive && game.turn === O){
        aval = []
        box.forEach((btn,i) => {
            if(box[i].textContent ===''){
              aval.push(box[i])
            
            }
        })
        //select a random box
        let x = Math.floor(Math.random()*aval.length)
        aval[x].click()
        
    }
}