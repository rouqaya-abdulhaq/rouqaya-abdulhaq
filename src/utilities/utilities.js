import React from 'react';
import Card from '../components/UI/card/card';

export const mapBlogsToCards = (blogs,history) =>{
    return blogs.map((blog)=>{
        return <Card key={blog.id} title={blog.title}
         onClick={()=>goToBlog(history,blog.id)} imgPath = {blog.img_url}/>
    })
}

const goToBlog = (history, queryParam) =>{
    history.push(`/blogs/blog?id=${queryParam}`);
}