import url from "url";
import { updateUser } from "../../core/data.js";
import { getInt } from "../../core/utils.js";
import { isValidId, isValidUserUpdate } from "../../core/validators.js";

const updateUserById = async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const [id, error_msg_id] = isValidId(getInt(parsedUrl.path));
    if (!id) {
      return res.status(404).json({ error: error_msg_id });
    }

    const [user, error_msg_user] = isValidUserUpdate(parsedUrl.query);
    if (!user) {
      return res.status(404).json({ error: error_msg_user });
    }

    const updatedUser = await updateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default updateUserById;
