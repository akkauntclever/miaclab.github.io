
// map

let change = false;
let map = document.getElementById('map');
let map1 = document.getElementById('map-1')
let buttonmap = document.getElementById('button-map');
function buttons() {
    change=!change;
    if (change === true) {
        map.classList.remove('address');
        map1.classList.add('address-1');
        buttonmap.innerHTML = "&#8743";
    } 
    else {
        map.classList.add('address');
        map1.classList.remove('address-1');
        buttonmap.innerHTML = "&#8744";     
    }
};

// animation

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('appear');
          }
        });
    }
    function onEntry1(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('appear');
            document.querySelectorAll(".b5-list-1-1-all").forEach( element => {
                element.classList.add('appear');
            });
            }
          })
        };



    let counter = 0;
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let observer1 = new IntersectionObserver(onEntry1, options);

    let elements = document.querySelectorAll('.animation1');
    for (let elm of elements) {
        observer.observe(elm);
    }
    options = { threshold: [0.1] };
    elements = document.querySelectorAll('.animation2');
    for (let elm of elements) {
        observer.observe(elm);
    }
    options = { threshold: [0.1] };    
    elements = document.querySelectorAll('.animation3');
    for (let elm of elements) {
        observer.observe(elm);
    }

    document.querySelectorAll(".b5-list-1-1-1").forEach( element => {
        observer1.observe(element);
    } );

// menu

    $('.changing').css({"transition" : "1s"})
    function removeMenu() {
        $('#button-icon-change').fadeOut('slow');
        $('#scrollto').addClass('changing');
    }
    function addMenu() {
        $('#button-icon-change').fadeOut('slow');
        $('#scrollto').removeClass('changing');
    }
    function openMenu() {
        $('#button-icon-change').fadeOut('slow');
        $('#scrollto').removeClass('changing');
        ind=!ind;
    }
    let ind = true
    $(document).scroll(function(){

        if ($(this).scrollTop() >= 400){
            if (ind===true) {
                addMenu();                
            }
            else if (ind===false) {
                closedMenu()
            }
        }
        else if ($(this).scrollTop() < 400) {
            removeMenu();
        }
    });
    function closeMenu() {
        $('#scrollto').addClass('changing');
        $('#button-icon-change').fadeIn('slow');
        ind=!ind;
    }
    function closedMenu() {
        $('#scrollto').addClass('changing');
        $('#button-icon-change').fadeIn('slow');
    }

        $('.menu-href-spec').click(function (ev) {ev.preventDefault();
        $('#button-icon-change').fadeOut('slow');
        $('#scrollto').removeClass('changing');
        let newd = $(this).attr('href');
        let height = $(newd).offset().top;
        window.scrollBy(0, height-100);
        })


    if ($(this).scrollTop() > 500) {
        addMenu();
    }

// маска

    $(function(){
        $("#phone").mask("+7 (999) 999-99-99");
      });
      $(function() {
          $("#email-1").inputmask({
              mask: "*{3,20}@*{3,20}.*{2,7}",
          });
      });


// навигация

var sections = $('.menu-find')
, nav = $('.listik')
, nav_height = nav.outerHeight();
var cur_pos = $(this).scrollTop();

sections.each(function() {
    var top = $(this).offset().top - nav_height,

    bottom = top + $(this).outerHeight();
    top=top-1;
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.menu-href').removeClass('active-1');
        sections.removeClass('active-1');
        
        $(this).addClass('active-1');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-1');
    }
});

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
    var top = $(this).offset().top - nav_height,

    bottom = top + $(this).outerHeight();
    top=top-1;
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.menu-href').removeClass('active-1');
        sections.removeClass('active-1');
        
        $(this).addClass('active-1');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-1');
    }
});
});

nav.find('a').on('click', function () {
var $el = $(this)
  , id = $el.attr('href');

$('html, body').animate({
  scrollTop: $(id).offset().top - nav_height
}, 500);

return false;
});

let MenuChanging = true;
function blockMenu() {
    MenuChanging=!MenuChanging;
    $('.fall-menu-list').toggleClass('upgrade');
    if (MenuChanging===false) {
        $('.menu-button-icon-changing').attr('src', 'img/list-icon-cross.png')
    }
    else {
        $('.menu-button-icon-changing').attr('src', 'img/list-icon.png')
    }
}

// вылезающий адрес 


$('.list-contacts').hover(
    function() {
        $('.list-contacts-2').toggleClass('update');
    }
);

