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

