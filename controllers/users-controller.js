import * as dao from "./users-dao.js";

let currentUser = null;

const UsersController = (app) => {
  const createUser = async (req, res) => {
    const user = req.body;
    const actualUser = await dao.createUser(user);
    res.json(actualUser);
  };

  

  const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
  };

  const updateUser = async (req, res) => {
    const username = req.body.username;
    const updates = req.body;
    const status = await dao.updateUser(username, updates);
    console.log("status: ", status);
    res.json(status);
  };

  const updateCounty = async (req, res, next) => {
    try {
      const username = req.params.username;
      const country = req.body.country;
      const existingUser = await dao.findByUsername(username);
      const status = await dao.updateUser(username, { ...existingUser._doc, country: country });
      return res.json(status);
    } catch (ex) {
      next(ex);
    }
  }

  const loadUserByUsername = async (req, res) => {
    const username = req.query.username;
    const existingUser = await dao.findByUsername(username);
    if (!existingUser) {
      res.sendStatus(403);
      return;
    }
    res.status(200).json(existingUser);
  };

  const register = async (req, res) => {
    const user = req.body;
    const existingUser = await dao.findByUsername(user.username);
    if (existingUser) {
      res.sendStatus(403);
      return;
    }
    const actualUser = await dao.createUser(user);
    currentUser = actualUser;
    res.json(actualUser);
  };

  const login = async (req, res) => {
    const credentials = req.body;
    console.log("login credential", credentials);
    await dao.findByCredentials(credentials, res);
    // console.log("error: ", error);
    return;
  };

  const getByUsername = async (req, res, next) => {
    try {
      console.log("get by user name");
      const username = req.params.username;
      const existingUser = await dao.findByUsername(username);
      return res.json(existingUser);
    } catch (ex) {
      next(ex);
    }
  }

  const getAllUsers = async (req, res) => {
  try {
    const allUsers = await dao.findAllUsers();
    console.log(allUsers);
    return res.json(allUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

  app.post("/users", createUser);
  app.get("/oneuser", loadUserByUsername);
  app.delete("/users/:uid", deleteUser);
  app.post("/register", register);
  app.post("/login", login);
  app.get("/api/users/:username", getByUsername);
  app.post("/api/users/:username", updateCounty);
  app.get("/api/users", getAllUsers);
};

export default UsersController;
