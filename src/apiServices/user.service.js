const jsondetails = localStorage.getItem("userDetails")
const userDetails = jsondetails ? JSON.parse(jsondetails) : null;
export const userDetail = userDetails ? userDetails : null;
export const userId = userDetails ? userDetails.id : null;

