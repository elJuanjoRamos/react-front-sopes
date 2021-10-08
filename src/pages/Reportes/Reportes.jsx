import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import PolarChart from '../../components/chart/PolarChart';
import BarChart from '../../components/chart/BarChart';
import openSocket from 'socket.io-client';
import Table from '../../components/table/Table';
import './Reportes.css'

const Reportes = () => {
    const [noticias, setNoticias] = useState(0)
    const [upvotes, setUpvotes] = useState(0)
    const [hashtags, setHash] = useState(0)
    const [top, setTop] = useState([])
    const [dates, setDates] = useState([])
    const [tweets, setTweets] = useState([])

    var socket = openSocket('http://34.71.233.178:4200');
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getNoticias');
        }, 1000)
        socket.on('sendNoticias', response => {
            setNoticias(response.cantidad)
        });    
    }, [noticias])
     
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getUpvotes');
        }, 1500)
        socket.on('sendUpvotes', response => {
            setUpvotes(response.total_upvotes)
        });    
    }, [upvotes])
     
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getHashtags');
        }, 5000)
        socket.on('sendHashtags', response => {
            setHash(response.hash_distintos)
        });    
    }, [hashtags])

    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getTop5');
        }, 3000)
        socket.on('sendTop5', response => {
            setTop(response)
        });    
    }, [top])
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getFecha');
        }, 4000)
        socket.on('sendFecha', response => {
            setDates(response)
        });    
    }, [dates])

    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getTweets');
        }, 3500)
        socket.on('sendTweets', response => {
            setTweets(response)
        });    
    }, [tweets])



    return (
        <>
            <Navbar activ="" activ2="active" activ3="" />
            <div className="box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className="box-part text-center">
                                <div className="title">
                                    <h4>Reportes de SQL</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i style={{color:"black"}} className="fa fa-twitter fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Noticias</h4>
                                </div>
                                <div className="text">
                                    <h2>{noticias} </h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i  style={{color:"black"}} className="fa fa-hashtag fa-3x" aria-hidden="true"></i>
                                <br />
                                <div className="title">
                                    <h4>Hashtags</h4>
                                </div>
                                <div className="text">
                                    <h2>{hashtags}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">
                                <i style={{color:"black"}} className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
                                <div className="title">
                                    <h4>Upvotes</h4>
                                </div>
                                <div className="text">
                                    <h2>{upvotes}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div className="box-part text-center">
                                <div className="title">
                                    <h4>Upvotes vs Downvotes</h4>
                                </div>
                                <BarChart dates={dates} labelUp="Upvotes" labelDown="Downvotes"></BarChart>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">
                                <div className="title">
                                    <h4>Reporte de Hashtags</h4>
                                </div>
                                <PolarChart top={top} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="box-part text-center">
                                <div className="title">
                                    <h4>Entradas Recientes</h4>
                                </div>
                                <Table tweets={tweets} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reportes
