$(document).ready(function () {
    var _skrollr = skrollr.init({
        forceHeight: false, // skrollr 파일이 body의 높이 강제로 잡는 것 무효화
    });
    
// 섹션1. 애니메이션
    var animateTxt = function () {
        var txtTop = $('#main .section1 .txt_top');
        var txtTopOffset = txtTop.offset().top - 600;
        var txtBot = $('#main .section1 .txt_bottom');
        var txtBotOffset = txtBot.offset().top - 600;
        
        
        // scroll 할 경우 텍스트 박스에 on 클래스 추가
        $(window).scroll(function () {
            var _scrollTop = $(this).scrollTop();

            if(_scrollTop >= txtTopOffset) {
                txtTop.addClass('on');
            }
            if(_scrollTop >= txtBotOffset) {
                txtBot.addClass('on');
            }
        }).trigger('scroll'); //scroll 이벤트 강제실행
    };
    
    animateTxt();

// 섹션2. 슬라이더
    var section2Slider = new Swiper ('.section2_slider', {
        slidesPerView: 'auto',
        spaceBetween: 100,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
    
// 섹션3. 탭 메뉴 active 처리
    $('.section3 .list_tab li a').on('click', function (e) {
        // 페이지 첫 화면으로 이동하는 이벤트 막기
        e.preventDefault();
        
        // 클릭하는 탭 메뉴 버튼 active 클래스 추가 
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        // 클릭하는 탭 메뉴 버튼 순서 찾아서 변수 선언
        var idx = $(this).parent().index();
        
        // 탭 메뉴 버튼과 동일한 con 보여주고 나머지는 hide
        $('.section3 .con_wrap .con_box .con').eq(idx).addClass('active').siblings().removeClass('active');
    });
});
    





