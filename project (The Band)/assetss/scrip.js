const modal = document.querySelector('.modal');
const modal_close = document.querySelector(".modal-close");
const btn_buy = document.querySelector('#btn-buy');
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modalContainer = document.querySelector('.modal-container');

const menu_btn = document.querySelector('.mobile-menu__btn');
const header = document.querySelector('#header');




for(const buyBtn of buyBtns){
    buyBtn.onclick = function(){
        modal.style.display = 'flex';
    }
}


modal_close.onclick = function(){
    modal.style.display = 'none';
}

modal.onclick = function(){
    modal.style.display = 'none';
}

modalContainer.onclick = function(even){
    even.stopPropagation();
}

var heightHeader =header.clientHeight;


// Đóng mở Mobile Menu
menu_btn.onclick = function(){
    var isClose  = header.clientHeight === heightHeader;
   if(isClose){
        header.style.height = 'auto';
   }else{
    header.style.height = null;
   }
};

// Ẩn Menu Khi click vào menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
   
    
    menuItem.onclick = function(event){
    //  Nếu có anh chị em liền kề và anh chị em liền kề chứa class là subnav thì sẽ đc gán vào biến isParentMenu
    // ta sẽ biết đc isParentMenu là Menu cha
        var isParentMenu =this.nextElementSibling &&  this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}




