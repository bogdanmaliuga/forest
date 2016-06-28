    $('.data-readmore').hide().each(function() {
        var open_text = $(this).data('open-text');
        open_text = typeof open_text !== 'undefined' ? open_text : 'Прочесть больше';
        $(this).before('<a class="data-readmore-toggle" href="#">' + open_text + '</a>');
    });

    $('.data-readmore-toggle').click(function(e) {
        e.preventDefault();

        var open_text = $(this).siblings('.data-readmore').data('open-text');
        var close_text = $(this).siblings('.data-readmore').data('close-text');

        if (typeof open_text == 'undefined') {
            open_text = "Прочесть больше"
        }
        if (typeof close_text == 'undefined') {
            close_text = "Скрить"
        }

        if ($(this).text() == open_text) {
            $(this).html(close_text).next('.data-readmore').show().after(this);
        } else {
            $(this).html(open_text).prev('.data-readmore').hide().before(this);
        }
    });
document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../contact.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);