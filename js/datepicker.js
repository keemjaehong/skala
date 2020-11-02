$(document).ready(function () {
// 서브페이지. datepicker
// 제이쿼리 유틸리티 메서드로 기본옵션 모두같게 세팅
        $.datepicker.setDefaults ({

        // 하단 버튼 보여주기  
            showButtonPanel: true,
            closeText: 'Close',
            currentText: 'Today',
            showOtherMonths: true,
            selectOtherMonths: true,
            // 날짜 선택 오늘 이후로 제한
            minDate: '0',
            // 날짜 선택 후 연월일 표시형식
            dateFormat: 'yy.mm.dd',
            // 좌우버튼 툴팁 텍스트
            prevText: 'prev',
            nextText: 'next',
            // 상단 년,월순으로 나오게
            showMonthAfterYear: false,
            // 년도뒤쪽 기호붙이기
            monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            // 요일 표시형식
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        });

        // datepicker 날짜선택기
        // input과 button 동시 선택
        $('#checkInDate, #main.reservation .checkin .btn_cal').on('click', function () {
            $('#checkInDate').datepicker();
            buttonText: 'Select date';
            // 요소를 동적으로 마지막에 추가
            console.log('클릭됨');
            $('.checkin').append($('#ui-datepicker-div'));
            // 아래는 필수 옵션
            $(this).datepicker('show');
        });

        $('#checkOutDate, #main.reservation .checkout .btn_cal').on('click', function () {
            $('#checkOutDate').datepicker();
            buttonText: 'Select date';
            // 요소를 동적으로 마지막에 추가
            console.log('클릭됨2');
            $('.checkout').append($('#ui-datepicker-div'));
            // 아래는 필수 옵션
            $(this).datepicker('show');
        });
 
});