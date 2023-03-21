import { apis } from "../shared/axios";

export const fetchPost = async(postId, setOnePost, setUpdateResult) => {
  const postResponse = await apis.get(`api/posts/${postId}`);
  setOnePost(postResponse.data.post);
  setUpdateResult(postResponse.data.isUpdate);
};