const router = require('express').Router();
const { Project, User} = require();
const withAuth = require();

router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll ({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });




module.exports = router;