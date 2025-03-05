$(function () {
    'use strict';

    // colors ( sigrrow key color)
    const $primary = '#23B9DC';
    const $secondary = '#7C8089';
    const $success = '#0DCA99';
    const $warning = '#F6BF4F';
    const $danger = '#F05F78';


    // get date
    var today = moment();
    var targetday = moment();

    function futureLimiter ( targetday ){
        var int_today = moment().valueOf();
        var int_targetday = targetday.valueOf();
        // alert (int_today + "  " +int_targetday );
        return (int_targetday > int_today) ? moment() : targetday;
    }

    // yearly

    // var targetyear = currentYear;
    var year_text =  $('.calendar-year-text');
    year_text.html(targetday.format('YYYY'));

    // date to format
    var monthStrings = [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ]

    // Monthly Table Year
    if (monthStrings.length) {
        monthStrings.map(function (monthString,index) {
            // index <- Month
            var _month = moment().month(index).format('MM');
            $('#monthCards').append(
                '<div class="col-2 card-month cursor-pointer align-items-center justify-content-center" title="'+  _month  + '" ><span class="font-medium-1">' +
                monthString +
                '</span></div>'
            );
        });
    }

    $(document).on('click', '#prev_year_btn', function () {
        targetday = targetday.subtract(1, 'years');
        year_text.html(targetday.format('YYYY'));
    });

    $(document).on('click', '#next_year_btn', function () {
        var temp = targetday.add(1, 'years');
        targetday = futureLimiter(temp);
        year_text.html( targetday.format('YYYY') );
    });

    $(document).on('click', '.card-month', function () {
        var result = targetday.format('YYYY') + $(this).attr('title');
        yearlyCalClicked( moment(result, 'YYYY-MM' ).format('YYYY-MM') );
    });

});



$(document).ready(function () {


});


function yearlyCalClicked ( val ){
    alert('Clicked Yearly on: ' + val);
}
