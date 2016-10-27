import express from 'express';
import User from '../models/User';
import LoginCookie from '../models/LoginCookie';
import cookieParser from 'cookie-parser';
import uuid from 'node-uuid';

let router = express.Router();
router.use(cookieParser());

router.post('/', (req, res, next)=> {
    const username = req.body.username;
    const password = req.body.password;
    const rePassword = req.body.rePassword;
    /*const rePassword = req.body.rePassword;*/

    function checkUsername(username) {
        let patt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        return patt.test(username);
    }

    function checkPassword(password) {
        let patt = /^.{6,13}$/;
        return patt.test(password);
    }

    function checkPasswordSame(password, rePassword) {
        return password === rePassword;
    }

    User.findOne({username: username}, (err, data) => {
        if (data) {
            res.send({error: '用户已存在'});
        }
        else {
            if (checkUsername(username) && checkPassword(password) && checkPasswordSame(password, rePassword)) {
                new User({
                    username: req.body.username,
                    password: req.body.password
                }).save((err, data)=> {
                    if (err) {
                        return next(err);
                    } else {
                        res.send({data: data});
                    }
                });
            } else {
                res.send({error: 'input information error!'});
            }
        }
    });
});

router.post('/logining', (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password}, (err, data)=> {
        if (!data) {
            res.status(403).send();
        } else {
            let id = uuid.v4();
            new LoginCookie({UUID: id, username: req.body.username}).save((err, data)=> {
                if (err) {
                    res.status(403).send();
                } else {
                    res.status(201);
                    res.cookie('UUID', id).send({data: data});
                }
            });
        }
    });
});

router.post('/perfect', (req, res)=> {
    User.findOne({username: req.body.username}, (err, data)=> {
        if (!data) {
            res.status(403).send();
        } else {
            User({
                realName: req.body.realName,
                telphone: req.body.telphone,
                address:  req.body.address,
                age:      req.body.age,
                wechat:   req.body.wechat
            }).save((err, data)=> {
                if (err) {
                    return next(err);
                } else {
                    res.send({data: data});
                }
            })

        }
    })
});


router.get('/logining', (req, res) => {
    LoginCookie.findOne({UUID: req.cookies.UUID}, (err, data)=> {
        if (data) {
            res.status(200).send(data.username);
        }
        else {
            res.sendStatus(403);
        }
    });
});

module.exports = router;