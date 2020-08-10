const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

export const loadAboutContent = (setContent,setError,mounted,loadingStarted,loadingFinished) =>{
    loadingStarted();
    fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/loadAbout`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        if(mounted){
            if(res.success){
                setContent(res.about.content);
            }else{
                setContent("an Error must have occurred.\n the server didn't provide the content")
            }
        }
        loadingFinished();
    }).catch((err)=>{
        setError(err);
        loadingFinished();
    });
}

export const loadAboutTranslation = (setContent,setError,mounted,loadingStarted,loadingFinished) =>{
    loadingStarted();
    fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/loadAboutTranslation`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        if(mounted){
            if(res.success){
                setContent(res.about.content);
            }else{
                setContent("الترجمة غير متوفرة حاليا")
            }
        }
        loadingFinished();
    }).catch((err)=>{
        setError(err);
        loadingFinished();
    });
}