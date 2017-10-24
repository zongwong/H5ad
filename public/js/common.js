var modal = function (){

    function Alert(cfg){
        var defaultcfg = {};
        this.cfg = $.extend({},defaultcfg,cfg);
        this.el = $(this.cfg.el)
        this.close = this.el.find(this.cfg.closeClass);
        this.btnBox = $(this.cfg.btnBoxClass);
    }

    Alert.prototype = {
        init:function(){
            this.el.hide();
            this.btn_event();
            this.close_event(this.cfg.endClose);
            return this;
        },
        show:function(cb){
            this.el.show();
            cb && cb();
        },
        hide:function(cb){
            this.el.hide();
            cb && cb();
        },
        btn_event:function(){
            var that = this;
            var items = this.btnBox.children();
            items.each(function(index,item){
                var eventcfg = that.cfg.btnEvent[index];
                for(var key in eventcfg){
                    $(this).on(key,eventcfg[key])
                }
            })
            
        },
        close_event:function(cb){
            var that = this;
            this.close.on('click',function(){
                that.hide();
                cb && cb();
            })
        }
    }

    var init = function(cfg){
        return new Alert(cfg).init();
    }

    return {init:init};
}();

// 规则
var rule = modal.init({
    el: '.rule-modal',
    closeClass: '.close',
})
$('.rule').on('click',function(){
    rule.show();
})
$('.nav').on('click',function(){
    var $this = $(this);
    if ($('.probability').hasClass('active')) {
        $('.probability').removeClass('active');
    }else{
         $('.probability').addClass('active');
    }
    
})
//中奖弹框
var J_modalShowPrize = modal.init({
    el: '.J_modalShowPrize',
    closeClass: '.coupon-modal-close',
})
//奖品说明
$('#prize-list').find('.prize-item').on('click',function(){
    $('.prize-detail-modal').addClass('show')
    $('#db-content').addClass('filter-blur');
})
$('.prize-detail-slideup').on('click',function(){
    $('.prize-detail-modal').removeClass('show')
    $('#db-content').removeClass('filter-blur');
})