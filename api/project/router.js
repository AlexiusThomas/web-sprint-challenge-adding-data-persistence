// build your `/api/projects` router here
const express = require('express');
const Model = require('./model');

router = express.Router();

router.post('/api/resources', (req, res, next) => {
    Model.addResource(req.body)
    .then(resource => {
        res.status(202).json(resource)
        next();
    })
    .catch(error => {
        next(error);
    })
})

router.get('/api/resources', (req, res, next) => {
    Model.findResources()
    .then(resp => {
        if(resp.length === 0){
            next(err);
        } else{
            res.status(200).json(resp);
        }
    })
    .catch(error => {
        next(error);
    })
})

router.post('/api/projects', (req, res, next) => {
    Model.addProject(req.body)
    .then(project => {
        project = { ...project[0], project_completed: project[0].project_completed == 0 ? false : true}
        res.status(202).json(project)
    })
    .catch(error => {
        next(error);
    })
})

router.get('/api/projects', (req, res, next) => {
    Model.findProjects()
    .then(resp => {
        if(resp.length === 0){
            next(err);
        } else{
            resp = resp.map(project => {
                return({
                    ...project,
                    project_completed: project.project_completed == 0 ? false : true
                })
            })
            res.status(200).json(resp);
        }
    })
    .catch(error => {
        next(error);
    })
})

router.post('/api/tasks', (req, res, next) => {
    Model.addTask(req.body)
    .then(task => {
        task = { ...task[0], task_completed: task[0].task_completed == 0 ? false : true}
        res.status(202).json(task)
        next();
    })
    .catch(error => {
        next(error);
    })
})

router.get('/api/tasks', (req, res, next) => {
    Model.findTasks()
    .then(resp => {
        if(resp.length === 0){
            next(err);
        } else{
            resp = resp.map(task => {
                return({
                    ...task,
                    task_completed: task.task_completed == 0 ? false : true
                })
            })
            res.status(200).json(resp);
        }
    })
    .catch(error => {
        next(error);
    })
})

module.exports = router; 