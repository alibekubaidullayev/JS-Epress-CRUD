import url from "url";
import { addUser } from "../../core/data.js";
import { isValidUserCreate } from "../../core/validators.js";

const createUser = async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const [user, error_msg] = isValidUserCreate(parsedUrl.query);
  if (!user) {
    res.status(404).json({ error: error_msg });
    return;
  }

  try {
    const newUser = await addUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default createUser;
