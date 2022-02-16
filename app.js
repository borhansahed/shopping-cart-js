function updateMobileCount (isIncreasing , itemid , updatePrice , price){
    const addInput = document.getElementById(itemid);
    const addInputValue = addInput.value;
    const addButton =parseInt(addInputValue);
    if (isIncreasing == true){
        const addButtonUpdate = addButton + 1;
        addInput.value = addButtonUpdate;

    }
    else if(isIncreasing == false && addInputValue  > 0 ){
        const addButtonUpdate = addButton - 1;
        addInput.value = addButtonUpdate;
    }
    let mobilePriceInput = document.getElementById(updatePrice);
        const mobilePriceText = mobilePriceInput.innerText
    
        
        const mobilePriceInputText = parseInt(mobilePriceText);
       const mobilePriceUpdate = addInput.value * price ;
       mobilePriceInput.innerText = mobilePriceUpdate;
    

}










document.getElementById('add-button').addEventListener('click' , function(){
    updateMobileCount(true , 'add-input' , 'mobile-price' ,1219);
//     const addInput = document.getElementById('add-input');
//     const addInputValue = addInput.value;
//     const addButton =parseInt(addInputValue);
//     const addButtonUpdate = addButton + 1;
//     addInput.value = addButtonUpdate;

//     // update price 

//     let mobilePriceInput = document.getElementById('mobile-price');
//     const mobilePriceText = mobilePriceInput.innerText

    
//     const mobilePriceInputText = parseInt(mobilePriceText);
//    const mobilePriceUpdate = addInput.value * 1219 ;
//    mobilePriceInput.innerText = mobilePriceUpdate;
});

document.getElementById('minus-button').addEventListener('click' , function(){
    const addInput = document.getElementById('add-input');
    updateMobileCount(false , 'add-input' , 'mobile-price', 1219);
   
  
//         const addInputValue = addInput.value;
//         const addButton =parseInt(addInputValue);
//         const addButtonUpdate = addButton - 1;
//         addInput.value = addButtonUpdate;
    
//     // update price 
//     let mobilePriceInput = document.getElementById('mobile-price');
//     const mobilePriceText = mobilePriceInput.innerText

    
//      const mobilePriceInputText = parseInt(mobilePriceText);
//    const mobilePriceUpdate = addInput.value * 1219
//      ;
//    mobilePriceInput.innerText = mobilePriceUpdate; 

    });


    // case system update 

    document.getElementById('case-plus').addEventListener('click' , function(){
       updateMobileCount (true , 'case-input' , 'case-money' , 59  );
    });
    document.getElementById('case-minus').addEventListener('click' , function(){
        updateMobileCount(false , 'case-input' , 'case-money' , 59  );
    })