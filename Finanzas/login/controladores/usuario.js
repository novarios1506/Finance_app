const passport = require('passport');
const Usuario = require('../js/Usuario');

exports.postSignup = async (req, res, next) => {
  try {
    const usuario = new Usuario({
      email: req.body.email,
      nombre: req.body.nombre,
      password: req.body.password
    });

    const usuarioExistente = await Usuario.findOne({ email: req.body.email });
    if (usuarioExistente) {
      return res.status(400).send('This email is already registered');
    }

    const nuevoUsuario = await usuario.save();
    req.logIn(nuevoUsuario, err => {
      if (err) {
        next(err);
      }
      res.send('User has been registered successfully');
    });
  } catch (err) {
    next(err);
  }
};

exports.postLogin = (req, res, next) => {
    passport.authenticate('local', (err, usuario, info) => {
        if (err) {
            next(err);
        }
        if (!usuario) {
            return res.status(400).send('Invalid email or password');
        }
        req.logIn(usuario, (err) => {
            if (err) {
                next(err);
            }
            res.send('Login exitoso');
        })
    })(req, res, next);
}

exports.logout = (req, res) => {
  req.logout(err => {
    if (err) {
      // Aquí puedes manejar el error
      console.error(err);
      res.status(500).send('Algo salió mal');
    } else {
      res.send('Logout exitoso');
    }
  });
};