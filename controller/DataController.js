import Comment from "../models/Comment.js";

class DataController {
  async index(req, res) {
    try {
      const data = await Comment.find();
      if (!data) {
        throw { code: 400, message: "DATA_NOT_FOUND" };
      }

      //get all total comment on deep level
      const getComment = (data) => {
        let a = 0;
        let totalComment = 0;
        const arrc = [];
        const arrb = [];
        data.forEach((item) => {
          a += item.replies.length;
          item.replies.forEach((reply) => {
            arrb.push(reply);
            reply.replies.forEach((SecondReplies) => {
              arrc.push(SecondReplies);
            });
          });
        });
        totalComment = a + arrb.length + arrc.length;
        return totalComment;
      };

      const totalComment = getComment(data);
      return res.status(200).json({
        status: true,
        message: "DATA_FOUND",
        totalComment,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async store(req, res) {
    try {
      const data = await Comment.create([
        {
          commentId: 1,
          commentContent: "Hai",
          replies: [
            {
              commentId: 11,
              commentContent: "Hai juga",
              replies: [
                {
                  commentId: 111,
                  commentContent: "Haai juga hai jugaa",
                },
                {
                  commentId: 112,
                  commentContent: "Haai juga hai jugaa",
                },
              ],
            },
            {
              commentId: 12,
              commentContent: "Hai juga",
              replies: [
                {
                  commentId: 121,
                  commentContent: "Haai juga hai jugaa",
                },
              ],
            },
          ],
        },
        {
          commentId: 2,
          commentContent: "Halooo",
        },
      ]);
      if (!data) {
        throw { code: 500, message: "FAILED_CREATE_DATA" };
      }

      return res.status(200).json({
        status: true,
        message: "SUCCESS_CREATE_DATA",
        data,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

export default new DataController();
