class Pila{
    constructor(ambito){
        this.size=2;
        this.inicio=null;
        this.fin=null;
        this.ambito=ambito;
        this.indicenegativo=-1;
        this.nombre=ambito;
    }

    reiniciar(){
        this.size=2;
        this.inicio=null;
        this.fin=null;
        this.indicenegativo=-1;
    }

    push(nueva)
    {
        if (this.existe(nueva.nombre)) return false;

        //Console.WriteLine("ingresando a la pila variable: '" + nueva.nombre + "' con un valor de: " + nueva.valor.valor);
        if (this.inicio == null)
        {
            this.inicio = nueva;
            this.fin = nueva;
        
        }
        else
        {
            nueva.anterior=this.fin;
            this.fin.siguiente=nueva;
            this.fin = nueva;
           
        }
        this.size++;

        return true;
    }
    pop()
    {
        if (this.size == 0) { return null; } //la pila esta vacia  

        var devolver = this.fin; //se devuelve el ultimo insertado
        this.fin = this.fin.anterior; //se reescribe el ultimo 
        if (this.fin == null) this.inicio = null;
        this.size--; //se disminuye el tamaño
        return devolver;
    }

    vaciarPila()
    {
        while (!this.fin.nombre=="$$" && !this.fin.nombre()=="$") { var aux = this.pop(); }//vaciar hasta $ o $$
        this.pop();
    }
    existe(nombre){
        if(nombre=="$$"||nombre=="$") return false;
        var actual = this.fin;

        while(actual!=null){
            if(actual.nombre.toUpperCase()==nombre.toUpperCase()){
                return true;
            }
            if(actual.nombre=="$$")return false;
            actual = actual.anterior;
        }

        return false;

    }

    obtener(nombre)
    {
        var actual = this.fin; //el nodo actual siempre es el ultimo de la pila
        if (actual==null)return null; 
            
        
        for (var i = 0; i < this.size-2; i++)
        {
            if (actual.nombre.toUpperCase()==nombre.toUpperCase())
            {
                return actual;   
            }
            
            actual = actual.anterior;
        }
        return null;
    }
    push_global(nueva)
    {
        if (this.existe(nueva.nombre)) return false;

        //Console.WriteLine("ingresando a la pila variable: '" + nueva.nombre + "' con un valor de: " + nueva.valor.valor);
        if (this.inicio == null)
        {
            this.inicio = nueva;
            this.fin = nueva;
        
        }
        else
        {
            nueva.anterior=this.fin;
            this.fin.siguiente=nueva;
            this.fin = nueva;
           
        }
        this.indicenegativo--;

        return true;
    }

    
}