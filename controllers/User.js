import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, gender } = req.body;
  try {
    await User.create({
      name: name,
      email: email,
      gender: gender,
    });
    res.status(201).json({ msg: "user created" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { name, email, gender } = req.body;
  const id = req.params.id;
  try {
    await User.updateOne(
      { _id: id },
      {
        name: name,
        email: email,
        gender: gender,
      }
    );
    res.status(201).json({ msg: "user updated" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.deleteOne({ _id: id });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
