import url from "url";
import { deleteUser } from "../../core/data.js";
import { isValidId } from "../../core/validators.js";
import { getInt } from "../../core/utils.js";

const deleteUser_ = async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const [id, error_msg] = isValidId(getInt(parsedUrl.path));
    if (!id) {
      res.status(404).json({ error: error_msg });
      return;
    }
    const deletedUser = await deleteUser(id);
    res.status(202).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteUser_;
