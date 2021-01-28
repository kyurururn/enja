function tab(key,cursor){
    if(key.keyCode != 9){
        return;
    }
    key.preventDefault();
    var pos = cursor.selectionStart;
    var left = cursor.value.substr(0,pos);
    var right = cursor.value.substr(pos,cursor.value.length);
    cursor.value = left + "  " + right;
    cursor.selectionEnd = pos + 2;
}
el = document.getElementById("input_txt");
el.onkeydown = function(e){tab(e,this);}

