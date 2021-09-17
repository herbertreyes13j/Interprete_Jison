%lex

%options case-insensitive

%%

\s+											// se ignoran espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas



"true"              return 'Tok_true'
"switch"            return 'Tok_switch'
"continue"          return 'Tok_continue' 
"false"             return 'Tok_false'
"double"            return 'Tok_double'
"if"                return 'Tok_if'
"print"             return 'Tok_print' 
"else"              return 'Tok_else' 
"break"             return 'Tok_break' 
"while"             return 'Tok_while' 
"do"                return 'Tok_do'

">="                return 'Tok_mayori'
"<="                return 'Tok_menori'
"=="                return 'Tok_igual'
";"                 return 'Tok_pyc'
","                 return 'Tok_coma'
"="                 return 'Tok_asigna1'
"["                 return 'Tok_cor1'
"]"                 return 'Tok_cor2'
"("                 return 'Tok_par1'
")"                 return 'Tok_par2'
"{"                 return 'Tok_llav1'
"}"                 return 'Tok_llav2'
"-"                 return 'Tok_menos'
"!="                return 'Tok_diferente'
"!"                 return 'Tok_not'
"^^"                return 'Tok_pot'
"*"                 return 'Tok_por'
"/"                 return 'Tok_div'
"%"                 return 'Tok_mod'
"+"                 return 'Tok_mas'
">"                 return 'Tok_mayor'
"<"                 return 'Tok_menor'

"&&"                 return 'Tok_and'
"||"                 return 'Tok_or'


\"[^\"]*\"              { yytext = yytext.substr(1,yyleng-2); return 'Tok_string'; }
[0-9]+("."[0-9]+)?\b    return 'Tok_numero';



([a-zA-Z])[a-zA-Z0-9"-"]*".j" return 'Tok_Nombre';
([a-zA-Z_])[a-zA-Z0-9_]* return 'Tok_ID';



<<EOF>>				return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                          L_Error.getInstance().insertar(new N_Error("Lexico","Caracter: \" "+yytext+"\" no es valido" ,yylloc.first_line,yylloc.first_column));
                                          return null; }

/lex

%{


function AST_Node(tag, value,fila,columna){

    this.tag = tag;
    this.value = value;
    this.fila=fila;
    this.columna=columna;

    this.childs = [];

    this.addChilds = addChilds;
    this.getSon = getSon;

    function addChilds(){
        for (var i = 0; i < arguments.length; i++) {
            this.childs.push(arguments[i]);
            if (arguments[i]!== null){
                arguments[i].padre = this;
            }
        }
    }  

    function getSon(pos){
        if(pos > this.hijos.length - 1) return null;
        return this.hijos[pos];
    }
 };
%}


%right 'Tok_asigna1'
%left  'Tok_or'
%left  'Tok_and'
%left  'Tok_igual' 'Tok_igualr' 'Tok_diferente'
%nonassoc  'Tok_mayor' 'Tok_menor' 'Tok_menori' 'Tok_mayori'
%left  'Tok_mas' 'Tok_menos'
%left  'Tok_por' 'Tok_div' 'Tok_mod'
%right 'Tok_pot'
%right 'Tok_not' UMINUS



%start S

%% /* Definición de la gramática */

S: SENTENCIAS EOF {$$=new AST_Node("RAIZ","RAIZ",this._$.first_line,@1.last_column);$$.addChilds($1); return $$};

SENTENCIAS: SENTENCIAS SENTENCIA{$1.addChilds($2); $$=$1;}
        
        |   SENTENCIA{$$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,@1.last_column);
                      $$.addChilds($1);} ;
                    

SENTENCIA : DECLARACION_1 Tok_pyc{$$=$1}
           |ASIGNACION Tok_pyc{$$=$1}
           |BLOQUE{$$=$1}
           |IF{$$=$1}
           |BREAK Tok_pyc{$$=$1}
           |WHILE{$$=$1}
           |DO_WHILE Tok_pyc{$$=$1}
           |CONTINUE Tok_pyc{$$=$1}
           |PRINT{$$=$1}
           |ASIGNACION error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));}
           |DO_WHILE error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));}
           |BREAK error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));}
           |CONTINUE error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));}
           |RETURN error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));}                      
           |DECLARACION_1 error {L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,@1.last_column));};



ID_LIST: ID_LIST Tok_coma Tok_ID {$1.addChilds(new AST_Node("ID",$3,this._$.first_line,@3.first_column)); $$=$1;}
        | Tok_ID {$$= new AST_Node("ID_LIST","ID_LIST"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))};

DECLARACION_1: ID_LIST  {$$= new AST_Node("DECLARACION","DECLARACION",this._$.first_line,@1.first_column); $$.addChilds($1)};
             // | error {L_Error.getInstance().insertar(new N_Error("Sintactico",yytext,this._$.first_line,this._$.first_column));};


ASIGNACION: Tok_ID Tok_asigna1 EXP {$$=new AST_Node("ASIGNACION","ASIGNACION",this._$.first_line,@1.last_column); 
                                            $$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column),$3);};   


BLOQUE: Tok_llav1 SENTENCIAS Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column); $$.addChilds($2)}
        |Tok_llav1 Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column);};

IF: Tok_if Tok_par1 EXP Tok_par2 BLOQUE    {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}
    |Tok_if Tok_par1 EXP Tok_par2 BLOQUE Tok_else BLOQUE {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column); var aux = new AST_Node("ELSE","ELSE",this._$.first_line,@6.last_column); aux.addChilds($7);$$.addChilds($3,$5,aux)};


BREAK: Tok_break {$$=new AST_Node("BREAK","BREAK",this._$.first_line,@1.last_column)};

WHILE: Tok_while Tok_par1 EXP Tok_par2 BLOQUE{$$=new AST_Node("WHILE","WHILE",this._$.first_line,@1.last_column); $$.addChilds($3,$5)};

DO_WHILE: Tok_do BLOQUE Tok_while Tok_par1 EXP Tok_par2 {$$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,@1.last_column);$$.addChilds($2,$5)};

CONTINUE: Tok_continue{$$= new AST_Node("CONTINUE","CONTINUE",this._$.first_line,@1.last_column)};


PRINT: Tok_print Tok_par1 EXP Tok_par2 Tok_pyc {$$= new AST_Node("PRINT","PRINT",this._$.first_line,@1.last_column); $$.addChilds($3);};


EXP: EXP Tok_mas EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menos EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_por EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_div EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_pot EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mod EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_diferente EXP              {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_igual EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_igualr EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mayor EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menor EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mayori EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menori EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_and EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_or EXP                     {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |Tok_not EXP                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |Tok_par1 EXP Tok_par2              {$$=$2}
    |Tok_string                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                        $$.addChilds(new AST_Node("string",text,this._$.first_line,@1.last_column));}
    |Tok_numero                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("numero",$1,this._$.first_line,@1.last_column));}
    |Tok_true                           {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("true",$1,this._$.first_line,@1.last_column));}
    |Tok_false                          {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("false",$1,this._$.first_line,@1.last_column));}
    |Tok_ID                             {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column));};

