$('#title').click(function(){
    location.href = 'index.html';
});

function test1(){
    var $key = $("#key1");
    var $value = $("#value1");

   //  localStorage.setItem($key.val(),$value.val());
   localStorage[$key.val()] = $value.val();

    //초기화
    $key.val('');
    $value.val('');

}