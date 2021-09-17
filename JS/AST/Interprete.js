
class Interprete{
  constructor(){
    this.global = new Pila("global");
    this.mglobal = [];
    this.estructuras=[];
  }

  analizar(raiz){

    return this.interpretar(raiz,this.global,null);

  }

  interpretar(raiz){
    let op;
    let res;
    let simbolo;
    let codigo="";
    if(raiz===undefined || raiz===null)return;


    switch(raiz.tag){
      case "RAIZ":
        console.log(raiz);
        raiz.childs.forEach(hijo => codigo+=this.interpretar(hijo))
        return codigo;
      case "SENTENCIAS":
        raiz.childs.forEach(hijo=> codigo+=this.interpretar(hijo) )
        return codigo;
      case "DECLARACION":
        raiz.childs[0].childs.forEach(hijo=> {
          simbolo = new Simbolo(hijo.value,"","")
          TS.getInstance().insertar(simbolo)
        })
      break;
      case "ASIGNACION":
        simbolo=TS.getInstance().obtener(raiz.childs[0].value)
        op = new Operador();
        res = op.ejecutar(raiz.childs[1])
        simbolo.tipo=res.tipo;
        simbolo.valor=res.valor;
        TS.getInstance().modificar(simbolo)
        console.log(res)
      break;
      case "PRINT":
        op = new Operador();
        res = op.ejecutar(raiz.childs[0]);
        codigo+=res.valor+"\n"
        return codigo;

      case "IF":
        op = new Operador();
        res=op.ejecutar(raiz.childs[0])

        if(res.tipo=="boolean"){
          if(res.valor){
            raiz.childs[1].childs[0].childs.forEach(nodito => {
              codigo+=this.interpretar(nodito);
            });
            return codigo;
          }else{
            if(raiz.childs.length==3){
              codigo+=this.interpretar(raiz.childs[2].childs[0].childs[0])
            }
          }

          
        }

      case "DO_WHILE":
        op = new Operador()
        res = op.ejecutar(raiz.childs[1])

        do{
          codigo+=this.interpretar(raiz.childs[0].childs[0])
          res = op.ejecutar(raiz.childs[1])
        }while(res.valor)
        break;
      case "WHILE":
        op = new Operador()
        res = op.ejecutar(raiz.childs[0])
        while(res.valor){
          codigo+=this.interpretar(raiz.childs[1].childs[0])
          res = op.ejecutar(raiz.childs[0])
        }
        break;
    }
    return codigo;
  
}

}