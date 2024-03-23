// hàm hỗ trợ kiểm tra người tìm kiếm đa tồn tại trong ds dc chọn hay chua
 export const checkMember = (itemCheck,dataUserChoose) => {
  // Sử dụng find để kiểm tra xem itemCheck có tồn tại trong mảng dataUser không
  const foundItem = dataUserChoose.find(item => item.userId === itemCheck.userId);
  // Nếu tìm thấy, trả về true, ngược lại trả về false
  return foundItem !== undefined;
}
