// 파일형식체크
function showname () {
    var name = document.getElementById('input-file'); 
    var ext = name.files.item(0).type.split('/').pop().toLowerCase();
    if($.inArray(ext, ['gif','jpg','pdf','gmp'])==-1){
        alert('파일 형식을 확인하세요.')
        $("#input-file").val("");
        return;
    }
  };
//이메일형식 체크
function myFunction(){
    var x=document.getElementById("input-email-2").value;
    if(x!='1'){
        $('#input-email-1').attr('disabled',false)
        document.getElementById("str_email02").value=x
        if(x=='2'){
            $("#str_email02").attr('readonly',false)
            $("#str_email02").attr('disabled',false)
            $("#str_email02").val('')
        }else{
            $("#str_email02").attr('readonly',true)
            $("#str_email02").attr('disabled',true)
        }
    }else{
        $('#input-email-1').val('')
        $("#str_email02").val('')
        $("#str_email02").attr('disabled',true)
        $('#input-email-1').attr('disabled',true) 
    }
} 

//내용 글자수 제한
$(function(){
    $("textarea#content").keyup(function() {
        var inputLength=$(this).val().length;
        if(inputLength>2000){    
            alert("글자수는 2000자로 이내로 제한됩니다.");
        }else{
            $(".count").html(inputLength)
        }
        console.log(inputLength)
    })  
})

// 필수내용입력
function submitFnc(){
    if(!$('#input-agree').is(':checked')){
        alert("개인정보 수집 및 이용 안내 동의를 확인해주세요.")
        return false;
    }else if($("input[type=text]").val("")){
        alert("필수정보를 입력해주세요")
    }else{
        alert("상담내용이 정상적으로 등록되었습니다.")
    }
}