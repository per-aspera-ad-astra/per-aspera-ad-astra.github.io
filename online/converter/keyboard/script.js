var rusArr = new Array ('Ё','ё','!','1','"','2','№','3',';','4','%','5',':','6','?','7', '*', '8', '(', '9', ')', '0', '_', '-', '+', '=', 'Й','й','Ц','ц','У','у','К','к','Е','е','Н','н','Г','г','Ш','ш','Щ','щ', 'З','з','Х','х','Ъ','ъ','/', '\\', 'Ф','ф','Ы','ы','В','в','А','а','П','п','Р','р','О','о','Л','л','Д','д', 'Ж','ж','Э','э','Я','я','Ч','ч','С','с','М','м','И','и','Т','т','Ь','ь','Б','б','Ю','ю',',','.', ' ');

var latArr = new Array ('~','`','!','1','@','2','#','3','$','4','%','5','^','6','&','7', '*', '8', '(', '9', ')', '0', '_', '-', '+', '=', 'Q','q','W','w','E','e','R','r','T','t','Y','y','U','u','I','i','O','o', 'P','p','{','[','}',']', '|', '\\', 'A','a','S','s','D','d','F','f','G','g','H','h','J','j','K','k','L', 'l', ':', ';', '"', '\'', 'Z', 'z', 'X', 'x', 'C', 'c', 'V', 'v', 'B', 'b', 'N', 'n', 'M', 'm', '<', ',', '>', '.', '?', '/', ' ');

function cyrill_to_latin(text){
  var newArr = text.split(''),
      finalArr =[];
  for(var i=0; i < newArr.length; i++) {
    var indexArr = rusArr.indexOf(newArr[i]);
    finalArr.push(latArr[indexArr]);
  }
  return finalArr.join('');
}

function latin_to_cyrill(text){
  var newArr = text.split(''),
      finalArr = [];
  for(var i=0; i < newArr.length; i++) {
    var indexArr = latArr.indexOf(newArr[i]);
    finalArr.push(rusArr[indexArr]);
  }
  return finalArr.join('');
}

function translit(){
  $("[name=result]").val(cyrill_to_latin($("[name=translit]").val()));
}
function translitRevers(){
  $("[name=result2]").val(latin_to_cyrill($("[name=translit2]").val()));
}