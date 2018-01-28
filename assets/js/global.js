WebFont.load({google:{families:['Paytone One','sans-serif']}});$(document).on('click','a[href^="#"]',function(event){event.preventDefault();$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top},500);});$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#scroll').fadeIn();}else{$('#scroll').fadeOut();}});$('#scroll').click(function(){$("html, body").animate({scrollTop:0},600);return false;});});$(".float-nav2").click(function(){$('.main-nav2, .menu-btn').toggleClass('active');});$(".float-nav").click(function(){$('.main-nav, .menu-btn').toggleClass('active');});$(document).on("scroll",function(){if($(document).scrollTop()>500){$(".float-nav2").addClass('active');}else{$(".float-nav2").removeClass('active');}});if('serviceWorker'in navigator){console.log('CLIENT: service worker registration in progress.');navigator.serviceWorker.register('service-worker.js').then(function(){console.log('CLIENT: service worker registration complete.');},function(){console.log('CLIENT: service worker registration failure.');});}else{console.log('CLIENT: service worker is not supported.');};var modal=document.getElementById('myModal');var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block";}
span.onclick=function(){modal.style.display="none";}
window.onclick=function(event){if(event.target==modal){modal.style.display="none";}};
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };



        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NNG9M8N');

        
