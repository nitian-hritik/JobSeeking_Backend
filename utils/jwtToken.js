export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    maxAge: 24*60*60*1000,
    // for deployment

    sameSite:"none",
    secure:true,
    httpOnly: false, // Set httpOnly to true

    //for localhost
    // httpOnly:true,
    // secure:false,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
