var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("save_card").addEventListener("click", ()=>{
    addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", ()=>{
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
});




document.getElementById("show_card_box").addEventListener("click", ()=>{
    document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", ()=>{
    document.getElementById("create_card").style.display = "none";
});



