
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.form = function(req, res){
    res.render('form', { error: 'You can only use one to three letters for your name'});
};

