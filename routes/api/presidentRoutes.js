const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/presidents/presidents'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/presidents', {
                title: 'All Presidents',
                name: 'President List',
                data: data
            })
        })
        .catch(error => {
            console.log('Error:', error)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const url = `https://api.sampleapis.com/presidents/presidents/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/single-president', {
                    title: data.title,
                    name: data.name,
                    data
                })
            } else {
                res.render('pages/404', {
                    title: 404,
                    name: 404
                })
            }
        })
        .catch(error => {
            console.log('Error: ', error)
        })
})

module.exports = router