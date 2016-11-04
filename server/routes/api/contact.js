import {Router} from 'express';
import cors from 'cors';
import {User} from '../../models/User';

let contactRoutes = Router();

contactRoutes.use(cors());

contactRoutes.get('/', (req, res, next) => {
    User.find({})
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(404).json({err});
    });
});

contactRoutes.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.status(404).json({err});
    });
});

contactRoutes.post('/', (req, res, next) => {
    let user = new User(Object.assign({}, req.body.contact));
    user.save().then((data) => {
        res.json({created: 1});
    }).catch((err) => {
        res.status(500).json({err});
    });
});

contactRoutes.put('/:id', (req, res, next) => {
    let user = Object.assign({}, req.body.contact);
    User.findByIdAndUpdate(req.params.id, user)
        .then((data) => {
            if (!data) {
                res.status(404).json({err: {message: 'Not found'}});
            }
            res.json({updated: 1});
        })
        .catch((err) => {
            res.status(500).json({err});
        });
});

contactRoutes.delete('/:id', (req, res, next) => {
    let user = Object.assign({}, req.body.contact);
    User.findByIdAndRemove(req.params.id)
        .then((data) => {
            if (!data) {
                res.status(404).json({err: {message: 'Not found'}});
            }
            res.json({deleted: 1});
        })
        .catch((err) => {
            res.status(500).json({err});
        });
});

export default contactRoutes;