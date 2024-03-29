// 파일형식체크
function showname() {
    var name2 = document.getElementById('input-file');
    var ext = name2.files.item(0).type.split('/').pop().toLowerCase();
    var ext2 = $('#input-file').val().split('\\').pop();
    if ($.inArray(ext, ['gif', 'jpg', 'jpeg', 'pdf', 'gmp']) == -1) {
        alert('파일 형식을 확인하세요.')
        $("#input-file").val('');
        return;
    } else {
        document.getElementById("file").innerHTML = 'file:' + ext2
        $('.file').css('font-weight', 'normal')
    }
};
//이메일형식 체크
function myFunction() {
    var x = document.getElementById("input-email-2").value;
    if (x != '1') {
        $('#input-email-1').attr('disabled', false)
        document.getElementById("str_email02").value = x
        if (x == '2') {
            $("#str_email02").attr('readonly', false)
            $("#str_email02").attr('disabled', false)
            $("#str_email02").val('')
        } else {
            $("#str_email02").attr('readonly', true)
            $("#str_email02").attr('disabled', true)
        }
    } else {
        $('#input-email-1').val('')
        $("#str_email02").val('')
        $("#str_email02").attr('disabled', true)
        $('#input-email-1').attr('disabled', true)
    }
}

//내용 글자수 제한
$(function () {
    $("textarea#content").keyup(function () {
        var inputLength = $(this).val().length;
        if (inputLength > 2000) {
            alert("글자수는 2000자로 이내로 제한됩니다.");
        } else {
            $(".count").html(inputLength)
        }
    })
})

// 필수내용입력
function inpTextTest(elements) {
    var result = false;
    var el = null;
    $.each(elements, function (i, o) {
        if (result) return;
        if ($(o).val() == '') {
            result = true;
            el = $(o);
        }
    });
    return { res: result, myEl: el };
}
function submitFnc(e) {
    if ($('#input-agree').is(':checked')) {
        var obj = inpTextTest($('input[required], select[required], textarea[required]'));
        if (obj.res) {
            alert("필수정보를 입력해주세요");
            obj.myEl.focus();
        }
        else {
            alert("상담내용이 정상적으로 등록되었습니다.");
        }
    } else {
        alert("개인정보 수집 및 이용 안내 동의를 확인해주세요.")
        return false;
    }
    return false;
}