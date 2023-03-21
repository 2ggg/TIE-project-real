import { apis } from "../shared/axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  main: [],
};

//댓글 가져오기
export const fetchComment = async(postId, setComments) => {
  const commentResponse = await apis.get(`api/posts/${postId}/comments`);
  setComments(commentResponse.data.comments);
};

//댓글 추가하기
export const addComment = async({postId, token, tokenPayload, value, comments, setComments}) => {
  const data = {
    comment: value,
    // postId,
    // userId: tokenPayload.userId,
    // nickname: tokenPayload.nickname,
  };
  try {
    const commentResponse = await apis.post(`api/posts/${postId}/comments`, {
      headers: {authorization: `Bearer ${token}`},
      data: data,
    });
    console.log("response", commentResponse);
    // setComments();
  } catch(error) {
    alert(error.response.data.errorMessage);
  }
};

//댓글 삭제하기
export const deleteComment = async({token, postId, commentId, comments, setComments}) => {
  if(window.confirm("댓글을 삭제하시겠습니까?")){
    try {
      await apis.delete(`api/posts/${postId}/comments/${commentId}`, {
        headers: {authorization: `Bearer ${token}`}
      });
      console.log(commentId,'삭제성공');
      alert("삭제되었습니다.");
      setComments(comments.filter((item) => item.commentId !== commentId));
      
    } catch(error) {
      alert(error.response.data.errorMessage);
    }
  }
};