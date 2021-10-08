import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import PolarChart from '../../components/chart/PolarChart';
import BarChart from '../../components/chart/BarChart';
import openSocket from 'socket.io-client';
import Table from '../../components/table/Table';
import './ReportesAzure.css'

const ReportesAzure = () => {
    const [noticias, setNoticias] = useState(0)
    const [upvotes, setUpvotes] = useState(0)
    const [hashtags, setHash] = useState(0)
    const [top, setTop] = useState([])
    const [dates, setDates] = useState([])
    const [tweets, setTweets] = useState([])

    var socket = openSocket('http://34.71.233.178:4200');
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getNoticiasAzure');
        }, 1000)
        socket.on('sendNoticiasAzure', response => {
            setNoticias(response.cantidad)
            setUpvotes(response.total_upvotes)
            setHash(response.hash_distintos)
        });    
    }, [noticias, upvotes, hashtags])
    
    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getTweetsAzure');
        }, 3500)
        socket.on('sendTweetsAzure', response => {
            setTweets(response)
        });    
    }, [tweets])

    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getTop5Azure');
        }, 3000)
        socket.on('sendTop5Azure', response => {
            setTop(response)
        });    
    }, [top])
    

    useEffect(()=> {
        setTimeout(() => {
            socket.emit('getFechaAzure');
        }, 4000)
        socket.on('sendFechaAzure', response => {
            console.log(response);
            setDates(response)
        });    
    }, [dates])


    return (
        <>
            <Navbar activ="" activ2="" activ3="active" />
            <div className="box">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className="box-part text-center">
                            <div className="title">
                                <h4>Reportes de Azure</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Noticias Azure</h4>
                                </div>
                                <div className="text">
                                    <h2>{noticias} </h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i  className="fa fa-hashtag fa-3x" aria-hidden="true"></i>
                                <br />
                                <div className="title">
                                    <h4>Hashtags Azure</h4>
                                </div>
                                <div className="text">
                                    <h2>{hashtags}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">
                                <i className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
                                <div className="title">
                                    <h4>Upvotes Azure</h4>
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

export default ReportesAzure
