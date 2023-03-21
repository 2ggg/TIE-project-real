import jwtDecode from "jwt-decode";
import { cookies } from "../shared/cookie";

//본인인지 확인 후 children 보여주기
export const Authentication = ({targetUserId, children}) => {
  const token = cookies.get("token");
  const tokenPayload = jwtDecode(token);
  //payload : {nickname: 'ju', userId: 'ljh', iat: 1679386513}

  if(token){
    console.log(tokenPayload.userId, "/",targetUserId);
    if(tokenPayload.userId === targetUserId) {
      return <>{children}</>;
    }
  }
};