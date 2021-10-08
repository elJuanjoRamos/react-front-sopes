import React from 'react'



const Tweet = ({ id, persona, texto, fecha, hashtags }) => {

    let f = fecha
    let h = hashtags

    if(f.toString().includes('T')){
        let n = fecha.split('T')
        f = n[0]
    }
    if(hashtags.toString().includes(',')){
        h = hashtags.toString().replaceAll(',',' #')
    }
    return (
        <>
            <tr key={id}>
                <th>{persona}</th>
                <td>{f}</td>
                <td>{texto}</td>
                <td>#{h}</td>
            </tr>
        </>
    )
}



const getTable = (tweets) => {
    return (
        <>
            {
                tweets.slice(0,5).map(element => <Tweet key={element.id + element.nombre} persona={element.nombre} texto={element.comentario} upvotes={element.upvotes}
                    downvotes={element.downvotes} hashtags={element.hashtags} fecha={element.fecha} />)
            }
        </>
    )
}

const Table = ({tweets}) => {
    return (
        <>
          <table className="table">
                <thead>
                <tr>
                <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Mensaje</th>
                    <th>Hashtags</th>
                </tr>
                </thead>
                <tbody>
                {
                    getTable(tweets)
                }
                </tbody>
            </table>  
        </>
    )
}

export default Table
