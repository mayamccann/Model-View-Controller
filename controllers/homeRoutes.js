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

        // const projects
        const projects = projectData.map((project) => project.get({ plain: true }));

      // for next res.render homepage
        res.render('homepage', { 
          projects, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });


module.exports = router;