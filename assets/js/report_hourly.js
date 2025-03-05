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

    function futureLimiter(targetday) {
        var int_today = moment().valueOf();
        var int_targetday = targetday.valueOf();
        // alert (int_today + "  " +int_targetday );
        return (int_targetday > int_today) ? moment() : targetday;
    }


    var hourlyCardText = $('#hourlyCardText');
    hourlyCardText.html(moment(targetday).format('YYYY-MM-DD'));

    $(document).on('click', '#hourlyCardLeft', function () {
        targetday = targetday.subtract(1, 'days');
        hourlyCardText.html(targetday.format('YYYY-MM-DD'));
    });

    $(document).on('click', '#hourlyCardRight', function () {
        var temp = targetday.add(1, 'days');
        targetday = futureLimiter(temp);
        hourlyCardText.html(targetday.format('YYYY-MM-DD'));
    });


    // hourly Calendar
    var hourly_today = moment().format('YYYY-MM-DD');
    var hourlyCal_El = document.querySelector('#hourly-calendar');
    var hourly_calendar = new FullCalendar.Calendar(hourlyCal_El, {
        locale: 'kr',
        initialView: 'dayGridMonth',
        // titleFormat: { year: 'numeric', month: '2-digit'},
        // header: {
        //     right: 'prev,today,next',
        //     left: 'title',
        // },
        headerToolbar: {
            start: 'prev, title, next',
            end: 'custom_today_label',
        },
        direction: 'ltr',
        initialDate: moment().format('YYYY-MM-DD'),
        navLinks: false,
        fixedWeekCount: false,
        aspectRatio: 1,
        height: 100,
        contentHeight: "auto",
        editable: false,
        views: {
            dayGridMonth: {}
        },
        dateClick: function (info) {
            if (moment(info.date) > moment()) {
                return;
            }
            $(".fc-selected-day").removeClass("fc-selected-day");
            info.dayEl.classList.add("fc-selected-day");
            var _date = moment(info.date).format('YYYY-MM-DD');
            hourly_today = _date;
            hourlyDateChange(hourly_today);
        },
        firstDay: 1,
        customButtons: {
            custom_today_label: {
                text: '',
            },
            prev: {
                text: 'Prev',
                click: function () {
                    hourly_calendar.prev()
                    hourly_today = moment(hourly_calendar.getDate()).format('YYYY-MM-DD');
                    hourlyDateChange(hourly_today);
                    hourly_calendar.updateSize();
                }
            },
            next: {
                text: 'Next',
                click: function () {
                    let _cday = moment(hourly_calendar.getDate());
                    (_cday < moment().subtract(1, 'months')) ? hourly_calendar.next() : null;
                    hourly_today = moment(hourly_calendar.getDate()).format('YYYY-MM-DD');
                    hourlyDateChange(hourly_today);
                    hourly_calendar.updateSize();
                }
            },
        },
    });
    hourly_calendar.render();


    // hourly Pie Chart
    var hourlyChartEl = document.querySelector('#hourly-chart'),
        hourlyChartConfig = {
            chart: {
                height: 320,
                type: 'donut',
                events: {
                    dataPointSelection: function (event, chartContext, config) {
                        //var _date = moment(targetday).format('YYYY-MM-DD');
                        // (hourly_today === 0) ? toastr.warning("날자가 지정되지 않았습니다") : toastr.success("우클릭    ㅋ");
                        var _time = config.w.config.labels[config.dataPointIndex];
                        hourlyChartClicked(_time);
                    }
                },
            },

            legend: {
                show: false,
                position: 'bottom'
            },
            style: {
                fontSize: '12px',
                fontFamily: 'Noto+Sans+KR'
            },
            labels:
                ['0~1시', '1~2시', '2~3시', '3~4시', '4~5시', '5~6시', '6~7시', '7~8시', '8~9시', '9~10시', '10~11시', '11~12시',
                    '12~13시', '13~14시', '14~15시', '15~16시', '16~17시', '17~18시', '18~19시', '19~20시', '20~21시', '21~22시',
                    '22~23시', '23~24시'],
            series:
                [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            colors: [
                $primary
            ],
            dataLabels: {
                enabled: false,
                minAngleToShowLabel: 10,
            },
            tooltip: {
                enabled: true,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Noto+Sans+KR'
                },
                custom: function ({series, seriesIndex, dataPointIndex, w}) {
                    return '<div class="btn" style="font-family: \'Noto+Sans+KR\', sans-serif;">' +
                        '<span>' + seriesIndex + " ~ " + (seriesIndex + 1) + '시' + '</span>' +
                        '</div>'
                }
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    size: 460,
                    expandOnClick: false,
                    donut: {
                        size: '50%',
                        labels: {
                            size: '30%',
                            show: true,
                            name: {
                                show: true,
                                horizontalAlign: 'center',
                                offsetY: 8,
                                fontSize: '3rem',
                                fontFamily: '"Noto+Sans+KR", sans-serif'
                            },
                            value: {
                                show: false,
                                fontSize: '1rem',
                                fontFamily: 'Noto+Sans+KR',
                                formatter: function (val) {
                                    return parseInt(val) + '%';
                                }
                            },

                        },

                    }
                }
            },

        };

    if (typeof hourlyChartEl !== undefined && hourlyChartEl !== null) {
        var hourlyChart = new ApexCharts(hourlyChartEl, hourlyChartConfig);
        hourlyChart.render();
    }

    // dates on table header exchanger
    $('.date-yesterday').each(function (idx, element) {
        $('.date-yesterday').html(' <small>(' + date_yesterday + ')</small><br/>');
    })

    $('.date-week').each(function (idx, element) {
        $('.date-week').html(' <small>(' + date_week + ')</small><br/>');
    })

});


$(document).ready(function () {


    $('.apexcharts-datalabel').each(function (idx, element) {
        $('.apexcharts-datalabel').css('color', 'red');
    });

    $('.fc-day-today').addClass('fc-selected-day')

    // change Hourly Cal Title
    $('.fc-custom_today_label-button')
        .addClass("btn-sm btn-outline-primary rounded")
        .removeClass("fc-button-primary")
    // .addClass("text-white");

    // var hourly_today = moment().format('YYYY-MM-DD');
    hourlyDateChange(moment().format('YYYY-MM-DD'));


});

function hourlyDateChange(val) {
    $('.fc-custom_today_label-button').html("report date :" + val);
}

function hourlyChartClicked(val) {
    var _date = $(".fc-selected-day").attr('data-date');
    if(_date === undefined) {
        alert("검색할 날자를 먼저 지정해 주세요");
        return;
    }
    var hour = val.split('~')[0];
    if(_date == getFormatDate(new Date())){
        if(hour >= new Date().getHours()){
            return;
        }
    }
    location.href='./report_hourly_summary.html'; //0~1시
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