export const loadAboutContent = (setContent,setError,mounted,loadingStarted,loadingFinished) =>{
    loadingStarted();
    fetch(`http://localhost:8000/loadAbout`,{
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
    fetch(`http://localhost:8000/loadAboutTranslation`,{
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