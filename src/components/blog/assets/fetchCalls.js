export const loadBlog = (id,setBlog,mounted,setError) =>{
    fetch(`http://localhost:8000/loadBlog?blogId=${id}`,{
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
            }
        }
    }).catch((err)=>{
        setError(err);
    });
}

export const loadTranslation = (id,setBlog,mounted,setError) =>{
    fetch(`http://localhost:8000/getArabicBlog?blogId=${id}`,{
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
                setBlog({title : "لا يوجد ترجمة", content : "سوف نقوم بالترجمة بأسرع وقت"});
            }
        }
    }).catch((err)=>{
        setError(err);
    });
}