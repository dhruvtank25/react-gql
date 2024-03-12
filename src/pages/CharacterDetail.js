import { useParams } from "react-router";
import { useCharacterDetail } from "../hooks/useCharacterDetail";


export default function CharacterDetail(){
    const {id} = useParams();

    const {data, loading , error} = useCharacterDetail(id);

    if(error) return  <div>something went wrong</div>
   
    if(loading) return  <div>loading.....</div>

    if (data.character !== null ) {
        return <div className="Character">
            <img src={data.character.image} width={750} height={750} /> 
            <div className="Character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.character.episode.map((episode)=>{
                    return(
                            <div>
                                {episode.name} - <b>{episode.episode}</b> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    } else {
        return (<div>No Character Found</div>);
    }

    
}