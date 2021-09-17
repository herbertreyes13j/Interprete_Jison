
class Operador{
    constructor(){

    }

    ejecutar(raiz){
        var Resultado1=null;
        var Resultado2=null;
        var Resultado=null;
        switch (raiz.tag) {
            case "EXP":
                if (raiz.childs.length==3) {
                    Resultado1=this.ejecutar(raiz.childs[0]);
                    Resultado2=this.ejecutar(raiz.childs[2]);
                    var op = raiz.childs[1].value;
                    console.log(op);
                    switch (op) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            return this.aritmetico(Resultado1,Resultado2,raiz.childs[1].fila,raiz.childs[1].columna,op);
                        case "==":
                        case "!=":
                            return this.igualdad(Resultado1,Resultado2,raiz.childs[1].fila,raiz.childs[1].columna,op);
                        case ">":
                        case ">=":
                        case "<":
                        case "<=":
                            return this.relacional(Resultado1,Resultado2,raiz.childs[1].fila,raiz.childs[1].columna,op);
                        case "&&":
                        case "||":
                            return this.logicos(Resultado1,Resultado2,raiz.childs[1].fila,raiz.childs[1].columna,op);
                        default:
                            break;  
                    }
                }else if(raiz.childs.length==2){
                   if(raiz.childs[0].value=="!"){
                       Resultado1=this.ejecutar(raiz.childs[1])
                       if(Resultado1.tipo=="boolean"){
                           Resultado= new ResultadoOp();
                           Resultado.tipo="boolean"
                           Resultado.valor=!Resultado1.valor
                           return Resultado
                       }
                   }
                }else{
                    return this.ejecutar(raiz.childs[0]);
                }
                
                break;
            case "id":
                    Resultado = new ResultadoOp();
                    let simbolo= TS.getInstance().obtener(raiz.value);
                    Resultado.tipo=simbolo.tipo;
                    Resultado.valor=simbolo.valor;
                    console.log(raiz);
                    return Resultado;

     
                
            case "numero":
                    Resultado= new ResultadoOp();
                    if(raiz.value.includes(".")){
                        Resultado.tipo="double";
                        Resultado.valor=parseFloat(raiz.value);
                        return Resultado
                    }else{
                        Resultado.tipo="integer";
                        Resultado.valor=parseInt(raiz.value);
                        return Resultado
                    }
                
            case "true":
                    Resultado= new ResultadoOp();
                    Resultado.tipo="boolean";
                    Resultado.valor=true;
                    return Resultado;

                
            case "false":
                    Resultado= new ResultadoOp();
                    Resultado.tipo="boolean";
                    Resultado.valor=false;
                    return Resultado;

            case "string":
                    Resultado= new ResultadoOp();
                    Resultado.tipo="string";
                    Resultado.valor=raiz.value;
                    return Resultado;
            default:
                break;
        }

    }

    logicos(R1,R2,fila,columna,op){
            let tipo1 = R1.tipo;
            let tipo2 = R2.tipo;
            var res = new ResultadoOp();
            if(tipo1=="error"||tipo2=="error"){
                res.tipo="error";
                return res;
            }

            if(tipo1=="boolean" && tipo2=="boolean"){
                res.tipo="boolean"
                switch(op){
                    case "&&":
                        res.valor=R1.valor&&R2.valor
                        return res;
                    case "||":
                        res.valor=R1.valor||R2.valor;
                        return res;
                }
            }


        }

    aritmetico(R1,R2,fila,columna,op){
            
            let tipo1 = R1.tipo;
            let tipo2 = R2.tipo;
            var res = new ResultadoOp();
            if(tipo1=="error"||tipo2=="error"){
                res.tipo="error";
                return res;
            }
            switch(op){
                case "+":
                    switch(tipo1){
                        case "integer":
                            switch(tipo2){
                                case "integer":
                                    res.tipo="integer";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                case "double":
                                    res.tipo="double";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                case "string":
                                    res.tipo="string";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                default:
                                    L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                    res.tipo="error";
                                    res.valor="error";
                                    return res;
                            }
                        case "double":
                            switch(tipo2){
                                case "integer":
                                case "double":
                                    res.tipo="double";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                case "string":
                                    res.tipo="string";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                default:
                                    L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                    res.tipo="error";
                                    res.valor="error";
                                        return res;
                            }
                        case "string":
                            switch(tipo2){
                                case "integer":
                                case "double":
                                case "string":
                                    res.tipo="string";
                                    res.valor=R1.valor+R2.valor;
                                    return res;
                                default:
                                    L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                    res.tipo="error";
                                    res.valor="error";
                                    return res;
                            }
                        default:
                            L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                            res.tipo="error";
                            res.valor="error";
                            return res;
                    }
                case "-":
                    switch(tipo1){
                        case "integer":
                            switch(tipo2){
                                    case "integer":
                                        res.tipo="integer";
                                        res.valor=R1.valor-R2.valor;
                                        return res;
                                    case "double":
                                        res.tipo="double";
                                        res.valor=R1.valor-R2.valor;
                                        return res;
                                    default:
                                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                        res.tipo="error";
                                        res.valor="error";
                                        return res;
                                }
                        case "double":
                            switch(tipo2){
                                case "integer":
                                case "double":
                                    res.tipo="double";
                                    res.valor=R1.valor-R2.valor;
                                    return res;
                                default:
                                    L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                    res.tipo="error";
                                    res.valor="error";
                                    return res;
                                }
                        default:
                            L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                            res.tipo="error";
                            res.valor="error";
                            return res;
                        }
                case "*":
                        switch(tipo1){
                            case "integer":
                                switch(tipo2){
                                        case "integer":
                                            res.tipo="integer";
                                            res.valor=R1.valor*R2.valor;
                                            return res;
                                        case "double":
                                            res.tipo="double";
                                            res.valor=R1.valor*R2.valor;
                                            return res;
                                        default:
                                            L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                            res.tipo="error";
                                            res.valor="error";
                                            return res;
                                    }
                            case "double":
                                switch(tipo2){
                                    case "integer":
                                    case "double":
                                        res.tipo="double";
                                        res.valor=R1.valor*R2.valor;
                                        return res;
                                    default:
                                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                        res.tipo="error";
                                        res.valor="error";
                                        return res;
                                    }
                            default:
                                L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                res.tipo="error";
                                res.valor="error";
                                return res;
                            }
                case "/":
                        switch(tipo1){
                            case "integer":
                                switch(tipo2){
                                        case "integer":
                                            res.tipo="integer";
                                            res.valor=R1.valor/R2.valor;
                                            return res;
                                        case "double":
                                            res.tipo="double";
                                            res.valor=R1.valor/R2.valor;
                                            return res;
                                        default:
                                            L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                            res.tipo="error";
                                            res.valor="error";
                                            return res;
                                    }
                            case "double":
                                switch(tipo2){
                                    case "integer":
                                    case "double":
                                        res.tipo="double";
                                        res.valor=R1.valor/R2.valor;
                                        return res;
                                    default:
                                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                        res.tipo="error";
                                        res.valor="error";
                                        return res;
                                    }
                            default:
                                L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                res.tipo="error";
                                res.valor="error";
                                return res;
                            }


            }
            
        }



    relacional(R1,R2,fila,columna,op){
        let tipo1 = R1.tipo;
        let tipo2 = R2.tipo;
        var res = new ResultadoOp();
        if(tipo1=="error"||tipo2=="error"){
            res.tipo="error";
            return res;
        }
        switch(op){
            case ">":
                switch(tipo1){
                    case "integer":
                    case "double":
                        switch(tipo2){
                            case "integer":
                            case "double":
                                res.tipo="boolean";
                                res.valor=R1.valor>R2.valor;
                                return res;
                            default:
                                L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                res.tipo="error";
                                res.valor="error";
                                    return res;
                        }
                    default:
                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                        res.tipo="error";
                        res.valor="error";
                        return res;
                }
                case "<":
                    switch(tipo1){
                        case "integer":
                        case "double":
                            switch(tipo2){
                                case "integer":
                                case "double":
                                    res.tipo="boolean";
                                    res.valor=R1.valor<R2.valor;
                                    return res;
                                default:
                                    L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                    res.tipo="error";
                                    res.valor="error";
                                        return res;
                            }
                        default:
                            L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                            res.tipo="error";
                            res.valor="error";
                            return res;
                    }
                case ">=":
                        switch(tipo1){
                            case "integer":
                            case "double":
                                switch(tipo2){
                                    case "integer":
                                    case "double":
                                        res.tipo="boolean";
                                        res.valor=R1.valor>=R2.valor;
                                        return res;
                                    default:
                                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                        res.tipo="error";
                                        res.valor="error";
                                            return res;
                                }
                            default:
                                L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                res.tipo="error";
                                res.valor="error";
                                return res;
                        }
                case "<=":
                                switch(tipo1){
                                    case "integer":
                                    case "double":
                                        switch(tipo2){
                                            case "integer":
                                            case "double":
                                                res.tipo="boolean";
                                                res.valor=R1.valor<=R2.valor;
                                                return res;
                                            default:
                                                L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                                res.tipo="error";
                                                res.valor="error";
                                                    return res;
                                        }
                                    default:
                                        L_Error.getInstance().insertar(new N_Error("Semantico","No es posible operacion entre: "+tipo1 +' % '+tipo2,fila,columna));
                                        res.tipo="error";
                                        res.valor="error";
                                        return res;
                                }

        }

    }

    igualdad(R1,R2,fila,columna,op){
        let tipo1 = R1.tipo;
        let tipo2 = R2.tipo;
        var res = new ResultadoOp();
        if(tipo1=="error"||tipo2=="error"){
            res.tipo="error";
            return res;
        }
        switch(op){
            case "==":
                res.tipo="boolean";
                res.valor=R1.valor==R2.valor
                return res;
            case "!=":
                res.tipo="boolean";
                res.valor=R1.valor!=R2.valor;
                return res;
        }

    }

        verificarrelacional(tipo1,tipo2){
            switch(tipo1){
                case "integer":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default:
                            return false;
                    }
                case "double":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default: return false;

                    }
                case "char":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default: return false;
                    }

            }
        }
        verificarigualdad(tipo1,tipo2){
            switch(tipo1){
                case "integer":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default:
                            return false;
                    }
                case "double":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default: return false;

                    }
                case "char":
                    switch(tipo2){
                        case "integer":
                        case "double":
                        case "char":
                            return true;
                        default: return false;
                    }
                case "boolean":
                    switch(tipo2){
                        case "boolean":
                            return true;
                        default: return false;
                    }
            }
        }






        castearnumero(R1,pila){
            var temp0=Generador.getInstance().getTemp();
            var temp1=Generador.getInstance().getTemp();
            R1.codigo+=Generador.getInstance().makecomentario("Procesando casteo de "+R1.tmp);
            R1.codigo+=Generador.getInstance().makeasignacion(R1.tmp,temp0);
            R1.codigo+=Generador.getInstance().getfromP(temp1,(pila.size+2));
            R1.codigo+=Generador.getInstance().changestack(temp1,temp0);
            R1.codigo+=Generador.getInstance().incP(pila.size);
            R1.codigo+=Generador.getInstance().makecall('obtenerCadena_');
            R1.codigo+=Generador.getInstance().getfromStack('P',temp0);
            R1.codigo+=Generador.getInstance().make3d('+',temp0,'4',temp0);
            R1.codigo+=Generador.getInstance().decP(pila.size);
            R1.tmp=temp0;
            return R1;
        }

        procesarcadena(temporal,nombre_cad){
            var codigo="";
            var temp1 = Generador.getInstance().getTemp();
            var temp2 = Generador.getInstance().getTemp();
            var etq0 = Generador.getInstance().getEtq();
            var etq1 = Generador.getInstance().getEtq();
            var etq2 = Generador.getInstance().getEtq();
            codigo+=Generador.getInstance().makecomentario("Procesando cadena: "+nombre_cad);
            codigo+=Generador.getInstance().makeasignacion(temporal,temp1);
            codigo+=Generador.getInstance().getheap(temp1,temp2);
            codigo+=etq0+":\n";
            codigo+=Generador.getInstance().jmpcondicional(temp2,"<>","-1",etq1);
            codigo+=Generador.getInstance().jmpincondicional(etq2);
            codigo+=etq1+":\n";
            codigo+=Generador.getInstance().changeheap('H',temp2);
            codigo+=Generador.getInstance().incheap('1');
            codigo+=Generador.getInstance().make3d("+",temp1,"1",temp1);
            codigo+=Generador.getInstance().getheap(temp1,temp2);
            codigo+=Generador.getInstance().jmpincondicional(etq0);
            codigo+=etq2+": \n";
            return codigo;
        }
    }
