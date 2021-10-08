import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import openSocket from 'socket.io-client';



const Tweet = ({ id, persona, texto, upvotes, downvotes, fecha, hashtags }) => {
    let hash = String(hashtags).replaceAll(',', " #")
    let user = String(persona).replaceAll(' ', "_")
    return (
        <>
            <div key={id} className="tweet">
                <br />
                <div className="col-md-4">
                    <h4><b>{persona}</b></h4>
                </div>
                <div className="col-md-2">
                    @{user}
                </div>
                <div className="container">
                    <div>
                        {texto}
                    </div>
                    <span className="link">#{hash}</span> <hr />
                    <div className="row">

                        <div className="col-md-3">
                            <p className="subLabel">{upvotes} Upvotes</p>
                        </div>
                        <div className="col-md-4">
                            <p className="subLabel">{downvotes} Downvotes</p>
                        </div>
                        <div className="col-md-4 text-right" >
                            <div className="dateTime">
                                {fecha}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

const getTweets = (array) => {
    return (
        <>
            {
                array.map(element => <Tweet key={element.id + element.nombre} persona={element.nombre} texto={element.comentario} upvotes={element.upvotes}
                    downvotes={element.downvotes} hashtags={element.hashtags} fecha={element.fecha} />)
            }
        </>
    )
}

const Home = () => {
    const [data, setData] = useState([])

    var socket = openSocket('http://localhost:4200');

    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getTweets');
        }, 3000)
        socket.on('sendTweets', response => {
            setData(response)
        });    
    }, [data])


    return (
        <>
            <Navbar activ="active" activ2="" activ3="" />
            <div className="container">
                <p className="App-intro">
                </p>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        {
                            getTweets(data)
                        }
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
