$(function () {
    'use strict';

    // colors ( sigrrow key color)
    const $primary = '#23B9DC';
    const $secondary = '#7C8089';
    const $success = '#0DCA99';
    const $warning = '#F6BF4F';
    const $danger = '#F05F78';


    // daily Calendar
    var dailyCal_El = document.querySelector('#daily-calendar');
    var daily_calendar = new FullCalendar.Calendar(dailyCal_El,  {
            locale: 'kr',
            initialView: 'dayGridMonth',
            header: {
                right: 'prev,today,next',
                left: 'title',
            },
            headerToolbar: {
                start: 'prev, title, next',
                end: ''
            },
            direction: 'ltr',
            initialDate: new Date(),
            navLinks: false,
            fixedWeekCount: false,
            contentHeight: 350,
            views: {
                dayGridMonth: { // name of view
                    // titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
                    // other view-specific options here
                }
            },

            dateClick: function (info) {
                if (moment (info.date) > moment()){
                    return;
                }
                if(getFormatDate(info.date) == getFormatDate(new Date(moment()))){
                    return;
                }

                var _date = moment (info.date).format('YYYY-MM-DD');
                dailyCalClicked(_date);

            },
        firstDay: 1,
        customButtons: {

            prev: {
                text: 'Prev',
                click: function() {
                    daily_calendar.prev()
                }
            },
            next: {
                text: 'Next',
                click: function() {
                    let _cday =  moment (daily_calendar.getDate());
                    ( _cday < moment().subtract(1,'months')) ?   daily_calendar.next() : null ;
                }
            },
        },

        }
    );
    daily_calendar.render();
});



$(document).ready(function () {

    var css = '.fc-day-past:hover{ background-color: #23B9DC; }';
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(style);

});


function dailyCalClicked ( val ){
    var _time = val+' 00:00:00'; //2021-03-01
    location.href='./report_daily_summary.html';
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