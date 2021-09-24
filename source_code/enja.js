let os = require('os');

variable_value = {};
def_value = {};
start_time = 0;

const array_delete = (a,word) => {
  let stack  = []
  for(let i = 0; i < a.length; i++){
    if(!word.includes(a[i])){
      stack.push(a[i]);
    }
  }
  return stack;
}

const flatten = (a) => {
  let array = [];
  for(let i = 0; i < a.length; i++){
    if(Array.isArray(a[i])){
      let s = flatten(a[i]);
      for(let j = 0; j < s.length; j++){
        array.push(s[j]);
      }
    }else{
      array.push(a[i]);
    }
  }
  return array;
}

const toHalfwidth = word =>{
  return word.replace(/[Ａ-Ｚａ-ｚ０-９ ＞ ＜ ｜ ＝ ＋ － ！ ＊ ／ ％ ＾ ｛ ｝ ［ ］ ” “ ； 、]/g,function(s){
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

const ope_check = ope =>{
  switch(ope){
    case "PLUS":
    case "MINUS":
    case "MULTI":
    case "DIVIS":
    case "POWER":
    case "NUMBER":
    case "BOOLEAN":
    case "STRING":
    case "REMAINDE":
    case "INT_QUOT":
    case "VARIABLE":
    case "PARAMS_S":
    case "PARAMS_E":
    case "BRACKET_S":
    case "BRACKET_E":
    case "FUNCTION":
    case "COMMA":
    case "F_S":
    case "F_E":
    case "PERIOD":
    case "EQUAL":
    case "GREATER":
    case "LESS":
    case "GREATER_EQUAL":
    case "LESS_EQUAL":
    case "NOT_EQUAL":
    case "AND":
    case "OR":
    case "XOR":
    case "NOT":
      return true;
    default:
      return false;
  }
}



const brace = txt =>{
  let input_txt = txt.split(os.EOL);
  input_txt = array_delete(input_txt,[""]);
  input_txt.push("");

  let before = 0;
  let count = [];
  let program = "";

  for(let index in input_txt){
    let j = 0;
    while(input_txt[index][j] == " " || input_txt[index][j] == "　"){j++;}
    
    if(j > before){
      program += "{" + input_txt[index] + os.EOL;
      if(count.indexOf(j) == -1){count.push(j);}
      before = j;
    }else if(j < before){
      let position = count.length - 1 - count.indexOf(j);
      if(count.indexOf(j) != -1){
        for(let k = 0; k < position; k++){program += "}";}
        if(count.indexOf(j) == -1){count.push(j);}
        count.splice(count.indexOf(j) + 1, count.length - 1);
        before = j;
      }else{
        console.log("!!The output may not be correct due to indentation errors.");
        let k = j;
        while(!count.indexOf(k) != -1 && count[count.length - 1] > k){
          k++;
        }
        position = count.length - 1 - count.indexOf(k);
        for(let l = 0; l < position; l++){
          program += "}"
        }
        before = k;
      }
      program += input_txt[index] + os.EOL;
    }else{
      if(count.indexOf(j) == -1){
        count.push(j);
        before = j;
      }
      program += input_txt[index] + os.EOL;
    }
  }
  program = program.split(os.EOL+"{").join("{"+os.EOL);
  return program;
}


const lexical = (txt,token,full_half) =>{
  let program = txt;
  program = program.split("\'").join("|\'|");
  program = program.split("\"").join("|\"|");
  program = program.split(os.EOL).join("|"+os.EOL+"|")

  let program_array = array_delete(program.split("|"),[""]);
  let stack = [];

  for(let i = 0; i < program_array.length; i++){
    switch(program_array[i]){
      case "\"":
        stack.push(program_array[i]);
        i++;
        while(program_array[i] != "\"" && i < program_array.length){
          stack.push(program_array[i]);
          i++;
        }
        stack.push(program_array[i]);
        break;
      case "\'":
        stack.push(program_array[i]);
        i++;
        while(program_array[i] != "\'" && i < program_array.length){
          stack.push(program_array[i]);
          i++;
        }
        stack.push(program_array[i]);
        break;
      default:
        let s = program_array[i];
        for(key in full_half){
          s = s.split(key).join(full_half[key]);
        }

        s = s.split(" ").join("|");
        s = s.split("　").join("|");
        for(let j = 0; j < token[0].length; j++){
          s = s.split(token[0][j]).join(`|${token[0][j]}|`);
        }
        for(let j = 0; j < s.length; j++){
          if(s[j] == "." && isNaN(s[j-1]) && isNaN(s[j+1])){
            s = `${s.slice(0,j)}|.|${s.slice(j+1)}`;
            j+=2;
          }
        }

        while(s.indexOf("||") != -1){s = s.split("||").join("|");}

        for(let k = token.length - 1; k > 0; k--){
          for(let l = 0; l < token[k].length; l++){
            let check = "";
            for(let m = 0; m < token[k][l].length; m++){
              check += token[k][l][m] + "|";
            }
            check = check.slice(0,-1);

            s = s.split(check).join(token[k][l]);
          }
        }
        stack.push(array_delete(s.split("|"),["",";"]));
        break;
    }
  }

  program_array = flatten(stack);
  while(program_array[program_array.length - 1] == os.EOL && program_array[program_array.length - 2] == os.EOL){program_array.pop();}

  return program_array;
}


const purser = (array,purse,equal) =>{
  let exp = [];
  let type = [];
  let variable = [];
  let define = [];

  let def_mode = false;
  let equal_mode = false;

  for(let i = 0; i < array.length; i++){type.push("");}

  for(let i = 0; i < array.length; i++){
    if(equal.indexOf(toHalfwidth(array[i]).toLowerCase()) != -1){equal_mode = true;}

    if(toHalfwidth(array[i]).toLowerCase() in purse){
      type[i] = purse[toHalfwidth(array[i].toLowerCase())];
    }else{
      switch(toHalfwidth(array[i]).toLowerCase()){
        case "=":
          if(equal_mode){
            type[i] = "EQUAL";
          }else{
            type[i] = "SUBSTI";
            if(type[i-1] == "STRING"){
              type[i-1] = "VARIABLE";
              if(variable.indexOf(array[i-1] == -1)){
                variable.push(array[i-1]);
              }
            }
            equal_mode = true;
          }
          break;

        case os.EOL:
          type[i] = "NEW_LINE";
          equal_mode = false;
          def_mode = false;
          break;
        
        case "\"":
        case "\'":
          type[i] = "DOUBLE_QUATE";
          type[i+1] = "STRING";
          type[i+2] = "DOUBLE_QUATE";
          i += 2;
          break;

        case "def":
        case "関数":
          type[i] = "DEFINE";
          i++;
          type[i] = "FUNCTION";
          if(define.indexOf(array[i]) == -1){
            define.push(array[i]);
          }
          def_mode = true;
          break;

        default:
          if(variable.indexOf(array[i]) != -1){
            type[i] = "VARIABLE";
          }else if(define.indexOf(array[i]) != -1){
            type[i] = "FUNCTION";
          }else if(def_mode){
            type[i] = "VARIABLE";
            variable.push(array[i]);
          }else{
            if(!isNaN(toHalfwidth(array[i]).toLowerCase())){
              array[i] = Number(toHalfwidth(array[i]).toLowerCase());
              type[i] = "NUMBER";
            }else if(toHalfwidth(array[i]).toLowerCase() == "true" || toHalfwidth(array[i]).toLowerCase() == "真"){
              array[i] = true;
              type[i] = "BOOLEAN";
            }else if(toHalfwidth(array[i]).toLowerCase() == "false" || toHalfwidth(array[i]).toLowerCase() == "偽"){
              array[i] = false;
              type[i] = "BOOLEAN";
            }else{
              array[i] = String(array[i]);
              type[i] = "STRING";
            }
          }
          break;
      }
    }
  }
  array = array_delete(array,["\"","\'"]);
  type = array_delete(type,["DOUBLE_QUATE"]);

  return[array,type];
}


const poland = (array,type,priprity) => {
  let stack = [];
  let stack_array = [];
  let stack_ope = [];
  let stack_ope_array = [];
  let pm_stack_type = [];
  let pm_stack_array = [];
  for(let i = 0; i < type.length; i++){
    if(stack.length == 0 && (type[i] == "PLUS" || type[i] == "MINUS")){
      pm_stack_type.push(type[i])
      pm_stack_array.push(array[i])
      i++;
    }
    if(type[i] == "NUMBER" || type[i] == "VARIABLE" || type[i] == "STRING" || type[i] == "BOOLEAN"){
      stack.push(type[i]);
      stack_array.push(array[i]);
    }else if(type[i] == "BRACKET_S"){
      stack.push(type[i]);
      stack_array.push(array[i]);

      let start = i + 1;
      let run = 1;
      while(run > 0){
        i++;
        if(type[i] == "BRACKET_S"){
          run++;
        }else if(type[i] == "BRACKET_E"){
          run--;
        }
      }
      let end = i;

      let poland_change = poland(array.slice(start,end),type.slice(start,end),priprity);
      stack.push(poland_change[1]);
      stack_array.push(poland_change[0]);
      stack.push(type[i]);
      stack_array.push(array[i]);
    
    }else if(type[i] == "PARAMS_S"){
      let start = i + 1;
      let run = 1;
      while(run > 0){
        i++;
        if(type[i] == "PARAMS_S"){
          run++;
        }else if(type[i] == "PARAMS_E"){
          run--;
        }
      }
      let end = i;

      let poland_change = poland(array.slice(start,end),type.slice(start,end),priprity);
      stack.push(poland_change[1]);
      stack_array.push(poland_change[0]);

    }else if(type[i] == "FUNCTION"){
      stack.push(type[i]);
      stack_array.push(array[i]);
      if(type[i+1] == "PARAMS_S"){
        stack.push("F_S");
        stack_array.push("$");
        i++;
        
        let start = i + 1;
        let run = 1;
        while(run > 0){
          i++;
          if(type[i] == "PARAMS_S"){
            run++;
          }else if(type[i] == "PARAMS_E"){
            run--;
          }
        }
        let end = i;

        let poland_change = poland(array.slice(start,end),type.slice(start,end),priprity);
        stack.push(poland_change[1]);
        stack_array.push(poland_change[0]);
        stack.push("F_E");
        stack_array.push("$");
      }

    }else if(type[i] == "COMMA"){
      for(let j = 0; j < stack_ope.length; j++){
        stack.push(stack_ope[j]);
        stack_array.push(stack_ope_array[j]);
      }
      stack_ope.length = 0;
      stack_ope_array.length = 0;
      stack.push("COMMA");
      stack_array.push(",");

    }else if(type[i] == "PERIOD"){
      stack.push("PERIOD");
      stack_array.push(".");

    }else if(stack_ope.length == 0){
      stack_ope.push(type[i]);
      stack_ope_array.push(array[i]);

    }else if(priprity[type[i]] >= priprity[stack_ope[0]]){
      stack_ope.unshift(type[i]);
      stack_ope_array.unshift(array[i]);

    }else{
      while(priprity[type[i]] <= priprity[stack_ope[0]]){
        stack.push(stack_ope[0]);
        stack_array.push(stack_ope_array[0]);
        stack_ope.shift();
        stack_ope_array.shift();
      }
      stack_ope.push(type[i]);
      stack_ope_array.push(array[i]);
    }

    if(pm_stack_array.length == 1){
      stack.push(pm_stack_type[0])
      stack_array.push(pm_stack_array[0])

      pm_stack_array.length = 0
      pm_stack_type.length = 0
    }
  } 

  for(var i = 0; i < stack_ope.length; i++){
    stack.push(stack_ope[i]);
    stack_array.push(stack_ope_array[i]);
  }

  return [stack_array,stack];
}

const calculate = (array,type) => {
  let ini_variable_value = {"pi":Math.PI,
                            "円周率":Math.PI,
                            "fullyear":new Date().getFullYear(),
                            "今年":new Date().getFullYear(),
                            "month":new Date().getMonth() + 1,
                            "今月":new Date().getMonth() + 1,
                            "date":new Date().getDate(),
                            "今日":new Date().getDate(),
                            "hour":new Date().getHours(),
                            "今時間":new Date().getHours(),
                            "minute":new Date().getMinutes(),
                            "今分":new Date().getMinutes(),
                            "second":new Date().getSeconds(),
                            "今秒":new Date().getSeconds(),
                            "millisecond":new Date().getMilliseconds(),
                            "今ミリ秒":new Date().getMilliseconds()}
  let stack = [];
  let judge = true;
  let i = -1;
  let result = [];
  while(judge){
    i++;
    switch(type[i]){
      case "PLUS":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = stack[1] + stack[0][j]
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] += stack[0]
          }
          stack.splice(0,1);
        }else{
          stack.splice(0,2,stack[1]+stack[0]);
        }
        break;
      case "MINUS":
        if(stack.length > 1){
          if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
            for(let j = 0; j < stack[0].length; j++){
              stack[0][j] = stack[1] - stack[0][j]
            }
            stack.splice(1,1);
          }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
            for(let j = 0; j < stack[1].length; j++){
              stack[1][j] -= stack[0]
            }
            stack.splice(0,1);
          }else{
            stack.splice(0,2,stack[1]-stack[0]);
          }
        }else{
          if(Array.isArray(stack[0])){
            for(let j = 0; j < stack[0].length; j++){
              stack[0][j] = 0-stack[0][j]
            }
          }else{
            stack.splice(0,1,0-stack[0]);
          }
        }
        break;
      case "MULTI":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = stack[1] * stack[0][j]
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] *= stack[0]
          }
          stack.splice(0,1);
        }else if(typeof(stack[0]) == "number" && typeof(stack[1]) == "string"){
          stack.splice(0,2,stack[1].repeat(stack[0]));
        }else if(typeof(stack[1]) == "number" && typeof(stack[0]) == "string"){
          stack.splice(0,2,stack[0].repeat(stack[1]));
        }else{
          stack.splice(0,2,stack[1]*stack[0]);
        }
        break;
      case "DIVIS":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = stack[1] / stack[0][j]
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] /= stack[0]
          }
          stack.splice(0,1);
        }else{
          stack.splice(0,2,stack[1]/stack[0]);
        }
        break;
      case "POWER":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = stack[1] ** stack[0][j]
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] **= stack[0]
          }
          stack.splice(0,1);
        }else{
          stack.splice(0,2,stack[1]**stack[0]);
        }
        break;
      case "REMAINDE":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = stack[1] % stack[0][j]
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] %= stack[0]
          }
          stack.splice(0,1);
        }else{
          stack.splice(0,2,stack[1]%stack[0]);
        }
        break;
      case "INT_QUOT":
        if(Array.isArray(stack[0]) && !Array.isArray(stack[1])){
          for(let j = 0; j < stack[0].length; j++){
            stack[0][j] = Math.floor(stack[1] / stack[0][j])
          }
          stack.splice(1,1);
        }else if(!Array.isArray(stack[0]) && Array.isArray(stack[1])){
          for(let j = 0; j < stack[1].length; j++){
            stack[1][j] = Math.floor(stack[1][j] / stack[0])
          }
          stack.splice(0,1);
        }else{
          stack.splice(0,2,Math.floor(stack[1]/stack[0]));
        }
        break;
      case "NUMBER":
        stack.unshift(array[i]);
        break;
      case "BOOLEAN":
        stack.unshift(array[i]);
        break;
      case "STRING":
        stack.unshift(array[i]);
        break;
      case "EQUAL":
        stack.splice(0,2,stack[1] == stack[0]);
        break;
      case "AND":
        stack.splice(0,2,stack[1] && stack[0]);
        break;
      case "XOR":
        if(stack[1] ^ stack[0] == 1){
          stack.splice(0,2,true);
        }else{
          stack.splice(0,2,false);
        }
        break;
      case "OR":
        stack.splice(0,2,stack[1] || stack[0]);
        break;
      case "LESS":
        stack.splice(0,2,stack[1] < stack[0]);
        break;
      case "LESS_EQUAL":
        stack.splice(0,2,stack[1] <= stack[0]);
        break;
      case "GREATER":
        stack.splice(0,2,stack[1] > stack[0]);
        break;
      case "GREATER_EQUAL":
        stack.splice(0,2,stack[1] >= stack[0]);
        break;
      case "NOT_EQUAL":
        stack.splice(0,2,stack[1] != stack[0]);
        break;
      case "NOT":
        if(typeof(stack[0]) == "number"){
          let num = 1;
          for(let i = stack[0]; i > 0; i--){
            num *= i;
          }
          stack.splice(0,1,num)
        }else{
          stack.splice(0,1,!stack[0])
        }
        break;
      case "VARIABLE":
        if(array[i] in variable_value || toHalfwidth(array[i]).toLowerCase() in ini_variable_value){
          if(type[i+1] == "BRACKET_S"){
            result = [];
            let vari_name = array[i];
            while(type[i+1] == "BRACKET_S"){
              let j = i + 1;
              let start = j + 1;
              let run = 1;
              while(run > 0 && j < array.length){
                j++;
                if(type[j] == "F_S"){
                  let run_1 = 1;
                  while(run_1 > 0 && j < array.length){
                    j++;
                    if(type[j] == "F_S"){
                      run_1++;
                    }else if(type[j] == "F_E"){
                      run_1--;
                    }
                  }
                }else if(type[j] == "BRACKET_S"){
                  run++;
                }else if(type[j] == "BRACKET_E"){
                  run--;
                }
              }
              let end = j;
              let result_a = array.slice(start,end);
              let result_t = type.slice(start,end);
              i = j;
              result.push(calculate(result_a,result_t));
            }
            result_hold = [];
            result_hold.push(variable_value[vari_name]);
            for(let j = 0; j < result.length; j++){
              result_hold.push(result_hold[0][result[j] - 1]);
              result_hold.shift();
            }
            stack.unshift(result_hold[0]);
          }else{
            if(array[i] in variable_value){
              stack.unshift(variable_value[array[i]]);
            }else if(toHalfwidth(array[i]).toLowerCase() in ini_variable_value){
              stack.unshift(ini_variable_value[toHalfwidth(array[i]).toLowerCase()]);
            }
          }
        }else{
          stack.unshift(array[i]);
        }
        break;
      case "FUNCTION":
        result = [];
        let func_name = toHalfwidth(array[i]).toLowerCase();
        if(type[i+1] == "F_S"){
          i++;
          let j = i;
          let judge_v = true;
          let result_array_f = [];
          let result_type_f = [];
          while(judge_v){
            let start = j + 1;
            let run = 1;
            while(run > 0 && j < array.length){
              j++;
              if(type[j] == "F_S"){
                let run_1 = 1;
                while(run_1 > 0 && j < array.length){
                  j++;
                  if(type[j] == "F_S"){
                    run_1++;
                  }else if(type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(type[j] == "COMMA" || type[j] == "F_E"){
                run--;
              }
            }
            let end = j;
            if(type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(array.slice(start,end));
            result_type_f.push(type.slice(start,end));
          }
          i = j;
          result = [];
          for(let j = 0; j < result_type_f.length; j++){
            result.push(calculate(result_array_f[j],result_type_f[j]))
          }
        }

        if(func_name in def_value){
          def_stack = def_value[func_name];
          for(let j = 0; j < result.length; j++){
            variable_value[def_stack[0][j]] = result[j]
          }
          stack.unshift(enja_run(def_stack[1],def_stack[2]));
        }else{
          switch(toHalfwidth(func_name).toLowerCase()){
            case "floor":
            case "切り捨て":
              stack.unshift(Math.floor(result[0]));
              break;
            case "sqrt":
            case "平方根":
              stack.unshift(Math.sqrt(result[0]));
              break;
            case "abs":
            case "絶対値":
              stack.unshift(Math.abs(result[0]));
              break;
            case "factor":
            case "階乗":
              let c = 1;
              if(result[0] != 0){
                for(let k = result[0]; k > 0; k--){
                  c *= k;
                }
              }
              stack.unshift(c);
              break;
            case "round":
            case "四捨五入":
              stack.unshift(Math.round(result[0]));
              break;
            case "random":
            case "ランダム":
              stack.unshift(Math.floor(Math.random()*(result[1] + 1- result[0]))  + result[0]);
              break;
            case "number":
              stack.unshift(Number(result[0]));
              break;
            case "string":
              stack.unshift(String(result[0]));
              break;
            case "ceil":
            case "切り上げ":
              stack.unshift(Math.ceil(result[0]));
              break;
            case "length":
            case "長さ":
              stack[0] = stack[0].length;
              break;
          }
        }

        break;
      case "BRACKET_S":
        let j = i;
        judge_v = true;
        let result_array = [];
        let result_type = [];
        let start;
        let end;
        while(judge_v){
          start = j + 1;
          let run = 1;
          while(run > 0 && j < array.length){
            j++;
            if(type[j] == "F_S"){
              let run_1 = 1;
              while(run_1 > 0 && j < array.length){
                j++;
                if(type[j] == "F_S"){
                  run_1++;
                }else if(type[j] == "F_E"){
                  run_1--;
                }
              }
            }else if(type[j] == "BRACKET_S"){
              let run_1 = 1;
              j++;
              while(run_1 > 0 && j < array.length){
                j++;
                if(type[j] == "BRACKET_S"){
                  run_1++;
                }else if(type[j] == "BRACKET_E"){
                  run_1--;
                }else if(type[j] == "F_S"){
                  let run_2 = 1;
                  while(run_2 > 0 && j < array.length){
                    j++;
                    if(type[j] == "F_S"){
                      run_2++;
                    }else if(type[j] == "F_E"){
                      run_2--;
                    }
                  }
                }
              }
            }else if(type[j] == "COMMA" || type[j] == "BRACKET_E"){
              run--;
            }
          }
          let end = j;
          if(type[j] == "COMMA"){
            judge_v = true;
          }else{
            judge_v = false;
          }
          result_array.push(array.slice(start,end));
          result_type.push(type.slice(start,end));
        }
        i = j
        result = [];
        if(start-end != 0){
          for(let j = 0; j < result_type.length; j++){
            result.push(calculate(result_array[j],result_type[j]));
          }
        }
        stack.unshift(result);
        break;
      
      case "PERIOD":
        break;

      default:
        break;
    }

    if(i >= type.length){
      judge = false;
    }

  }
  
  
  while(stack.length >= 2){
    stack.splice(0,2,String(stack[1]) + String(stack[0]));
  }

  return stack[0];
}

const enja_run = (program_array,program_type) =>{
  let out = [];

  let if_mode = [];
  let else_mode = [];
  let loop_number = [];
  let loop_count = [];
  let result_aa = [];
  let result_hold = [];
  let start;
  let end;
  let result = [];

  for(let i = 0; i < program_type.length; i++){
    switch(program_type[i]){
      case "VARIABLE":
        let variable_name = program_array[i];
        
        if(program_type[i+1] == "BRACKET_S"){
          let result_aa = [];
          while(program_type[i+1] == "BRACKET_S"){
            let j = i + 1;
            start = j + 1;
            let run = 1;
            while(run > 0 && j < program_array.length){
              j++;
              if(program_type[j] == "F_S"){
                let run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "F_S"){
                    run_1++;
                  }else if(program_type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(program_type[j] == "BRACKET_S"){
                run++;
              }else if(program_type[j] == "BRACKET_E"){
                run--;
              }
            }
            let end = j;
            let result_a = program_array.slice(start,end);
            let result_t = program_type.slice(start,end);
            let i = j;
            result_aa.push(calculate(result_a,result_t,variable_value,def_value));
          }
          result_hold = [];
          result_hold.push(variable_value[variable_name]);
          for(let j = 0; j < result_aa.length; j++){
            result_hold.push(result_hold[0][result_aa[j] - 1]);
            result_hold.shift();
          }
          for(let j = 0; j < result_aa.length; j++){
            result_aa[j] = result_aa[j] - 1;
          }
          

        }
        if(program_type[i+1] == "PLUS_PLUS"){
          if(result_aa.length != 0){
            let change = result_aa;
            let value = result_hold[0] + 1;
            let a = variable_value[variable_name];
            let result_1 = [];
            
            result_1.push(a);
            let process = a[change[0]];
            for(let j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(let j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            variable_value[variable_name] ++;
          }
          
          result_aa.length = 0;
          result_hold.length = 0;
        }else if(program_type[i+1] == "MINUS_MINUS"){
          if(result_aa.length != 0){
            let change = result_aa;
            let value = result_hold[0] - 1;
            let a = variable_value[variable_name];
            let result_1 = [];
            
            result_1.push(a);
            let process = a[change[0]];
            for(let j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(let j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            variable_value[variable_name] --;
          }

          result_aa.length = 0;
          result_hold.length = 0;
        }else if(program_type[i+1] == "PERIOD"){
          i++;
          if(program_type[i+2] == "F_S"){
            i++;
            let func_name = toHalfwidth(program_array[i]).toLowerCase();
            i++;
            let j = i;
            let judge_v = true;
            let result_array_f = [];
            let result_type_f = [];
            while(judge_v){
              start = j + 1;
              let run = 1;
              while(run > 0 && j < program_array.length){
                j++;
                if(program_type[j] == "COMMA" || program_type[j] == "F_E"){
                  run--;
                }else if(program_type[j] == "F_S"){
                  let run_1 = 1;
                  while(run_1 > 0 && j < program_array.length){
                    j++;
                    if(program_type[j] == "F_S"){
                      run_1++;
                    }else if(program_type[j] == "F_E"){
                      run_1--;
                    }
                  }
                }else if(program_type[j] == "BRACKET_S"){
                  let run_1 = 1;
                  while(run_1 > 0 && j < program_array.length){
                    j++;
                    if(program_type[j] == "BRACKET_S"){
                      run_1++;
                    }else if(program_type[j] == "BRACKET_E"){
                      run_1--;
                    }
                  }
                }
              }
            end = j;
            if(program_type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(program_array.slice(start,end));
            result_type_f.push(program_type.slice(start,end));
            }
            i = j;
            result = [];
            for(let j = 0; j < result_type_f.length; j++){
              result.push(calculate(result_array_f[j],result_type_f[j],variable_value,def_value));
            }

            if(result_aa.length != 0){
              let change = result_aa;

              let list = [];
              for(let j = 0; j < result_hold.length; j++){
                for(let k = 0; k < result_hold[j].length; k++){
                  list.push(result_hold[j][k]);
                }
              }
              result_hold = list;
              switch(func_name){
                case "push":
                case "プッシュ":
                  for(let k = 0; k < result.length; k++){
                    result_hold.push(result[k]);
                  }
                  break;
                
                case "unshift":
                case "アンシフト":
                  for(let k = result.length - 1; k >= 0; k--){
                    result_hold.unshift(result[k]);
                  }
                  break;
              }

              let value = result_hold;
              let a = variable_value[variable_name];
              let result_1 = [];
              
              result_1.push(a);
              let process = a[change[0]];
              for(let j = 1; j < change.length; j++){
                result_1.push(process);
                process = process[j];
              }
              result_1.push(process);
              
              result_1[result_1.length - 1] = value;
              
              for(let j = result_1.length - 2; j >= 0; j--){
                result_1[j][change[j]] = result_1[j+1];
              }
              variable_value[variable_name] = result_1[0];
              
            }else{
              switch(func_name){
                case "push":
                case "プッシュ":
                  for(let k = 0; k < result.length; k++){
                    variable_value[variable_name].push(result[k]);
                  }
                  break;
                case "unshift":
                case "アンシフト":
                  for(let k = result.length - 1; k >= 0; k--){
                    variable_value[variable_name].unshift(result[k]);
                  }
                  break;
              }
            }
          }else{
            i++;
            let func_name = toHalfwidth(program_array[i]).toLowerCase();
            if(result_aa.length != 0){
              let change = result_aa;

              let list = [];
              for(let j = 0; j < result_hold.length; j++){
                for(let k = 0; k < result_hold[j].length; k++){
                  list.push(result_hold[j][k]);
                }
              }
              result_hold = list;
              switch(func_name){
                case "pop":
                case "ポップ":
                  result_hold.pop();
                  break;
                
                case "shift":
                case "シフト":
                  result_hold.shift();
                  break;
              }


              let value = result_hold;
              let a = variable_value[variable_name];
              let result_1 = [];
              
              result_1.push(a);
              let process = a[change[0]];
              for(let j = 1; j < change.length; j++){
                result_1.push(process);
                process = process[j];
              }
              result_1.push(process);
              
              result_1[result_1.length - 1] = value;
              
              for(let j = result_1.length - 2; j >= 0; j--){
                result_1[j][change[j]] = result_1[j+1];
              }
              variable_value[variable_name] = result_1[0];
            }else{
              i++;
              switch(toHalfwidth(func_name).toLowerCase()){
                case "pop":
                case "ポップ":
                  variable_value[variable_name].pop();
                  break;
                case "shift":
                case "シフト":
                  variable_value[variable_name].shift();
                  break;
              }
            }
          }
        }else{
          i += 2;
          start = i;
          while(ope_check(program_type[i])){
            i++;
          } 
          end = i;
          i--;
          result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);

          
          if(result_aa.length != 0){
            let change = result_aa;
            let value;
            switch(program_type[start-1]){
              case "SUBSTI":
                value = result;
                break;
              case "PLUS_EQUAL":
                value = result_hold[0] + result;
                break;
              case "MINUS_EQUAL":
                value = result_hold[0] - result;
                break;
              case "MULTI_EQUAL":
                value = result_hold[0] * result;
                break;
              case "DIVIS_EQUAL":
                value = result_hold[0] / result;
                break;
              case "POWER_EQUAL":
                value= result_hold[0] ** result;
                break;
              case "REMAINDE_EQUAL":
                value = result_hold[0] % result;
                break;
              case "INT_QUOT_EQUAL":
                value = Math.floor(result_hold[0] / result);
                break;
            }
            let a = variable_value[variable_name];
            let result_1 = [];
            
            result_1.push(a);
            let process = a[change[0]];
            for(let j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(let j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            switch(program_type[start-1]){
              case "SUBSTI":
                variable_value[variable_name] = result;
                break;
              case "PLUS_EQUAL":
                variable_value[variable_name] += result;
                break;
              case "MINUS_EQUAL":
                variable_value[variable_name] -= result;
                break;
              case "MULTI_EQUAL":
                variable_value[variable_name] *= result;
                break;
              case "DIVIS_EQUAL":
                variable_value[variable_name] /= result;
                break;
              case "POWER_EQUAL":
                variable_value[variable_name] **= result;
                break;
              case "REMAINDE_EQUAL":
                variable_value[variable_name] %= result;
                break;
              case "INT_QUOT_EQUAL":
                variable_value[variable_name] = Math.floor(variable_value[variable_name] / result);
                break;
            }
          }
          result_aa.length = 0;
          result_hold.length = 0;
        }
        break;

      case "WHILE":
        i++;
        start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        end = i;
        i--;
        if(calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value)){
          i++;
        }else{
          let run = 1;
          i++;
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        break;

      case "IF":
        i++;
        start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        end = i;
        i--;
        if(calculate(program_array.slice(start,end),program_type.slice(start,end))){
          i++;
          if_mode.push(true);
          else_mode.push(false);
        }else{
          let run = 1;
          i++;
          if_mode.push(false);
          else_mode.push(true);
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        if(program_type[i+2] == "BRACE_E"){
          if_mode.pop();
          else_mode.pop();
        }
        break;
      
      case "ELIF":
        if(else_mode[else_mode.length - 1]){
          i++;
          start = i;
          while(ope_check(program_type[i])){
            i++;
          }
          end = i;
          i--;
          if(calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value)){
            if_mode.push(true);
            else_mode.push(false);
            i++;
          }else{
            let run = 1;
            if_mode.push(false);
            else_mode.push(true);
            i++;
            while(run > 0 && i < program_array.length){
              i++;
              if(program_type[i] == "BRACE_S"){
                run++;
              }else if(program_type[i] == "BRACE_E"){
                run--;
              }
            }
          }
        }else{
          let run = 1;
          if_mode.push(true);
          else_mode.push(false);
          i++;
          while(program_type[i] != "BRACE_S"){
            i++;
          }
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        if(program_type[i+2] == "BRACE_E"){
          if_mode.pop();
          else_mode.pop();
        }
        break;

      case "ELSE":
        if(if_mode[if_mode.length - 1]){
          let run = 1;
          i += 2;
          while(run > 0){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
          i--;
        }
        if(else_mode){
          i++;
        }
        if_mode.pop();
        else_mode.pop();
        break;

      case "LOOP":
        j = i + 1;
        start_check = j;
        while(program_type[j] != "BRACE_S" && program_type[j] != "NEW_LINE" && j < program_type.length){
          j++;
        }
        end_check = j;
        check = program_type.slice(start_check,end_check);
        
        if(check.length > 0){
          i++;
          start = i;
          while(ope_check(program_type[i])){
            i++;
          }
          end = i;
          i--;
          result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);
          loop_count.push(Math.floor(Number(result)) - 1);
          if(loop_count[loop_count.length - 1] > -1){
            if(loop_number.indexOf(i) == -1){
              loop_number.push(i);
            }
            loop_mode = true;
          }else{
            loop_count.pop();
            if(loop_number.indexOf(i) != -1){
              loop_number.pop();
            }
            let run = 1;
            i++;
            while(run > 0){
              i++;
              if(program_type[i] == "BRACE_S"){
                run++;
              }else if(program_type[i] == "BRACE_E"){
                run--;
              }
            }
            loop_mode = false;
          }
        }
        break;
      
      case "BRACE_E":
        back = 1;
        j = i;
        while(back > 0){
          j--;
          if(program_type[j] == "BRACE_S"){
            back--;
          }else if(program_type[j] == "BRACE_E"){
            back++;
          }
        }
        while(program_type[j] != "WHILE" && program_type[j] != "LOOP" && program_type[j] != "IF" && program_type[j] != "ELIF" && program_type[j] != "ELSE" && j > 0){
          j--;
        }
        switch(program_type[j]){
          case "WHILE":
            i = j - 1;
            break;
          case "IF":
          case "ELIF":
          case "ELSE":
            break;
          case "LOOP":
            if(loop_count[loop_count.length - 1] > 0){
              while(program_type[j] != "BRACE_S"){
                j++;
              }
              loop_count[loop_count.length-1] -= 1;
              i = j;
            }else{
              loop_count.pop();
              loop_number.pop();
            }
            break;
          default:
            break;
        }
        break;

      case "PRINT":
        i++;
        start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        end = i;
        i--;
        result = calculate(program_array.slice(start,end),program_type.slice(start,end));
        console.log(result);
        break;
      
      case "COMMENT":
        while(program_type[i] != "NEW_LINE"){
          i++;
        }
        break;

      case "COMMENT_S":
        while(program_type[i] != "COMMENT_E" && i < program_type.length){
          i++;
        }
        break;

      case "FUNCTION":
        if(program_array[i] in def_value){
          let def_stack = def_value[program_array[i]];
          
          i++;
          let j = i;
          let judge_v = true;
          let result_array_f = [];
          let result_type_f = [];
          while(judge_v){
            let start = j + 1;
            let run = 1;
            while(run > 0 && j < program_array.length){
              j++;
              if(program_type[j] == "COMMA" || program_type[j] == "F_E"){
                run--;
              }else if(program_type[j] == "F_S"){
                let run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "F_S"){
                    run_1++;
                  }else if(program_type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(program_type[j] == "BRACKET_S"){
                let run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "BRACKET_S"){
                    run_1++;
                  }else if(program_type[j] == "BRACKET_E"){
                    run_1--;
                  }
                }
              }
            }
            end = j;
            if(program_type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(program_array.slice(start,end));
            result_type_f.push(program_type.slice(start,end));
          }
          i = j;
          result = [];
          for(let j = 0; j < result_type_f.length; j++){
            result.push(calculate(result_array_f[j],result_type_f[j],variable_value,def_value));
          }

          for(let j = 0; j < result.length; j++){
            variable_value[def_stack[0][j]] = result[j]
          }

          enja_run(def_stack[1],def_stack[2]);
        }
        break;

      case "RETURN":
        i++;
        start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        end = i;
        i--;
        result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);
        if(result != undefined){
          return result;
        }else{
          return;
        }
      }
    
    if(new Date() - start_time > 1000){
      console.log("!!TIME OUT");
      i = program_type.length;
    }
  }
  

  return out;
}







const enja = (txt) => {
  start_time = new Date();
  let input_txt = txt;
  let full_half = {"＝":"=",
                   "！":"!",
                   "＞":">",
                   "＜":"<",
                   "＋":"+",
                   "－":"-",
                   "＊":"*",
                   "／":"/",
                   "％":"%",
                   "＾":"^",
                   "｛":"{",
                   "｝":"}",
                   "（":"(",
                   "）":")",
                   "［":"[",
                   "］":"]",
                   '”':'"',
                   '“':'"',
                   "；":";",
                   "、":",",
                   "＄":"$",
                   "＃":"#",
                   "×":"*"
                   };

  let token = [["=","!",">","<","+","-","*","/","%","^","{","}","(",")","[","]",'"',";",",","$","&","#"],
               ["!=","<=",">=","==","**","+=","-=","*=","/=","^=","%=","$=","++","--","/*","/-","-/","//","^^"],
               ["**="]];

  let purse  = {"+="    :"PLUS_EQUAL",
                "-="    :"MINUS_EQUAL",
                "*="    :"MULTI_EQUAL",
                "/="    :"DIVIS_EQUAL",
                "^="    :"POWER_EQUAL",
                "**="   :"POWER_EQUAL",
                "%="    :"REMAINDE_EQUAL",
                "$="    :"INT_QUOT_EQUAL",
                "++"    :"PLUS_PLUS",
                "--"    :"MINUS_MINUS",
                "+"     :"PLUS",
                "-"     :"MINUS",
                "*"     :"MULTI",
                "/"     :"DIVIS",
                "^"     :"POWER",
                "**"    :"POWER",
                "%"     :"REMAINDE",
                "$"     :"INT_QUOT",
                "=="    :"EQUAL",
                "!"     :"NOT",
                ">"     :"GREATER",
                "<"     :"LESS",
                ">="    :"GREATER_EQUAL",
                "<="    :"LESS_EQUAL",
                "!="    : "NOT_EQUAL",
                "{"     :"BRACE_S",
                "}"     :"BRACE_E",
                "("     :"PARAMS_S",
                ")"     :"PARAMS_E",
                "["     :"BRACKET_S",
                "]"     :"BRACKET_E",
                ","     :"COMMA",
                "."     :"PERIOD",
                "while" :"WHILE",
                "繰り返し":"WHILE",
                "if"    :"IF",
                "もし"  :"IF",
                "elif"  :"ELIF",
                "違えばもし":"ELIF",
                "else"  :"ELSE",
                "違えば" :"ELSE",
                "loop"  :"LOOP",
                "ループ" :"LOOP",
                "print" :"PRINT",
                "プリント":"PRINT",
                "/-"    :"COMMENT_S",
                "-/"    :"COMMENT_E",
                "//"    :"COMMENT",
                "and"   :"AND",
                "&"     :"AND",
                "かつ"  :"AND",
                "or"    :"OR",
                "#"     :"OR",
                "または":"OR",
                "xor"   :"XOR",
                "^^"    :"XOR",
                "return":"RETURN",
                "戻る" :"RETURN",
                "返す" :"RETURN",
                "pi"    :"VARIABLE",
                "円周率":"VARIABLE",
                "year":"VARIABLE",
                "今年"  :"VARIABLE",
                "month":"VARIABLE",
                "今月"  :"VARIABLE",
                "date":"VARIABLE",
                "今日"  :"VARIABLE",
                "hour":"VARIABLE",
                "今時間"  :"VARIABLE",
                "minute":"VARIABLE",
                "今分":"VARIABLE",
                "second":"VARIABLE",
                "今秒":"VARIABLE",
                "millisecond":"VARIABLE",
                "今ミリ秒":"VARIABLE",
                "length":"FUNCTION",
                "長さ"  :"FUNCTION",
                "pop"   :"FUNCTION",
                "ポップ":"FUNCTION",
                "shift" :"FUNCTION",
                "シフト":"FUNCTION",
                "push"  :"FUNCTION",
                "プッシュ":"FUNCTION",
                "unshift":"FUNCTION",
                "アンシフト":"FUNCTION",
                "floor" :"FUNCTION",
                "切り捨て":"FUNCTION",
                "sqrt"  :"FUNCTION",
                "平方根":"FUNCTION",
                "abs"   :"FUNCTION",
                "factor":"FUNCTION",
                "階乗"  :"FUNCTION",
                "絶対値":"FUNCTION",
                "round" :"FUNCTION",
                "四捨五入":"FUNCTION",
                "random":"FUNCTION",
                "ランダム":"FUNCTION",
                "ceil"  :"FUNCTION",
                "切り上げ":"FUNCTION",
                "number":"FUNCTION",
                "string":"FUNCTION"
              }
  
  let set_equal = ["while","繰り返し","if","もし","elif","違えばもし","print","プリント","log","ログ"];
  
  let ope_priority = {"PLUS":3,
                      "MINUS":3,
                      "MULTI":4,
                      "DIVIS":4,
                      "POWER":6,
                      "REMAINDE":5,
                      "INT_QUOT":5,
                      "EQUAL":2,
                      "GREATER":2,
                      "LESS":2,
                      "GREATER_EQUAL":2,
                      "LESS_EQUAL":2,
                      "NOT_EQUAL":2,
                      "AND":0,
                      "OR":-1,
                      "XOR":-1,
                      "NOT":1
                      }

  let program = input_txt;
  program = brace(program);
  program = lexical(program,token,full_half);
  let ss = purser(program,purse,set_equal);
  let array = flatten(ss[0]);
  let type = ss[1];

  
  for(let i = 0; i < array.length; i++){
    switch(type[i]){
      case "PLUS":
      case "MINUS":
      case "MULTI":
      case "DIVIS":
      case "POWER":
      case "REMAINDE":
      case "INT_QUOT":
      case "FUNCTION":
      case "COMMA":
      case "EQUAL":
      case "GREATER":
      case "LESS":
      case "GREATER_EQUAL":
      case "LESS_EQUAL":
      case "NOT_EQUAL":
      case "AND":
      case "XOR":
      case "OR":
      case "NOT":
        while(ope_check(type[i]) && i >= 0){i--;}
        i++;
        let start = i;
        while(ope_check(type[i]) && i < type.length){i++;}
        let end = i;
        let change_poland = poland(array.slice(start,end),type.slice(start,end),ope_priority);
        let array_add = flatten(change_poland[0]);
        let type_add = flatten(change_poland[1]);
        array.splice(start,end-start,array_add);
        type.splice(start,end-start,type_add);
        array = flatten(array);
        type = flatten(type);
        break;
      default:
        break;
    }
  }
  
  
  array = flatten(array);
  type = flatten(type);

  
  def_value = {};
  variable_value = {};

  
  for(let i = 0; i < type.length; i++){
    
    if(type[i] == "DEFINE"){
      let def_name = array[i+1];
      let def_variable = [];
      let start_1 = i;
      while(type[i] != "BRACE_S" && i < type.length){
        i++;
        if(type[i] == "VARIABLE"){
          def_variable.push(array[i]);
        }
      }
      let start = i + 2;
      let run = 1;
      while(run > 0 && i < type.length){
        i++;
        if(type[i] == "BRACE_S"){
          run++;
        }else if(type[i] == "BRACE_E"){
          run--;
        }
      }
      let end = i + 1;

      let def_array = array.slice(start,end-1);
      let def_type = type.slice(start,end-1);

      for(let j = 0; j < def_array.length; j++){
        if(def_variable.indexOf(def_array[j]) != -1){
          def_type[j] = "VARIABLE";
        }
      }

      array.splice(start_1,end-start_1);
      type.splice(start_1,end-start_1);
      i -= end - start_1;
      def_value[def_name] = [def_variable,def_array,def_type];
    }
    
  }

  let result = enja_run(array,type);

  return result;
}

const fs = require('fs');

if(fs.existsSync(process.argv[2])){
  const contents = fs.readFileSync(process.argv[2], 'utf-8');
  enja(contents)

}else{
  console.log("CANNOT READ FILE");
}