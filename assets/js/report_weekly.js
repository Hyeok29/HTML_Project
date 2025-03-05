$(function () {
    'use strict';

    // colors ( sigrrow key color)
    const $primary = '#23B9DC';
    const $secondary = '#7C8089';
    const $success = '#0DCA99';
    const $warning = '#F6BF4F';
    const $danger = '#F05F78';


    function futureLimiter ( targetday ){
        var int_today = moment().valueOf();
        var int_targetday = targetday.valueOf();
        // alert (int_today + "  " +int_targetday );
        return (int_targetday > int_today) ? moment() : targetday;
    }


    // weekly Calendar
    var weeklyCal_El = document.querySelector('#weekly-calendar');
    var weekly_calendar = new FullCalendar.Calendar(weeklyCal_El, {
        themeSystem: 'standard',
        locale: 'kr',
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'prev, title, next',
            end: ''
        },
        direction: 'ltr',
        initialDate: new Date(),
        navLinks: false,
        fixedWeekCount: true,
        contentHeight: 350,
        eventClassNames: function ({ event: calendarEvent }) {
            const colorName = 'primary';

            return [
                // Background Color
                // 'transparent'
                'bg-light-' + colorName
            ];
        },
        events: [
            {
                // ######################## init db exist time point
                // title: 'sigrrow',
                id: 'data',
                start: '2021-02-01', // the day of sigrrow service started
                end: moment().format('YYYY-MM-DD'),
                display: 'background',
                backgroundColor: ''
            }
        ],

        eventMouseEnter: function (info){
            var $item = info.el.closest("tr")   // Finds the closest row <tr>
            // $item.style.color = ;
            $item.style.backgroundColor = $primary;
        },
        eventMouseLeave: function (info){
            var $item = info.el.closest("tr")   // Finds the closest row <tr>
            $item.style.backgroundColor = '';
        },

        dateClick: function (info) {
            if (moment (info.date) > moment() ){
                return;
            }

            if(getFormatDate(info.date) >= getFormatDate(new Date(moment().day(1)))){ //해당 주 월요일 체크
                return;
            }

            var _day =  moment(info.date);

            var from_date = _day.startOf('week').format('YYYY-MM-DD');
            from_date = moment(from_date).add('days',1).format('YYYY-MM-DD');

            var to_date = _day.endOf('week').format('YYYY-MM-DD');
            to_date = futureLimiter(moment(to_date).add('days',1)).format('YYYY-MM-DD');

            weeklyCalClicked (  from_date+ " ~ " + to_date );

        },
        firstDay: 1,
        customButtons: {
            prev: {
                text: 'Prev',
                click: function() {
                    weekly_calendar.prev()
                }
            },
            next: {
                text: 'Next',
                click: function() {
                    let _cday =  moment (weekly_calendar.getDate());
                    ( _cday < moment().subtract(1,'months')) ?   weekly_calendar.next() : null ;
                }
            },
        },

    });
    weekly_calendar.render();
    var event = weekly_calendar.getEventById('data') // an event object!
    var start = event.start


});



$(document).ready(function () {



});


function weeklyCalClicked ( val ){
    
    location.href='./report_weekly_summary.html';
}

function getFormatDate(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();

    if ((month+"").length < 2) {
        month = "0" + month;
    }
    if ((day+"").length < 2) {
        day = "0" + day;
    }
    return year + '-' + month + '-' + day;
}
