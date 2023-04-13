import React, {useState, useContext, useEffect, useCallback} from 'react'
const ApiURL = "";
const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the cat");
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchAnime = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newAnime = docs.slice(0, 20).map((animeSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = animeSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setAnime(newAnime);

                if(newAnime.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setAnime([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchAnime();
    }, [searchTerm, fetchAnime()]);

    return (
        <AppContext.Provider value = {{
            loading, anime, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};