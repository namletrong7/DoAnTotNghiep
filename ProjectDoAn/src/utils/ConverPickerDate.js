export  function converPickerDate(date){
  // Lấy thông tin ngày, tháng, năm
  const day = date.getDate();
  const month = date.getMonth() + 1; // Lưu ý rằng tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

// Chuyển định dạng ngày thành chuỗi "dd/MM/yyyy"
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  return formattedDate;
}
export  function converPickerDateToDatetime(inputDateString){

// Tạo đối tượng Date từ chuỗi thời gian
  const inputDate = new Date(inputDateString);

// Chuyển đổi sang định dạng mong muốn
  const outputDateString = inputDate.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Đặt true nếu bạn muốn sử dụng định dạng 12 giờ
    timeZone: 'UTC' // Đảm bảo sử dụng múi giờ UTC
  });
   return outputDateString
}
