/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,15],$V2=[1,16],$V3=[1,17],$V4=[1,18],$V5=[1,19],$V6=[1,20],$V7=[1,21],$V8=[1,22],$V9=[5,17,20,23,24,25,29,30,31,32,33],$Va=[2,8],$Vb=[2,8,19],$Vc=[1,53],$Vd=[1,48],$Ve=[1,46],$Vf=[1,47],$Vg=[1,49],$Vh=[1,50],$Vi=[1,51],$Vj=[1,52],$Vk=[5,17,20,23,24,25,28,29,30,31,32,33],$Vl=[1,59],$Vm=[1,60],$Vn=[1,61],$Vo=[1,62],$Vp=[1,63],$Vq=[1,64],$Vr=[1,65],$Vs=[1,66],$Vt=[1,67],$Vu=[1,68],$Vv=[1,69],$Vw=[1,70],$Vx=[1,71],$Vy=[1,72],$Vz=[1,73],$VA=[2,8,27,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],$VB=[2,8,27,34,35,40,41,42,43,44,45,46,47,48],$VC=[2,8,27,34,35,36,37,39,40,41,42,43,44,45,46,47,48],$VD=[2,8,27,40,41,42,47,48];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"S":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"DECLARACION_1":7,"Tok_pyc":8,"ASIGNACION":9,"BLOQUE":10,"IF":11,"BREAK":12,"WHILE":13,"DO_WHILE":14,"CONTINUE":15,"PRINT":16,"RETURN":17,"ID_LIST":18,"Tok_coma":19,"Tok_ID":20,"Tok_asigna1":21,"EXP":22,"Tok_llav1":23,"Tok_llav2":24,"Tok_if":25,"Tok_par1":26,"Tok_par2":27,"Tok_else":28,"Tok_break":29,"Tok_while":30,"Tok_do":31,"Tok_continue":32,"Tok_print":33,"Tok_mas":34,"Tok_menos":35,"Tok_por":36,"Tok_div":37,"Tok_pot":38,"Tok_mod":39,"Tok_diferente":40,"Tok_igual":41,"Tok_igualr":42,"Tok_mayor":43,"Tok_menor":44,"Tok_mayori":45,"Tok_menori":46,"Tok_and":47,"Tok_or":48,"Tok_not":49,"Tok_string":50,"Tok_numero":51,"Tok_true":52,"Tok_false":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"Tok_pyc",17:"RETURN",19:"Tok_coma",20:"Tok_ID",21:"Tok_asigna1",23:"Tok_llav1",24:"Tok_llav2",25:"Tok_if",26:"Tok_par1",27:"Tok_par2",28:"Tok_else",29:"Tok_break",30:"Tok_while",31:"Tok_do",32:"Tok_continue",33:"Tok_print",34:"Tok_mas",35:"Tok_menos",36:"Tok_por",37:"Tok_div",38:"Tok_pot",39:"Tok_mod",40:"Tok_diferente",41:"Tok_igual",42:"Tok_igualr",43:"Tok_mayor",44:"Tok_menor",45:"Tok_mayori",46:"Tok_menori",47:"Tok_and",48:"Tok_or",49:"Tok_not",50:"Tok_string",51:"Tok_numero",52:"Tok_true",53:"Tok_false"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[6,2],[6,1],[6,2],[6,2],[6,1],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[18,3],[18,1],[7,1],[9,3],[10,3],[10,2],[11,5],[11,7],[12,1],[13,5],[14,6],[15,1],[16,5],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,1],[22,1],[22,1],[22,1],[22,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$=new AST_Node("RAIZ","RAIZ",this._$.first_line,_$[$0-1].last_column);this.$.addChilds($$[$0-1]); return this.$
break;
case 2:
$$[$0-1].addChilds($$[$0]); this.$=$$[$0-1];
break;
case 3:
this.$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,_$[$0].last_column);
                      this.$.addChilds($$[$0]);
