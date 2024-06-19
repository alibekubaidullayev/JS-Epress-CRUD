import url from "url";
import { getUser } from "../../core/data.js";
import { isValidId } from "../../core/validators.js";
import { getInt } from "../../core/utils.js";

const getUserById = async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const [id, error_msg] = isValidId(getInt(parsedUrl.path));
    if (!id) {
      return res.status(404).json({ error: error_msg });
    }
    const user = await getUser(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getUserById;
