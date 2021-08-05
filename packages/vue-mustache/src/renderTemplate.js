//让tokens的数组变为dom字符串
export default function renderTemplate(tokens,data){
    
    var resultStr=''

    for(let i=0;i<tokens.length;i++){
        let token=tokens[i]
        if(token[0]=='text'){
            resultStr+=token[1]
        }else if(token[0]=='name'){
            resultStr+=data[token[1]]
        }else if(token[0]=='#'){
            resultStr+=renderTemplate()
        }
    }
} 