break;
case 4: case 5: case 8: case 10: case 11: case 49:
this.$=$$[$0-1]
break;
case 6: case 7: case 9: case 12:
this.$=$$[$0]
break;
case 13: case 14: case 15: case 16: case 17: case 18:
L_Error.getInstance().insertar(new N_Error("Sintactico","Error Recuperado: Falta signo: ;",this._$.first_line,_$[$0-1].last_column));
break;
case 19:
$$[$0-2].addChilds(new AST_Node("ID",$$[$0],this._$.first_line,_$[$0].first_column)); this.$=$$[$0-2];
break;
case 20:
this.$= new AST_Node("ID_LIST","ID_LIST"); this.$.addChilds(new AST_Node("ID",$$[$0],this._$.first_line,_$[$0].first_column))
break;
case 21:
this.$= new AST_Node("DECLARACION","DECLARACION",this._$.first_line,_$[$0].first_column); this.$.addChilds($$[$0])
break;
case 22:
this.$=new AST_Node("ASIGNACION","ASIGNACION",this._$.first_line,_$[$0-2].last_column); 
                                            this.$.addChilds(new AST_Node("id",$$[$0-2],this._$.first_line,_$[$0-2].last_column),$$[$0]);
break;
case 23:
this.$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,_$[$0-2].last_column); this.$.addChilds($$[$0-1])
break;
case 24:
this.$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,_$[$0-1].last_column);
break;
case 25:
this.$= new AST_Node("IF","IF",this._$.first_line,_$[$0-4].last_column);this.$.addChilds($$[$0-2],$$[$0])
break;
case 26:
this.$= new AST_Node("IF","IF",this._$.first_line,_$[$0-6].last_column); var aux = new AST_Node("ELSE","ELSE",this._$.first_line,_$[$0-1].last_column); aux.addChilds($$[$0]);this.$.addChilds($$[$0-4],$$[$0-2],aux)
break;
case 27:
this.$=new AST_Node("BREAK","BREAK",this._$.first_line,_$[$0].last_column)
break;
case 28:
this.$=new AST_Node("WHILE","WHILE",this._$.first_line,_$[$0-4].last_column); this.$.addChilds($$[$0-2],$$[$0])
break;
case 29:
this.$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,_$[$0-5].last_column);this.$.addChilds($$[$0-4],$$[$0-1])
break;
case 30:
this.$= new AST_Node("CONTINUE","CONTINUE",this._$.first_line,_$[$0].last_column)
break;
case 31:
this.$= new AST_Node("PRINT","PRINT",this._$.first_line,_$[$0-4].last_column); this.$.addChilds($$[$0-2]);
break;
case 32: case 33: case 34: case 35: case 36: case 37: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0-1].last_column);this.$.addChilds($$[$0-2],new AST_Node("op",$$[$0-1],this._$.first_line,_$[$0-1].last_column),$$[$0]);
break;
case 38:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0-1].last_column);this.$.addChilds(new AST_Node("op",$$[$0-1],this._$.first_line,_$[$0-1].last_column),$$[$0]);
break;
case 48:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("op",$$[$0-1],this._$.first_line,_$[$0-1].last_column),$$[$0]);
break;
case 50:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);
                                         var text = $$[$0].substr(0,$$[$0].length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                        this.$.addChilds(new AST_Node("string",text,this._$.first_line,_$[$0].last_column));
break;
case 51:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("numero",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 52:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("true",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 53:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("false",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 54:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("id",$$[$0],this._$.first_line,_$[$0].last_column));
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:$V0,18:14,20:$V1,23:$V2,25:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8},{1:[3]},{5:[1,23],6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:$V0,18:14,20:$V1,23:$V2,25:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8},o($V9,[2,3]),{2:[1,26],8:[1,25]},{2:[1,28],8:[1,27]},o($V9,[2,6]),o($V9,[2,7]),{2:[1,30],8:[1,29]},o($V9,[2,9]),{2:[1,32],8:[1,31]},{2:[1,34],8:[1,33]},o($V9,[2,12]),{2:[1,35]},o($Va,[2,21],{19:[1,36]}),o($Vb,[2,20],{21:[1,37]}),{4:38,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:$V0,18:14,20:$V1,23:$V2,24:[1,39],25:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8},{26:[1,40]},o($Va,[2,27]),{26:[1,41]},{10:42,23:$V2},o($Va,[2,30]),{26:[1,43]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,4]),o($V9,[2,18]),o($V9,[2,5]),o($V9,[2,13]),o($V9,$Va),o($V9,[2,15]),o($V9,[2,10]),o($V9,[2,14]),o($V9,[2,11]),o($V9,[2,16]),o($V9,[2,17]),{20:[1,44]},{20:$Vc,22:45,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{6:24,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:$V0,18:14,20:$V1,23:$V2,24:[1,54],25:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8},o($Vk,[2,24]),{20:$Vc,22:55,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:56,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{30:[1,57]},{20:$Vc,22:58,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},o($Vb,[2,19]),o($Va,[2,22],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz}),{20:$Vc,22:74,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:75,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:76,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},o($VA,[2,50]),o($VA,[2,51]),o($VA,[2,52]),o($VA,[2,53]),o($VA,[2,54]),o($Vk,[2,23]),{27:[1,77],34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz},{27:[1,78],34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz},{26:[1,79]},{27:[1,80],34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz},{20:$Vc,22:81,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:82,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:83,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:84,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:85,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:86,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:87,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:88,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:89,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:90,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:91,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:92,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:93,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:94,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{20:$Vc,22:95,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},o($VA,[2,38]),o($VA,[2,48]),{27:[1,96],34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz},{10:97,23:$V2},{10:98,23:$V2},{20:$Vc,22:99,26:$Vd,35:$Ve,49:$Vf,50:$Vg,51:$Vh,52:$Vi,53:$Vj},{8:[1,100]},o($VB,[2,32],{36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o($VB,[2,33],{36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o($VC,[2,34],{38:$Vp}),o($VC,[2,35],{38:$Vp}),o($VC,[2,36],{38:$Vp}),o($VC,[2,37],{38:$Vp}),o($VD,[2,39],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vu,44:$Vv,45:$Vw,46:$Vx}),o($VD,[2,40],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vu,44:$Vv,45:$Vw,46:$Vx}),o($VD,[2,41],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vu,44:$Vv,45:$Vw,46:$Vx}),o($VD,[2,42],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o($VD,[2,43],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o($VD,[2,44],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o($VD,[2,45],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq}),o([2,8,27,47,48],[2,46],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx}),o([2,8,27,48],[2,47],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy}),o($VA,[2,49]),o($V9,[2,25],{28:[1,101]}),o($V9,[2,28]),{27:[1,102],34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz},o($V9,[2,31]),{10:103,23:$V2},o($Va,[2,29]),o($V9,[2,26])],
defaultActions: {23:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};



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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran espacios en blanco
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 52
break;
case 4:return 'Tok_switch'
break;
case 5:return 32 
break;
case 6:return 53
break;
case 7:return 'Tok_double'
break;
case 8:return 25
break;
case 9:return 33 
break;
case 10:return 28 
break;
case 11:return 29 
break;
case 12:return 30 
break;
case 13:return 31
break;
case 14:return 45
break;
case 15:return 46
break;
case 16:return 41
break;
case 17:return 8
break;
case 18:return 19
break;
case 19:return 21
break;
case 20:return 'Tok_cor1'
break;
case 21:return 'Tok_cor2'
break;
case 22:return 26
break;
case 23:return 27
break;
case 24:return 23
break;
case 25:return 24
break;
case 26:return 35
break;
case 27:return 40
break;
case 28:return 49
break;
case 29:return 38
break;
case 30:return 36
break;
case 31:return 37
break;
case 32:return 39
break;
case 33:return 34
break;
case 34:return 43
break;
case 35:return 44
break;
case 36:return 47
break;
case 37:return 48
break;
case 38: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 50; 
break;
case 39:return 51;
break;
case 40:return 'Tok_Nombre';
break;
case 41:return 20;
break;
case 42:return 5;
break;
case 43: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                          L_Error.getInstance().insertar(new N_Error("Lexico","Caracter: \" "+yy_.yytext+"\" no es valido" ,yy_.yylloc.first_line,yy_.yylloc.first_column));
                                          return null; 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:true\b)/i,/^(?:switch\b)/i,/^(?:continue\b)/i,/^(?:false\b)/i,/^(?:double\b)/i,/^(?:if\b)/i,/^(?:print\b)/i,/^(?:else\b)/i,/^(?:break\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:==)/i,/^(?:;)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:-)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:\^\^)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\+)/i,/^(?:>)/i,/^(?:<)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:"[^\"]*")/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9"-"]*\.j\b)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}