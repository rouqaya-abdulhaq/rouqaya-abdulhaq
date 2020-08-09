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
            }
        }
        loadingFinished();
    }).catch((err)=>{
        setError(err);
        loadingFinished();
    });
}