import React, { useState, useEffect, createContext, useContext } from 'react';

export const articleContext = createContext({
    news: null
});


export const useNews = () => {

    const articles = useContext(articleContext);
    return  { articles };

}
// hook du composant ArticleProvider
const useArticles = () =>{

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetchData('./fake-api.json').then(res => {
            setArticles({...res}); 
        })
        return () => {
            // cleanup
            console.log('unmount')
        };
    }, []);

    return articles;

}

// fetch fake-api data
const fetchData = (url, stock) => {
    
    let data =  fetch(url)
                    .then( res => {
                        return res.json()
                    }) 
                    .then( res => {
                        return res

                    })
                    .catch(error => {
                        alert(error)
                })
    return data;
} 


// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Provider
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export const ArticleProvider = (props) => {

    const news = useArticles()
    const { children } = props;

    return (
      <articleContext.Provider value={news}>
        {children}
      </articleContext.Provider>
    );
} 
  