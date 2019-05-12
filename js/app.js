jQuery(document).ready(function() {
    scrollMenu();
    const arr= ['usd.png','euro.png','canada.png','hongkong.png','russia.png',];
    $('.currencies select').each(function(){
        let $this = $(this);
        let numberOption = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        let styleSelectStyle = $this.next('div.select-styled');
        styleSelectStyle.html(`<img src="./images/${arr[0]}">`+"<span class='text'>"+$this.children('option').eq(0).text().trim()+"</span>");
        var list = $('<ul/>', {
            'class': 'select-options'
        }).insertAfter(styleSelectStyle);

        for (var i = 0; i < numberOption; i++) {
            $('<li />', {
                html:`<img src="./images/${arr[i]}">`+"<span class='text'>"+$this.children('option').eq(0).text().trim()+"</span>",
                rel: $this.children('option').eq(i).val(),
                p: i
            }).appendTo(list);
        }
        let listItems = list.children('li');
        styleSelectStyle.click(function(e){
           e.stopPropagation();
           $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
           });
           $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        listItems.click(function(e){
            e.stopPropagation();
            const i = parseInt($(this).attr('p'));
            styleSelectStyle.html(`<img src="./images/${arr[i]}">`+"<span class='text'>"+$(this).text()+"</span>").removeClass('active');
            $this.val($(this).attr('rel'));
            list.hide();
        });


        $(document).click(function () {
            styleSelectStyle.removeClass('active');
            list.hide();
        });
    });
    $(window).scroll(()=>{
        scrollMenu();
        }
    );
    function scrollMenu(){
        let topDistance = $('#responsive-menu').offset().top;
        if(topDistance>50){
            if($('#responsive-menu.active').length>0) return;
            $('#responsive-menu').addClass('active');
        }else{
            if($('#responsive-menu.active').length===0) return;
            $('#responsive-menu').removeClass('active');
        }
    }
    $('.menu-icon').click(function(){
        $('.menu-content').toggleClass('active');
    });
});