var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1", "alto");
    Task.new("Tarefa 2", "medio");
  }

  let obj = Task.getElementById(req.query.tid);
  let params = { tasks: Task.list(), task: obj }
  let prioridade_default = '';
  if (obj)
    prioridade_default = obj.priority;

  params['prioridades'] = [
    {nome:'Alta', value:'alto', selected:prioridade_default == 'alto'}, 
    {nome:'Media', value:'medio', selected:prioridade_default == 'medio'}, 
    {nome:'Baixa', value:'baixo', selected:prioridade_default == 'baixo'}, 
  ]

  res.render('index', params);
});

router.post("/tarefas", function (req, res){
    /*
    const {error, value} = TaskSchema.validate(req.body);
    if (error) {
      res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
      return;
    }*/
    
    const {id, nome, prioridade} = req.body
    /*Tratamento dos valores*/
    if (prioridade == undefined || prioridade == null || prioridade == "") {
      prioridade = "baixo"
    }
    if (prioridade != "alto" && prioridade != "medio" && prioridade != "baixo") {
      prioridade = "baixo";
    }

    if (id === undefined) {
      //Inserir
      Task.new(nome, prioridade);
    } else {
      //Alterar
      Task.update(id, nome, prioridade);
    }
    
    res.redirect("/");
})

router.get("/tarefas/del/:id", function(req, res){
  const {id} = req.params;
  const {error, value} = Joi.number().integer().greater(0).validate(id)

  if (error || !Task.delete(value)) {
    res.send("Falha ao excluir uma tarefa");
    return;
  }
  res.redirect("/");
})

module.exports = router;
