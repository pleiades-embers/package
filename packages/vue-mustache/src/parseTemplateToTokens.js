import Scanner from "./scanner"
import nestTokens from "./nestTokens"
export default function parseTemplateToTokens(templateStr){
    var tokens=[]
    var scanner=new Scanner(templateStr)
    var words

    while(!scanner.eos()){

        words=scanner.scanUtil('{{')
        if(words!==''){
            //将 {{}}中间的 首字符 #提取到二维数组
            tokens.push(['text',words])
        }
        scanner.scan('{{')

        words=scanner.scanUtil('}}')
        if(words!==''){
            if(words[0]=='#'){
                tokens.push(['#',words.substring(1)])
            }else if(words[0]=='/'){
                tokens.push(['/',words.substring(1)])
            }else{
                tokens.push(['name',words])
            }
        }
        scanner.scan('}}')
    }
    return nestTokens(tokens)

}