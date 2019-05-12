jQuery(document).ready(function() {
    const arr= ['usd.png','euro.png','canada.png','hongkong.png','russia',];
    $('.currencies select').each(function(){
        let $this = $(this);
        let numberOption = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        let styleSelectStyle = $this.next('div.select-styled');
        styleSelectStyle.html(`<img src="./images/${arr[0]}">`+$this.children('option').eq(0).html());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter(styleSelectStyle);

        for (var i = 0; i < numberOption; i++) {
            $('<li />', {
                html:`<img src="./images/${arr[i]}">`+ $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

    });
});