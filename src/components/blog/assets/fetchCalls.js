const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

export const loadBlog = (id,setBlog,mounted,setError,loadingStarted,loadingFinished) =>{
    loadingStarted();
    fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/loadBlog?blogId=${id}`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        if(mounted){
            if(res.success){
                setBlog(res.blog); 
            }else{
                setBlog({title : "Error",content : "blog was not provided by server"});
            }
        }
        loadingFinished();
    }).catch((err)=>{
        setError(err);
        loadingFinished();
    });
}

export const loadTranslation = (id,setBlog,mounted,setError,loadingStarted,loadingFinished) =>{
    loadingStarted();
    fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/getArabicBlog?blogId=${id}`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
    }).then((res)=>{
        return res.json();
    }).then((res) => {
        if(mounted){
            if(res.success){
                setBlog(res.blog); 
            }else{
                setBlog({title : "لا يوجد ترجمة", content : "سوف نقوم بترجمة هذه المدونة بأسرع وقت"});
            }
        }
        loadingFinished();
    }).catch((err)=>{
        setError(err);
        loadingFinished();
    });
}