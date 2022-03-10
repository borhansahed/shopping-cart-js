
// main function

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


       calculateTotal ();
}
// get input for calculateTotal 
function getInput (product){
    const productInput = document.getElementById(product);
    const productInputText =parseInt(productInput.value);
   
    return productInputText;

}
// calculateTotal cost system 
function calculateTotal () {
    const mobilePrice = getInput('add-input') * 1219;
    const mobileCase =getInput('case-input') *59;
    const subtotal = mobilePrice + mobileCase;
    const tax = (subtotal *10) / 100;
    const total = subtotal + tax;
    // show in html 
    document.getElementById('sub-total').innerText=subtotal;
    document.getElementById('tax-total').innerText=tax;
    document.getElementById('total').innerText=total;
    
}






// mobile price event listener

document.getElementById('add-button').addEventListener('click' , function(){
    updateMobileCount(true , 'add-input' , 'mobile-price' ,1219);
    grandTotal('subtotal' ,'tax-total');
});

document.getElementById('minus-button').addEventListener('click' , function(){
    const addInput = document.getElementById('add-input');
    updateMobileCount(false , 'add-input' , 'mobile-price', 1219);
   

    });


    // case system update 

    document.getElementById('case-plus').addEventListener('click' , function(){
       updateMobileCount (true , 'case-input' , 'case-money' , 59  );
    });
    document.getElementById('case-minus').addEventListener('click' , function(){
        updateMobileCount(false , 'case-input' , 'case-money' , 59 );
    })