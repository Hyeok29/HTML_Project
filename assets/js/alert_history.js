$(function () {
    'use strict';

    // colors ( sigrrow key color)
    const $primary = '#23B9DC';
    const $secondary = '#7C8089';
    const $success = '#0DCA99';
    const $warning = '#F6BF4F';
    const $danger = '#F05F78';

    // Alert history
    if ($('.table_alerthistory').length) {
        var _alerthistory = $('.table_alerthistory').DataTable({
            data: alerthistory_data,
            columns: [
                {width: "20%",data: 'time'},
                {width: "15%",data: 'namespace'},
                {width: "65%",data: 'link'},
            ],
            "columnDefs": [{
                "targets": 2,
                "data": "today_count",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['status'] === 'warning') {
                        // $(td).addClass('bg-warning font-weight-bolder');
                        $(td).css('color', '#161d31');
                    }
                }
            }],
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData["status"] === "warning") {
                    $(nRow).addClass('bg-warning');
                    $('td', nRow).css('color', '#161d31');
                    if (!$('td:last', nRow).children().hasClass('today-badge')){
                        $('td:last', nRow).append('<div  class="today-badge float-right badge badge-danger eng">CHECK</div>');
                    }
                }
            },
            order: [[0, 'asc']],
            searching: false,
            lengthChange: false,
            paging: true,
            pageLength: 5,
            info: false,
            filter: false,
            autoWidth: true,
            autoHeight: true,

        });
    }


});



$(document).ready(function () {

    $('.today-badge').each(function (idx, element) {
        var newCoords = {
            top: $(element).offset().top,
            left: $(element).offset().left + 90
        };
        $(element).offset(newCoords);
    });


});
