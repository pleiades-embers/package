export default function lookup(dataObj,keyName){

    if(keyName.indexOf('.')!==-1){
        var keys=keyName.split('.')
        var temp=dataObj

        for(let i=0;i<keys.length;i++){
            temp=temp[keys[i]]
        }

        return temp
    }

    //如果这里面没有点符号
    return dataObj[keyName]

}