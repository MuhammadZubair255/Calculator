function display(zalmi){
    document.getElementById("zubair").value += zalmi;
    }
    function equal(){
        var c= document.getElementById("zubair").value;
        var e=eval(c);
        document.getElementById("zubair").value=e;
    }
    function clr(){
        document.getElementById("zubair").value=("");
    }
    function del()
    {
        var del= document.getElementById("zubair").value
        document.getElementById("zubair").value=del.slice(0,-1)
    }