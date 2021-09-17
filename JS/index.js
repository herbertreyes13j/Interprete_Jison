
var numberTabs = 1;

$(document).on('ready', function() {
  $('#tabs .menu .tab').tab({});
  appendTab('tabs', 'Tab 1');
});

function closeLoad(e) {
  $("#" + 'loader-' + e).removeClass('active');
}

$(document).on('click', '#tAdd', function() {
  appendTab('tabs');
});

$(document).on('click', '.btnx', function(e) {
  deleteTab('tabs', e.target.id.replace('btnx-', ''));
});

function appendTab(tab, nombre, contenido) {
  var t = $("#" + tab + " .tabsName");
  var tt = $("#" + tab);
  //var tl = t.find('.item').length;
  var n = (!!nombre ? nombre : ("tab " + (numberTabs).toString()));
  var tn = (!!nombre ? nombre.replace(/\s/g, '') : ("tab" + (numberTabs).toString()));
  contenido = !!contenido ? contenido : 'Content ' + tn;
  numberTabs++;
  if (!$("#tab-" + tn).length) {

    t.find('#tAdd').remove();
    
    t.append('<a class="item tab" data-tab="' + tn + '" id="tab-' + tn + '">' + n + ' <i class="close icon btnx" id="btnx-' + tn + '"></i></a>')
      .append('<a class="item tabx" id="tAdd"><i class="add square icon"></i></a>');

    tt.append('<div class="ui tab tabc segment" data-tab="' + tn + '" id="tab-c-' + tn + '">'+'<textarea id="editor'+numberTabs+'"></textarea>' + 
    '<br>'+
    '<nav class="navbar navbar-dark bg-dark">'
    +'<button class="btn btn-outline-success" onclick="final(veditor'+numberTabs+',consola'+numberTabs+')">Analizar</button>'+
    '<button class="btn btn-outline-success" type="button"  onclick="openFile(veditor'+numberTabs+')">Abrir Archivo</button>'+
    '<button  class="btn btn-outline-success" type="button"  onclick="genTS()">Generar Tabla de Simbolos</button>'
    +'</nav>'+
    '<br>'+'<br><textarea id="consola'+numberTabs+'"></textarea>'+' </div>')
    $('#tabs .menu .tab').tab({});

    var script= document.createElement("script");
    script.innerHTML="var veditor"+numberTabs+" = CodeMirror.fromTextArea(document.getElementById('editor"+numberTabs+"'), {"+
      'mode: "javascript",'+
      'lineNumbers: true,'+
  '});'+
  '\nveditor'+numberTabs+'.save()';
    console.log(script);
    document.head.appendChild(script);

  }
  $("#tab-" + tn).click();
}


function genTS(){
  var text=TS.getInstance().getsimbolos();
  download(text,"Reporte.html","text/html");
}


function final(id,consola){
    alert(id.getValue());
    consola.value='';
    L_Error.getInstance().reiniciar();
    TS.getInstance().reiniciar();
    try{
      var resultado= gramatica.parse(id.getValue()); 
      
       console.log(imprimir(resultado));
       UpdateGraphviz(imprimir(resultado));
       var interprete = new Interprete();
       var texto= interprete.analizar(resultado);
      download(texto, 'Analisis.txt', 'text/plain')
      //consola.value=L_Error.getInstance().getErrores();
      return;
    }catch(error){
        consola.value=error+"\n"+L_Error.getInstance().getErrores();
        console.log(error);
        download(error,'Archivo con errores','text/plain')
        return;
    }
}

function imprimir(raiz){
  var texto ="";
  var contador=1;
  texto+="digraph G{";
  texto+="Node0[label=\"" + escapar(raiz.tag +" | "+raiz.value) + "\"];\n";

  recorrido("Node0",raiz);

  texto+= "}";

  return texto;

  function recorrido(padre,hijos){
    if(hijos === undefined || hijos === null) return;

    //console.log(typeof hijos);

    if(typeof hijos=="string")return;
    hijos.childs.forEach(nodito=> {
      if(typeof nodito.tag=="undefined")return;
      let nombrehijo="Node"+contador;
      texto+=nombrehijo+"[label=\"" + escapar(nodito.tag +" | "+nodito.value) + "\"];\n";
      texto+=padre+"->"+nombrehijo+";\n";
      contador++;
      recorrido(nombrehijo,nodito);
    })

  }

  function escapar(cadena) {
    cadena = cadena.replace("\\", "\\\\");
    cadena = cadena.replace("\"", "\\\"");
    return cadena;
}


}

function deleteTab(tab, nombre) {
    var n = nombre;
    var tt = $("#" + tab + " .tabsName");
    var tl = tt.find('.item').length;
    var t = $("#tab-" + n);
    var tc = $("#tab-c-" + n);
    if (!!n) {
      $('.small.modal').modal({
        closable: false,
        onDeny: function() {
          //alert('No!');
          //return false;
        },
        onApprove: function() {
          t.remove();
          tc.remove();
          if (tl > 0) {
            var tb = $("#" + tab + " div a.tab")[tl - 4];
            console.log(tb)
            $(tb.click());            
            var u ="#"+tb.id;
            console.log(u);
            location.href=u;
          }
          $('#tabs .menu .tab').tab({});
        }
      }).modal('show');
    }
  }
  //--------------------------------------


  function clickElem(elem) {
    // Thx user1601638 on Stack Overflow (6/6/2018 - https://stackoverflow.com/questions/13405129/javascript-create-and-save-file )
    var eventMouse = document.createEvent("MouseEvents")
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    elem.dispatchEvent(eventMouse)
  }
  function openFile(id) {
    readFile = function(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        id.setValue(contents);
        document.body.removeChild(fileInput)
      }
      reader.readAsText(file)
    }
    fileInput = document.createElement("input")
    fileInput.type='file'
    fileInput.style.display='none'
    fileInput.onchange=readFile
   
    document.body.appendChild(fileInput)
    clickElem(fileInput)
  }

  function download(text, name, type) {
    var a = document.createElement('a');
   
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
    a.remove();

  }


  var svg_div = jQuery('#graphviz_svg_div');
  function UpdateGraphviz(dot) {
    svg_div.html("");
      var data = dot;
      // Generate the Visualization of the Graph into "svg".
      var svg = Viz(data, "svg");
      svg_div.html("<hr>"+svg);
    }