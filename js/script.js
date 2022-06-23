const element = document.querySelector('.order-button__line--bottom');
if(getComputedStyle(element).bottom == '90%'){
    document.querySelector('.order-button').style.display = 'none';
}