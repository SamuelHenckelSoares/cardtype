let isCard = 0
function changeCard(event){
    const card = event.currentTarget
    const cover = document.getElementById("Cover")

    if (isCard == 0){
        card.style.backgroundImage = "url(./assets/bg-ignite.svg)";
        cover.style.backgroundImage = "url(./assets/elements-green.svg)";
        isCard = 1; 
    }else if(isCard == 1){
        card.style.backgroundImage = "url(./assets/bg-explorer.svg)";
        cover.style.backgroundImage = "url(./assets/elements-blue.svg)";
        isCard = 2; 
    }else if(isCard == 2){
        card.style.backgroundImage = "url(./assets/bg-gold.svg)";
        cover.style.backgroundImage = "url(./assets/elements-gold.svg)";
        isCard = 0; 
    }
    console.log(isCard)
}
