import { apis } from "../../shared/axios";

export const getPost = async(postId) => {
  const response = await apis.get(`/posts/${postId}`);
  return response.data;
};

export const getComments = async(postId) => {
  const response = await apis.get(`/posts/${postId}/comments`);
  return response.data;
};
