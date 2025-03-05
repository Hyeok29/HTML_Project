var user_data = [
    {
        "id": 1,
        "full_name": "김만주",
        "role": "admin",
        "username": "manju",
        "email": "manju@man.ju",
        "department": "ceo",
        "current_plan": "Enterprise",
        "status": 3
    },
    {
        "id": 2,
        "full_name": "최광호",
        "role": "user",
        "username": "schaffen",
        "email": "paul@afdf.dfdf",
        "department": "dev",
        "current_plan": "Enterprise",
        "status": 3
    },
    {
        "id": 3,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },
    {
        "id": 4,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },
    {
        "id": 5,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 6,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 7,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 8,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 9,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 10,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 11,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },    {
        "id": 12,
        "full_name": "이주영",
        "role": "user",
        "username": "jooy",
        "email": "jooy@sssigr.dfdf",
        "department": "ceo-dev",
        "current_plan": "none",
        "status": 3
    },








]

var alarm_email_data = [
    {
        "id": 1,
        "alarm_email": "manju@man.ju",
        "status": 1
    },
    {
        "id": 2,
        "alarm_email": "paul@afdf.dfdf",
        "status": 1
    },
    {
        "id": 3,
        "alarm_email": "jooy@sssigr.dfdf",
        "status": 1
    },
    {
        "id": 4,
        "alarm_email": "jooy@sssigr.dfdf",
        "status": 1
    },
    {
        "id": 5,
        "alarm_email": "jooy@sssigr.dfdf",
        "status": 1
    },
]

var alarm_slack_data = [
    {
        "id": 1,
        "alarm_slack": "http://askldjaskljdklas.cklsajdlkas/dlkasjdkl@man.ju",
        "status": 1
    },
    {
        "id": 2,
        "alarm_slack": "paul@http://askldjaskljdklas.cklsajdlkas/dlkasjdkl.dfdf",
        "status": 1
    },
    {
        "id": 3,
        "alarm_slack": "http://askldjaskljdklas.cklsajdlkas/dlkasjdkl@sssigr.dfdf",
        "status": 1
    },
    {
        "id": 4,
        "alarm_slack": "jooy@http://askldjaskljdklas.cklsajdlkas/dlkasjdkl.dfdf",
        "status": 1
    },
    {
        "id": 5,
        "alarm_slack": "jooy@sssigr.http://askldjaskljdklas.cklsajdlkas/dlkasjdkl",
        "status": 1
    },
]

$(function () {
    'use strict';

    var add_user = $('.add-user-form');
    var add_user_b = $('.add-user-form-b');

    // jQuery Validation
    // --------------------------------------------------------------------
    if (add_user.length) {

        add_user.validate({
            rules: {
                'add-email': {
                    required: true,
                    email: true,

                },

            },

            messages: {
                'add-email': {
                    required: "이메일을 입력하세요.",
                    email: "잘못된 이메일 형식 입니다."
                },

            }

        });
    }

    if (add_user_b.length) {

        add_user_b.validate({
            rules: {
                'add-email-b': {
                    required: true,
                    email: true,

                },

            },

            messages: {
                'add-email-b': {
                    required: "이메일을 입력하세요.",
                    email: "잘못된 이메일 형식 입니다."
                },

            }

        });
    }

    // table_user_list
    if ($('.table_user_list').length) {
        var _user_list = $('.table_user_list').DataTable({
            data: user_data,
            columns: [
                {data: 'id'},
                {data: 'email'},
                {data: 'full_name'},
                {data: 'department'},
                {data: 'role'},
                {data: 'status'}
            ],
            "columnDefs": [{
                "targets": 6,
                "data": 'id',
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['role'] === 'admin') {
                        //user_auth_btn for callback?
                        $(td).html ('<button class="btn btn-sm btn-outline-warning kor" data-toggle="modal"data-target="#add-permission" onClick="auth_click(this.id)" id="' + rowData['email'] +'"> 관리자권한위임 </button>')
                    } else {
                        $(td).html ('<div class="btn btn-sm btn-outline-danger kor" onClick="del_click(this.id)" id="' + rowData['email'] +'">강제 탈퇴 </div>')
                    }
                }
            },
                {
                    "targets": [ 0 ],
                    "visible": false
                }],
            order: [[0, 'asc']],
            searching: false,
            paging: true,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
            pageLength: 10,
            lengthChange: false,
        });
    }

    // table_user_role
    if ($('.table_user_role').length) {
        var _user_role = $('.table_user_role').DataTable({
            data: user_data,
            columns: [
                {data: 'id'},
                {data: 'email'},
                {data: 'full_name'},
                {data: 'department'},
                {data: 'role'},
                {data: 'status'}
            ],
            "columnDefs": [{
                "targets": 5,
                "data": 'id',
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (rowData['role'] === 'admin') {
                        //user_auth_btn for callback?
                        $(td).html ('<div class=""></div>')
                    } else {
                        var created_id = 'role-checkbox-' + rowData['id'];
                        $(td).html ('<div class="custom-control custom-control-primary custom-checkbox"> <input type="checkbox" class="custom-control-input" id="'+ created_id +'" /> <label class="custom-control-label" for="'+ created_id +'"></label> </div>')
                    }
                }
            },
                {
                    "targets": [ 0 ],
                    "visible": false
                }],
            order: [[0, 'asc']],
            searching: false,
            paging: false,
            info: false,
            filter: true,
            autoWidth: true,
            autoHeight: true,
            pageLength: 5,
            lengthChange: false,
        });
    }

    $('input.custom-control-input').on('change', function() {
        $('input.custom-control-input').not(this).prop('checked', false);
        auth_checked(this.id);
    });

    // table_alarm_email_list
    if ($('.table_alarm_email').length) {
        var _alarm_email = $('.table_alarm_email').DataTable({
            data: alarm_email_data,
            columns: [
                {data: 'id'},
                {width: "85%",data: 'alarm_email'},
                {width: "15%",data: 'status'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": 'status',
                "createdCell": function (td, cellData, rowData, row, col) {

                    if (rowData['status'] === 1) {
                        var created_id = 'alarm-email-' + rowData['id'];
                        $(td).html ('<button type="button" class="btn btn-sm btn-relief-danger" onClick="alarm_email_remove(this.id)"  id="'+ created_id +'">삭제</button>')

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
                {data: 'id'},
                {width: "85%",data: 'alarm_slack'},
                {width: "15%",data: 'status'}
            ],
            "columnDefs": [{
                "targets": 2,
                "data": 'status',
                "createdCell": function (td, cellData, rowData, row, col) {

                    if (rowData['status'] === 1) {
                        var created_id = 'alarm-slack-' + rowData['id'];
                        $(td).html ('<button type="button" class="btn btn-sm btn-relief-danger" onClick="alarm_slack_remove(this.id)"  id="'+ created_id +'">삭제</button>')

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

});

function auth_click(clicked_id)
{
    alert('얘가 권한을준다:' + clicked_id);
}

function auth_checked (clicked_id)
{
    alert('권한을 받는 사람!(마지막숫자 = uuid):' + clicked_id);
}

function del_click(clicked_id)
{
    alert('얘를 지우려고해!:' + clicked_id);
}

function alarm_email_remove (clicked_id){
    alert('알람 이메일 삭제 (아이디로 구분) !:' + clicked_id);
}

function alarm_slack_remove (clicked_id){
    alert('알람 슬랙 삭제 (아이디로 구분) !:' + clicked_id);
}




$(document).ready(function () {


})
