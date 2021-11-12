var getData=(name)=>{
    return localStorage.getItem(JSON.stringify(name))
}

var setData=(key,value)=>{
    return localStorage.setItem(key,value)
}

var getPlatform = () => {
    const ua = navigator.userAgent.toLowerCase();
    let platform = {};
    platform.isWechat = ua.indexOf('micromessenger') != -1;
    platform.isAndroid = /android|adr/gi.test(ua);
    platform.isiOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua);
    platform.isMobile= platform.isAndroid || platform.isiOS
    return platform;
}