 let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-4').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-4').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-5').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-5').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-6').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-6').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-7').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-7').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-8').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-8').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-9').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-9').src = images.getAttribute('src');
    }
});


let countDate = new Date('may 20, 2023 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
	gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);


let itemCount = 0;
let priceTotal = 0;



// Add Item to Cart
$('.btn').click(function (){
  itemCount ++;

  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

  // Calculate Total Price
  let price = parseInt($(this).siblings().find('.price').html()); 
  priceTotal += price;
  $('#cartTotal').html("Total: €" + priceTotal);
}); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});


// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').html(itemCount);

  // Remove Cost of Deleted Item from Total Price
  let price = parseInt($(this).siblings().find('.price').html());
  priceTotal -= price;
  $('#cartTotal').html("Total: €" + priceTotal);

  if (itemCount === 0) {
    $('#itemCount').html('').css('display', 'none');
  }
});