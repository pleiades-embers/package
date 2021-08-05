import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.SSG_TemplateEngine={
    render(templateStr,data){
        var tokens=parseTemplateToTokens(templateStr)
        debugger
        var domStr=renderTemplate(templateStr,data)
        // console.log(domStr)
    }
}