export const getData=(name)=>{
    return localStorage.getItem(JSON.stringify(name))
}

export const setData=(key,value)=>{
    return localStorage.setItem(key,value)
}