import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Message.css'
import openSocket from 'socket.io-client';



const Mensaje = ({ id, msg }) => {

    let contenido = JSON.parse(msg)

    return (
        <>
            <div key={id} className="tweet">
                <br />
                <div className="container">
                    <div className="col-md-4">
                        <h4><b>API {contenido.api}</b></h4>
                    </div>
                    <div className="col-md-2">
                        Cantidad #{contenido.guardados}
                    </div>
                    <div className="col-md-2">
                        Tiempo {contenido.tiempoDeCarga}
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

const getMessages = (array) => {
    return (
        <>
            {
                array.map(element => <Mensaje key={element.id} msg={element.msg} />)
            }
        </>
    )
}

const Message = () => {
    const [data, setMensaje] = useState([])

    var socket = openSocket('http://34.71.233.178:4200');


    useEffect(() => {
        setTimeout(() => {
            socket.emit('getPubSub');
        }, 5000)
        socket.on('sendPubSub', response => {
            console.log(response)
            setMensaje(response)
        });
    }, [data])


    return (
        <>
            <Navbar activ4="active" />
            <div className="container">
                <p className="App-intro">
                </p>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        {
                            getMessages(data)
                        }
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Message
