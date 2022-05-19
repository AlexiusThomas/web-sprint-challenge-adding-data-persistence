// build your `Project` model here
const db = require('../../data/dbConfig');

function findTasks(){
    return (
        db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.task_id', 'tasks.task_description',  'tasks.task_notes', 'tasks.project_id', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')
    )
}

async function findTaskById(id){
    return db('tasks').where('task_id', id);
}

async function addTask(task){
    const test = await db('projects').where('project_id', task.project_id)
    if(test.length > 0){
        return db('tasks').insert(task).then(() => {
            return db('tasks').orderBy('task_id', 'desc').limit(1);
        });
    }else{
        return { status: 404, message: 'there is no project with that id'}
    }
}

function findProjects(){
    return db('projects');
}

function addProject(project){
    return db('projects').insert(project).then(() => {
        return db('projects').orderBy('project_id', 'desc').limit(1);
    });
}

function findResources(){
    return db('resources');
}

function addResource(resource){
    return db('resources').insert(resource).then(() => {
        return resource
    });
}

module.exports = {
    findProjects,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask
}