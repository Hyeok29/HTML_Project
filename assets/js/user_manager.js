
let user_data = [
    {
        "idx":3,
        "userKey":"sample",
        "email":"contact@sigrrow.io",
        "password":"",
        "timezone":540,
        "company":"sigrrow",
        "managerName":"샘플",
        "phoneNumber":null,
        "admin":true,
        "active":true,
        "department":"dev",
        "temporary":false,
        "createDate":"2021-01-19T05:35:05","updateDate":"2021-01-19T05:35:05"
    }
]

$(function () {
    'use strict';

    var add_user = $('.add-user-form');
    var add_user_b = $('.add-user-form-b');

    // table_user_list
    if ($('.table_user_list').length) {
        var _user_list = $('.table_user_list').DataTable({
            data: user_data,
            columns: [
                {data: 'idx'},
                {data: 'email'},
                {data: 'managerName'},
                {data: 'department'}
            ],
            "columnDefs": [
                {
                    "targets" : 4,
                    "data" : "temporary",
                    "createdCell" : function(td, cellData, rowData, row, col) {
                        if(rowData['temporary'] === true) {
                            $(td).html ('<span class="kor">신규 생성된 계정<br>(활성화 전)</span>')
                        } else {
                            $(td).html ('<span class="kor">사용 중 계정</span>')
                        }
                    }
                },
                {
                    "targets": 5,
                    "data" : "admin",
                    "createdCell": function(td, cellData, rowData, row, col) {
                        if(rowData['admin'] === true) {
                            $(td).html ('<span class="kor">관리자</span>')
                        } else {
                            $(td).html ('<span class="kor">사용자</span>')
                        }
                    }
                },
                {
                    "targets": 6,
                    "data": 'idx',
                    "createdCell": function (td, cellData, rowData, row, col) {
                        if (rowData['admin'] === true) {
                            //user_auth_btn for callback?
                            $(td).html ('<button class="btn btn-sm btn-outline-warning kor" data-toggle="modal"data-target="#add-permission" id="' + rowData['email'] +'"> 관리자권한위임 </button>')
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

    // table_user_role - Modal
    if ($('.table_user_role').length) {
        var _user_role = $('.table_user_role').DataTable({
            data: user_data,
            columns: [
                {data: 'idx'},
                {data: 'email'},
                {data: 'managerName'},
                {data: 'department'}
            ],
            "columnDefs": [
                {
                    "targets": 4,
                    "data" : "admin",
                    "createdCell": function(td, cellData, rowData, row, col) {
                        if(rowData['admin'] === true) {
                            $(td).html ('<span class="kor">관리자</span>')
                        } else {
                            $(td).html ('<span class="kor">사용자</span>')
                        }
                    }
                },
                {
                    "targets": 5,
                    "data": 'email',
                    "createdCell": function (td, cellData, rowData, row, col) {
                        if (rowData['admin'] === true) {
                            //user_auth_btn for callback?
                            $(td).html ('<div class=""></div>')
                        } else {
                            $(td).html ('' +
                                '<div class="custom-control custom-control-primary custom-checkbox"> ' +
                                '<input type="radio" class="custom-control-input" name="doAdmin" id="'+  rowData['idx'] +'" value="' + rowData['email'] + '" /> ' +
                                '<label class="custom-control-label" for="'+ rowData['idx'] +'"></label> ' +
                                '</div>')
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

});

function confirmInvite() {
    let email = $('#add-email').val();
    $.ajax({
        url: '' + email,
        type: 'GET',
        contentType:"application/json",
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader(header, token);
        // },
        success: function (result) {
            // console.log("success :" + result);
            if(result === false) {
                _confirmInvite(email)
            } else {
                if(result === true) {
                    alert('이미 가입된 이메일입니다.');
                } else {
                    alert('샘플 사이트에서는 동작하지 않습니다.');
                }
            }
        },
        error: function (request, status, error) {
            // console.log("error code: " + request.status + "\n" + "message:" + request.responseText + "\n" + "error:");
            alert('샘플 사이트에서는 동작하지 않습니다.');
        }, complete: function () {
            // console.log("complete");
            // location.href = "/org";
        }
    });
}

function confirmInviteB() {
    let email = $('#add-email-b').val();
    $.ajax({
        url: '' + email,
        type: 'GET',
        contentType:"application/json",
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader(header, token);
        // },
        success: function (result) {
            if(result === false) {
                _confirmInvite(email)
            } else {
                if(request.responseText === 'true') {
                    alert('이미 가입된 이메일입니다.');
                } else {
                    alert('샘플 사이트에서는 동작하지 않습니다.');
                }
            }
        },
        error: function (request, status, error) {
            // console.log("error code: " + request.status + "\n" + "message:" + request.responseText + "\n" + "error:");
            alert('샘플 사이트에서는 동작하지 않습니다.');
        }, complete: function () {
            // console.log("complete");
            // location.href = "/org";
        }
    });
}

