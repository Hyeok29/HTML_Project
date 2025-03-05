
$(function () {
    'use strict';
    let alarm_email_data = (
        [{"userKeyIdx":1,"userKey":"testKey","channelName":"email","channelMethod":"contact@sigrrow.io"}]
    );

    let alarm_slack_data = (
        [{"userKeyIdx":1,"userKey":"testKey","channelName":"slack","channelMethod":"https:\/\/hooks.slack.com\/services\sampleURL"}]
    )

    // table_alarm_email_list
    if ($('.table_alarm_email').length) {
        var _alarm_email = $('.table_alarm_email').DataTable({
            data: alarm_email_data,
            columns: [
                {data: 'channelMethod'},
                {width: "85%",data: 'channelMethod'},
                {width: "15%"}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": 'channelMethod',
                "createdCell": function (td, cellData, rowData, row, col) {

                    if (rowData['channelMethod']) {
                        var created_val = rowData['channelMethod'];
                        $(td).html ('<button type="submit" name="value" class="btn btn-sm btn-relief-danger" value="'+ created_val +'">삭제</button>')

                    } else {
                        $(td).html ('<div class=""></div>')
                    }
                }
            },
                {
                    "targets": [ 0 ],
                    "visible": false
                }
                ],
            order: [[0, 'asc']],
            searching: false,
            paging: true,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
            pageLength: 3,
            lengthChange: false,
        });
    }

    // table_alarm_slack_list
    if ($('.table_alarm_slack').length) {
        var _alarm_slack = $('.table_alarm_slack').DataTable({
            data: alarm_slack_data,
            columns: [
                {data: 'channelMethod'},
                {width: "85%",data: 'channelMethod'},
                {width: "15%"}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": 'channelMethod',
                "createdCell": function (td, cellData, rowData, row, col) {

                    if (rowData['channelMethod']) {
                        var created_val = rowData['channelMethod'];
                        $(td).html ('<button type="sumit" name="value" class="btn btn-sm btn-relief-danger" value="'+ created_val +'">삭제</button>')

                    } else {
                        $(td).html ('<div class=""></div>')
                    }
                }
            },
                {
                    "targets": [ 0 ],
                    "visible": false
                }
            ],
            order: [[0, 'asc']],
            searching: false,
            paging: true,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
            pageLength: 5,
            lengthChange: false,
        });
    }

    $( "form.add-mail-alarm" ).submit(function( event ) {
        var value = $('#add_mail_alarm').val();
        event.submit();
    });

    $( "form.add-slack-alarm" ).submit(function( event ) {
        var value = $('#add_slack_alarm').val();
        event.submit();
    });

});

