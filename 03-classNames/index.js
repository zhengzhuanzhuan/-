const classNames=(...params)=>{
  let resData = ''
  for(let i=0; i<params.length; i++){
    const res = params[i]
    if((typeof res === 'string' || typeof res==='number') && res){
      resData += `${res} `
    }
    if(Object.prototype.toString.call(res)==='[object Object]'){
      for(let key in res){
        if(res[key]){
          resData += `${key} `
        }
      }
    }
    if(Array.isArray(res)){
      const data = classNames(...res)
      resData += `${data} `
    }
  }
  return resData.trim()
}

const prefixData = (prefix, ...name)=> {
  return classNames(name).split(' ').map(e=> `${prefix}-${e}`).join(' ')
}

export {
  classNames,
  prefixData
}
