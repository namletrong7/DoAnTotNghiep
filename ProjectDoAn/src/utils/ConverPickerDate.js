export  function converPickerDate(date){
  // Lấy thông tin ngày, tháng, năm
  const day = date.getDate();
  const month = date.getMonth() + 1; // Lưu ý rằng tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

// Chuyển định dạng ngày thành chuỗi "dd/MM/yyyy"
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  return formattedDate;
}



export function getNewDate(){
  const currentDate = new Date();

// Lấy thông tin ngày, tháng, năm từ đối tượng Date
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
  const year = currentDate.getFullYear();

// Chuyển đổi thành chuỗi ngày-tháng-năm
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

return formattedDate

}
