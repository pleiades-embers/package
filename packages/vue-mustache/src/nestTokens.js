

export default function nestTokens(tokens){
    var nestedTokens=[]

    //栈结构,存放小tokens,栈顶(靠经端口的,最新进入的) tokens的数组中当前操作的
    // 这个tokens数组
    var sections=[]
    //收集器,天生指向nestedTokens结果数组,引用类型值,所以指向的是同一个数组
    var collector=nestedTokens

    for(let i=0;i<tokens.length;i++){
        let token=tokens[i]

        switch(token[0]){
            case '#':
                collector.push(token)
                sections.push(token)
                collector=token[2]=[]
                break
            case '/':
                sections.pop()
                collector=sections.length>0?sections[sections.length-1][2]:nestedTokens
                break
            default:
                collector.push(token)
        }
    }

    return nestedTokens
}