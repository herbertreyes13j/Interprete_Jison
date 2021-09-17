var L_Error = (function(){
    var instancia;


    class Lista{
        constructor(){
            this.principio=null;
            this.fin=null;
        }

        insertar(Error){
            
            if(this.principio==null){
                this.principio=Error;
                this.fin=Error;
                return;
            }

            this.fin.siguiente=Error;
            Error.anterior=this.fin;
            this.fin=Error;
            console.log(this.fin);
        }

        getErrores(){
            var texto="";

            var muestra=this.principio;

            while(muestra!=null){
                texto+="ERROR: Tipo:"+muestra.tipo
                +" Descripcion: "+muestra.descripcion
                +" Fila: "+muestra.fila
                +" Columna: "+muestra.columna+" \n";
                muestra=muestra.siguiente;
            }

            return texto;

        }    
        
        reiniciar() {
        this.principio=null;
        this.fin=null;
        }

        

 
    }



    function crearInstancia(){
        return new Lista();
    }

    return {
        getInstance:function(){
            if(!instancia){
                instancia=crearInstancia()
            }
            return instancia;
        }
    }

})();