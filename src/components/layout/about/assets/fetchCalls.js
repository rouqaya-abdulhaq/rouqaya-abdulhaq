export const loadAboutContent = (setContent,setError,mounted) =>{
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
    }).catch((err)=>{
        setError(err);
    });
}

export const loadAboutTranslation = (setContent,setError,mounted) =>{
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
    }).catch((err)=>{
        setError(err);
    });
}