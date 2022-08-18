const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../secretkeys/secretKey");

module.exports.create = async (req, res) => {
  const body = req.body;
  try {
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(body.password, salt);
    const user = new User({
      ...body,
      password: hashedPassword,
    });
    const response = await user.save();
    res.json({ success: response });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.login = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      res.json({ error: "invalid email or password" });
    } else {
      const validUser = await bcryptjs.compare(body.password, user.password);
      if (!validUser) {
        res.json({ error: "invalid email or password" });
      } else {
        const tokenData = {
          name: user.name,
          id: user._id,
        };
        const token = jwt.sign(tokenData, secretKey);
        res.json({ successToken: `bearer ${token}` });
      }
    }
  } catch (err) {
    console.log("fuuckk error", err);
    res.json({ error: err });
  }
};
