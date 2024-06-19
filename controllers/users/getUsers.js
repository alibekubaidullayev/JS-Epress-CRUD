import { getUsers } from "../../core/data.js";

const getAllUsers = async (req, res) => {
  try {
    const usersList = await getUsers();
    res.status(200).json(usersList);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getAllUsers;
