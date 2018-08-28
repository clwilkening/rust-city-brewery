exports.myMiddleware = (req,res,next) => {
  req.name = 'Chris';
  if (req.name === 'Chris') {
    throw Error('That is a stupid name');
  }
  next();
}
exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};