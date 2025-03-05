/**
 * DataTables Basic
 */

$(function () {
    'use strict';


    // colors ( sigrrow key color)
    var $primary = '#23B9DC';
    var $secondary = '#7C8089';
    var $success = '#0DCA99';
    var $warning = '#F6BF4F';
    var $danger = '#F05F78';

    // vars for tables
    var ec2cpu_total_avg_1
    var ec2cpu_total_avg_2
    var ec2cpu_total_avg_3
    var ec2cpu_total_avg_4
    var ec2cpu_total_avg_5
    var ec2cpu_total_avg_6

    // references
    var flatPicker = $('.flat-picker'),
        isRtl = $('html').attr('data-textdirection') === 'rtl',
        chartColors = {
            column: {
                series1: '#826af9',
                series2: '#d2b0ff',
                bg: '#f8d3ff'
            },
            success: {
                shade_100: '#7eefc7',
                shade_200: '#06774f'
            },
            donut: {
                series1: '#ffe700',
                series2: '#00d4bd',
                series3: '#826bf8',
                series4: '#2b9bf4',
                series5: '#FFA1A1'
            },
            area: {
                series3: '#a4f8cd',
                series2: '#60f2ca',
                series1: '#2bdac7'
            }
        };
    if (flatPicker.length) {
        var date = new Date();
        flatPicker.each(function () {
            $(this).flatpickr({
                mode: 'range',
                defaultDate: ['2019-05-01', '2019-05-10']
            });
        });
    }

    function addCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    // get date
    var date = new Date();
    var date_1 = new Date(Date.now() - 864e5);
    var date_7 = new Date(Date.now() - 6048e5);

    // date to format
    var date_today = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    var date_yesterday = date_1.getFullYear() + "-" + ("0" + (date_1.getMonth() + 1)).slice(-2) + "-" + ("0" + date_1.getDate()).slice(-2);
    var date_week = date_7.getFullYear() + "-" + ("0" + (date_7.getMonth() + 1)).slice(-2) + "-" + ("0" + date_7.getDate()).slice(-2);


    // Tables and Charts Starts ------------------------------------------------------------

    // alb_rc
    if ($('.table_alb_rc').length) {
        var _alb_rc = $('.table_alb_rc').DataTable({
            data: albrc_data,
            columns: [
                // {data: 'time'},
                {data: 'resource'},
                {data: 'today_count'},
                {data: 'yesterday_count'},
                {data: 'week_count'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'now') {
                        $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "now") {
                    $(nRow).addClass('bg-primary');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')) {
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-success">TODAY</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });
    }

    if ($('.table_ec2_scf').length) {
        var _ec2_scf = $('.table_ec2_scf').DataTable({
            data: ec2scf_data,
            columns: [
                // {data: 'time'},
                {data: 'resource'},
                {data: 'today_count'},
                {data: 'yesterday_count'},
                {data: 'week_count'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'now') {
                        $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "now") {
                    $(nRow).addClass('bg-primary');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')) {
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-success">TODAY</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });
    }


    // alb_acc
    if ($('.table_alb_acc').length) {
        var _alb_acc = $('.table_alb_acc').DataTable({
            data: albacc_data,
            columns: [
                // {data: 'time'},
                {data: 'resource'},
                {data: 'today_count'},
                {data: 'yesterday_count'},
                {data: 'week_count'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'now') {
                        $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "now") {
                    $(nRow).addClass('bg-primary');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')) {
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-success">TODAY</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });
    }


    // alb_4xx
    if ($('.table_alb_4xx').length) {
        var _alb_4xx = $('.table_alb_4xx').DataTable({
            data: alb4xx_data,
            columns: [
                // {data: 'time'},
                {data: 'resource'},
                {data: 'today_count'},
                {data: 'yesterday_count'},
                {data: 'week_count'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'now') {
                        $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                        if (parseInt(rowData['today_count']) >= 1000) {
                            $("#more4xx1000").removeClass("hidden");
                        }
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "now") {
                    $(nRow).addClass('bg-primary');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')) {
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-success">TODAY</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });
    }


    // alb_5xx
    if ($('.table_alb_5xx').length) {
        var _alb_5xx = $('.table_alb_5xx').DataTable({
            data: alb5xx_data,
            columns: [
                // {data: 'time'},
                {data: 'resource'},
                {data: 'today_count'},
                {data: 'yesterday_count'},
                {data: 'week_count'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'now') {
                        $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                        if (parseInt(rowData['today_count']) >= 1000) {
                            $("#more5xx1000").removeClass("hidden");
                        }
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "now") {
                    $(nRow).addClass('bg-primary');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')) {
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-success">TODAY</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });
    }


    // ec2_cpu Starts
    if ($('.table_ec2_cpu').length) {
        var _ec2_cpu = $('.table_ec2_cpu').DataTable({
            data: ec2cpu_data,
            columns: [
                {width: "24%",data: 'resource'},
                {width: "10%",data: 'current_avg'},
                {width: "10%",data: 'current_max'},
                {width: "14%",data: 'yesterday_avg'},
                {width: "14%",data: 'yesterday_max'},
                {width: "14%",data: 'week_avg'},
                {width: "14%",data: 'week_max'}
            ],
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;

                // Remove the formatting to get integer data for summation
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };

                ec2cpu_total_avg_1 = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                ec2cpu_total_avg_2 = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                ec2cpu_total_avg_3 = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                ec2cpu_total_avg_4 = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                ec2cpu_total_avg_5 = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                ec2cpu_total_avg_6 = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                        return (intVal(a) + intVal(b) / data.length);
                    }, 0);

                // Update footer
                // $(api.column(1).footer()).html(
                //     ec2cpu_total_avg_1
                // );
                // $(api.column(2).footer()).html(
                //     ec2cpu_total_avg_2
                // );
                // $(api.column(3).footer()).html(
                //     ec2cpu_total_avg_3
                // );
                // $(api.column(4).footer()).html(
                //     ec2cpu_total_avg_4
                // );
                // $(api.column(5).footer()).html(
                //     ec2cpu_total_avg_5
                // );
                // $(api.column(6).footer()).html(
                //     ec2cpu_total_avg_6
                // );
            },
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });

    }
    var ec2cpu_avg_El = document.querySelector('#ec2cpu_avg'),
        ec2cpu_avg_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 평균값',
                    data:
                        $.map(ec2cpu_data, function (k) {
                            return k['week_avg'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 평균값',
                        data:
                            $.map(ec2cpu_data, function (k) {
                                return k['yesterday_avg'];
                            })
                    },
                    {
                        name: currentGraphName + ' 평균값',
                        data:
                            $.map(ec2cpu_data, function (k) {
                                return k['current_avg'];
                            })
                    }],
            chart: {
                height: (ec2cpu_data.length * 75).toString() < 200 ? "200" : (ec2cpu_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ec2cpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ec2cpu_avg_El !== undefined && ec2cpu_avg_El !== null) {
        var chart = new ApexCharts(ec2cpu_avg_El, ec2cpu_avg_Config);
        chart.render();
    }
    var ec2cpu_max_El = document.querySelector('#ec2cpu_max'),
        ec2cpu_max_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 최대값',
                    data:
                        $.map(ec2cpu_data, function (k) {
                            return k['week_max'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 최대값',
                        data:
                            $.map(ec2cpu_data, function (k) {
                                return k['yesterday_max'];
                            })
                    },
                    {
                        name: currentGraphName + ' 최대값',
                        data:
                            $.map(ec2cpu_data, function (k) {
                                return k['current_max'];
                            })
                    }],

            chart: {
                height: (ec2cpu_data.length * 75).toString() < 200 ? "200" : (ec2cpu_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff']
                },

            },
            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ec2cpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ec2cpu_max_El !== undefined && ec2cpu_max_El !== null) {
        var ec2cpumaxchart = new ApexCharts(ec2cpu_max_El, ec2cpu_max_Config);
        ec2cpumaxchart.render();
    }
    // ec2_cpu Ends


    // ecs_cpu Starts
    if ($('.table_ecs_cpu').length) {
        var _ecs_cpu = $('.table_ecs_cpu').DataTable({
            data: ecscpu_data,
            columns: [
                {data: 'resource'},
                {data: 'current_avg'},
                {data: 'current_max'},
                {data: 'yesterday_avg'},
                {data: 'yesterday_max'},
                {data: 'week_avg'},
                {data: 'week_max'}
            ],

            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });

    }
    var ecscpu_avg_El = document.querySelector('#ecscpu_avg'),
        ecscpu_avg_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 평균값',
                    data:
                        $.map(ecscpu_data, function (k) {
                            return k['week_avg'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 평균값',
                        data:
                            $.map(ecscpu_data, function (k) {
                                return k['yesterday_avg'];
                            })
                    },
                    {
                        name: currentGraphName + ' 평균값',
                        data:
                            $.map(ecscpu_data, function (k) {
                                return k['current_avg'];
                            })
                    }],
            chart: {
                height: (ec2cpu_data.length * 75).toString() < 200 ? "200" : (ec2cpu_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ecscpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ecscpu_avg_El !== undefined && ecscpu_avg_El !== null) {
        var chart = new ApexCharts(ecscpu_avg_El, ecscpu_avg_Config);
        chart.render();
    }
    var ecscpu_max_El = document.querySelector('#ecscpu_max'),
        ecscpu_max_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 최대값',
                    data:
                        $.map(ecscpu_data, function (k) {
                            return k['week_max'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 최대값',
                        data:
                            $.map(ecscpu_data, function (k) {
                                return k['yesterday_max'];
                            })
                    },
                    {
                        name: currentGraphName + ' 최대값',
                        data:
                            $.map(ecscpu_data, function (k) {
                                return k['current_max'];
                            })
                    }],

            chart: {
                height: (ec2cpu_data.length * 75).toString() < 200 ? "200" : (ec2cpu_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff']
                },

            },
            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ecscpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ecscpu_max_El !== undefined && ecscpu_max_El !== null) {
        var ecscpumaxchart = new ApexCharts(ecscpu_max_El, ecscpu_max_Config);
        ecscpumaxchart.render();
    }
    // ecs_cpu Ends


    // ecs_mem Starts
    if ($('.table_ecs_mem').length) {
        var _ecs_mem = $('.table_ecs_mem').DataTable({
            data: ecsmem_data,
            columns: [
                {data: 'resource'},
                {data: 'current_avg'},
                {data: 'current_max'},
                {data: 'yesterday_avg'},
                {data: 'yesterday_max'},
                {data: 'week_avg'},
                {data: 'week_max'},
            ],
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
        });

    }
    var ecsmem_avg_El = document.querySelector('#ecsmem_avg'),
        ecsmem_avg_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 평균값',
                    data:
                        $.map(ecsmem_data, function (k) {
                            return k['week_max'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 평균값',
                        data:
                            $.map(ecsmem_data, function (k) {
                                return k['yesterday_max'];
                            })
                    },
                    {
                        name: currentGraphName + ' 평균값',
                        data:
                            $.map(ecsmem_data, function (k) {
                                return k['current_max'];
                            })
                    }],

            chart: {
                height: (ecsmem_data.length * 75).toString() < 200 ? "200" : (ecsmem_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },
            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ecsmem_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ecsmem_avg_El !== undefined && ecsmem_avg_El !== null) {
        var ecsmemavgchart = new ApexCharts(ecsmem_avg_El, ecsmem_avg_Config);
        ecsmemavgchart.render();
    }
    // ecs_mem Ends

    var ecsmem_max_El = document.querySelector('#ecsmem_max'),
        ecsmem_max_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 최대값',
                    data:
                        $.map(ecsmem_data, function (k) {
                            return k['week_max'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 최대값',
                        data:
                            $.map(ecsmem_data, function (k) {
                                return k['yesterday_max'];
                            })
                    },
                    {
                        name: currentGraphName + ' 최대값',
                        data:
                            $.map(ecsmem_data, function (k) {
                                return k['current_max'];
                            })
                    }],

            chart: {
                height: (ecsmem_data.length * 75).toString() < 200 ? "200" : (ecsmem_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff']
                },

            },
            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(ecsmem_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof ecsmem_max_El !== undefined && ecsmem_max_El !== null) {
        var ecsmemmaxchart = new ApexCharts(ecsmem_max_El, ecsmem_max_Config);
        ecsmemmaxchart.render();
    }

    // rds_cpu Starts
    if ($('.table_rds_cpu').length) {
        var _rds_cpu = $('.table_rds_cpu').DataTable({
            data: rdscpu_data,
            columns: [
                {width: "24%",data: 'resource'},
                {width: "10%",data: 'current_avg'},
                {width: "10%",data: 'current_max'},
                {width: "14%",data: 'yesterday_avg'},
                {width: "14%",data: 'yesterday_max'},
                {width: "14%",data: 'week_avg'},
                {width: "14%",data: 'week_max'}
            ],

            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,

        });

    }
    var rdscpu_avg_El = document.querySelector('#rdscpu_avg'),
        rdscpu_avg_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 평균값',
                    data:
                        $.map(rdscpu_data, function (k) {
                            return k['week_avg'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 평균값',
                        data:
                            $.map(rdscpu_data, function (k) {
                                return k['yesterday_avg'];
                            })
                    },
                    {
                        name: currentGraphName + ' 평균값',
                        data:
                            $.map(rdscpu_data, function (k) {
                                return k['current_avg'];
                            })
                    }],
            chart: {
                height: (rdscpu_data.length * 75).toString() < 200 ? "200" : (rdscpu_data.length * 75).toString() ,
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(rdscpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof rdscpu_avg_El !== undefined && rdscpu_avg_El !== null) {
        var chart = new ApexCharts(rdscpu_avg_El, rdscpu_avg_Config);
        chart.render();
    }
    console.log((rdscpu_data.length * 75).toString());
    var rdscpu_max_El = document.querySelector('#rdscpu_max'),
        rdscpu_max_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 최대값',
                    data:
                        $.map(rdscpu_data, function (k) {
                            return k['week_max'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 최대값',
                        data:
                            $.map(rdscpu_data, function (k) {
                                return k['yesterday_max'];
                            })
                    },
                    {
                        name: currentGraphName + ' 최대값',
                        data:
                            $.map(rdscpu_data, function (k) {
                                return k['current_max'];
                            })
                    }],
            chart: {
                height: (rdscpu_data.length * 75).toString() < 200 ? "200" : (rdscpu_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },
            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories:
                    $.map(rdscpu_data, function (k) {
                        return k['resource'];
                    })
            },
            // yaxis: {
            //     opposite: isRtl
            // }
        };
    if (typeof rdscpu_max_El !== undefined && rdscpu_max_El !== null) {
        var rdscpumaxchart = new ApexCharts(rdscpu_max_El, rdscpu_max_Config);
        rdscpumaxchart.render();
    }
    // rds_cpu Ends


    // rds_mem Starts
    if ($('.table_rds_mem').length) {
        var _rds_mem = $('.table_rds_mem').DataTable({
            data: rdsmem_data,
            columns: [
                {data: 'resource'},
                {
                    data: 'today_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
                {
                    data: 'yesterday_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
                {
                    data: 'week_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
            ],
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
        });

    }
    var rdsmem_free_El = document.querySelector('#rdsmem_free'),
        rdsmem_free_Config = {
            series:
                [{
                    width: "25%",
                    name: weekAgoGraphName + ' 여유 메모리',
                    data:
                        $.map(rdsmem_data, function (k) {
                            return k['week_count'];
                        })
                },
                {
                    width: "25%",
                    name: yesterdayGraphName + ' 여유 메모리',
                    data:
                        $.map(rdsmem_data, function (k) {
                            return k['yesterday_count'];
                        })
                },
                {
                    width: "25%",
                    name: currentGraphName + ' 여유 메모리',
                    data:
                        $.map(rdsmem_data, function (k) {
                            return k['today_count'];
                        }),
                }],

            chart: {
                height: (rdsmem_data.length * 75).toString() < 200 ? "200" : (rdsmem_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },

            xaxis: {
                categories:
                    $.map(rdsmem_data, function (k) {
                        return k['resource'];
                    }),
                labels: {
                    formatter: function (value) {
                        return addCommas(value);
                    }
                }
            },

            yaxis: {}
        };
    if (typeof rdsmem_free_El !== undefined && rdsmem_free_El !== null) {
        var chart = new ApexCharts(rdsmem_free_El, rdsmem_free_Config);
        chart.render();
    }
    // rds_mem Ends


    // rds_fss Starts
    // $('.rdsfss-resource-name').html(' <span class="text-primary font-weight-bolder">' + rdsfss_data.resource + '</span><br/>');
    // $('.rdsfss-week-byte').html( addCommas(rdsfss_data.week_avg));
    // $('.rdsfss-week-mb').html( addCommas(formatBytes(rdsfss_data.week_avg)));
    // $('.rdsfss-yesterday-byte').html( addCommas(rdsfss_data.yesterday_avg));
    // $('.rdsfss-yesterday-mb').html( addCommas(formatBytes(rdsfss_data.yesterday_avg)));
    // $('.rdsfss-current-byte').html( addCommas(rdsfss_data.current_avg));
    // $('.rdsfss-current-mb').html( addCommas(formatBytes(rdsfss_data.current_avg)));

    // rds_fss Starts
    if ($('.table_rds_fss').length) {
        var _rdsfss = $('.table_rds_fss').DataTable({
            data: rdsfss_data,
            columns: [
                {data: 'resource'},
                {
                    width: "25%",
                    data: 'today_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
                {
                    width: "25%",
                    data: 'yesterday_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
                {
                    width: "25%",
                    data: 'week_count',
                    render: function (data, type, row, meta) {
                        var num = $.fn.dataTable.render.number(',').display(data);
                        var mb = formatBytes(data);
                        return num + "<br/>  ( " + mb + " )";
                    }
                },
            ],
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
        });
    }
    var rdsfss_bar_El = document.querySelector('#rdsfss_bar'),
        rdsfss_bar_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 여유 공간',
                    data:
                        $.map(rdsfss_data, function (k) {
                            return k['week_count'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 여유 공간',
                        data:
                            $.map(rdsfss_data, function (k) {
                                return k['yesterday_count'];
                            })
                    },
                    {
                        name: currentGraphName + ' 여유 공간',
                        data:
                            $.map(rdsfss_data, function (k) {
                                return k['today_count'];
                            }),
                    }],

            chart: {
                height: (rdsfss_data.length * 75).toString() < 200 ? "200" : (rdsfss_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },

            xaxis: {
                categories:
                    $.map(rdsfss_data, function (k) {
                        return k['resource'];
                    }),
                labels: {
                    formatter: function (value) {
                        return addCommas(value);
                    }
                }
            },

            yaxis: {}
        };
    if (typeof rdsfss_bar_El !== undefined && rdsfss_bar_El !== null) {
        var chart = new ApexCharts(rdsfss_bar_El, rdsfss_bar_Config);
        chart.render();
    }

    // rds_fss Ends

    // rds_dc Starts
    if ($('.table_rds_dc').length) {
        var _ecs_mem = $('.table_rds_dc').DataTable({
            data: rdsdc_data,
            columns: [
                {width: "25%", data: 'resource'},
                {width: "25%", data: 'today_count'},
                {width: "25%", data: 'yesterday_count'},
                {width: "25%", data: 'week_count'},
            ],
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
        });

    }
    var rdsdc_bar_El = document.querySelector('#rdsdc_bar'),
        rdsdc_bar_Config = {
            series:
                [{
                    name: weekAgoGraphName + ' 연결 수',
                    data:
                        $.map(rdsdc_data, function (k) {
                            return k['week_count'];
                        })
                },
                    {
                        name: yesterdayGraphName + ' 연결 수',
                        data:
                            $.map(rdsdc_data, function (k) {
                                return k['yesterday_count'];
                            })
                    },
                    {
                        name: currentGraphName + '연결 수',
                        data:
                            $.map(rdsdc_data, function (k) {
                                return k['today_count'];
                            }),
                    }],

            chart: {
                height: (rdsdc_data.length * 75).toString() < 200 ? "200" : (rdsdc_data.length * 75).toString(),
                type: 'bar',
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                    barHeight: '75%',
                    endingShape: 'flat'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: -15,
                    bottom: -10
                }
            },

            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#ffffff', '#ffffff', '#ffffff']
                },

            },

            colors: [$success, $warning, $primary],

            stroke: {
                show: false,
                width: 1,
                colors: ['#fff']
            },

            xaxis: {
                categories:
                    $.map(rdsdc_data, function (k) {
                        return k['resource'];
                    }),
                labels: {
                    formatter: function (value) {
                        return addCommas(value);
                    }
                }
            },

            yaxis: {}
        };
    if (typeof rdsdc_bar_El !== undefined && rdsdc_bar_El !== null) {
        var chart = new ApexCharts(rdsdc_bar_El, rdsdc_bar_Config);
        chart.render();
    }
    // rds_dc Ends

    // Tables and Charts Ends ------------------------------------------------------------


    // dates on table header exchanger
    $('.date-yesterday').each(function (idx, element) {
        $('.date-yesterday').html(' <small>(' + date_yesterday + ')</small><br/>');
    });
    $('.date-week').each(function (idx, element) {
        $('.date-week').html(' <small>(' + date_week + ')</small><br/>');
    });

});

$(document).ready(function () {

    $('.today-badge').each(function (idx, element) {
        var newCoords = {
            top: $(element).offset().top,
            left: $(element).offset().left + 90
        };
        $(element).offset(newCoords);
    });

    $('.apexcharts-datalabel').each(function (idx, element) {
        $('.apexcharts-datalabel').css('color', 'red');
    });


});
