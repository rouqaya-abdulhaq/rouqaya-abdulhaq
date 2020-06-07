import React from 'react';
import Card from '../components/UI/card/card';

export const mapBlogsToCards = (blogs,history) =>{
    return blogs.map((blog)=>{
        return <Card key={blog.title} title={blog.title} onClick={()=>goToBlog(history,blog.title)}/>
    })
}

const goToBlog = (history, queryParam) =>{
    history.push(`/blogs/blog?title=${queryParam}`);
}