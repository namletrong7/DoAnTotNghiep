// chuyển dữ liệu từ picker date  chọn được to đinh dnagj đ/mm/yy
import {Text} from "react-native";
import React from "react";

export  function converPickerDate(date){
  // Lấy thông tin ngày, tháng, năm
  const day = date.getDate();
  const month = date.getMonth() + 1; // Lưu ý rằng tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

// Chuyển định dạng ngày thành chuỗi "dd/MM/yyyy"
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  return formattedDate;
}


// chuyển dữ liệu data từ db về định dạng dd/mm/yyy
export function convertDateDB(date){
  const dbDate = new Date(date);

// Lấy ngày, tháng, năm từ đối tượng Date
  const day = dbDate.getDate();
  const month = dbDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
  const year = dbDate.getFullYear();

// Tạo chuỗi ngày tháng mới trong định dạng DD/MM/YYYY
  const formattedDateString = `${day}/${month}/${year}`;

return formattedDateString

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

 export const RenderWarningDate = (endDay) => {
    if(endDay==='0000-00-00'){
        return null
    }else {
        const yourDate = new Date(endDay);
        const currentDate = new Date();
// Tính số mili giây giữa hai ngày
        const timeDifference = currentDate - yourDate;

// Tính số ngày từ số mili giây
        const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   setdaysDifference(daysDifference1)
        if (day > 0) {    // Nếu hạn xử lý quá 5 ngày so với ngày hiện tại
            return (
                <Text style={{
                    fontSize: 13,
                    color: "red",
                    fontFamily: "OpenSans-Regular",
                }}>{"Quá hạn: " + day + " ngày"}</Text>
            )
        } else if (day >= -5 && day !== 0) { // Nếu hạn xử lý còn 5 ngày nữa mới đến
            return (
                <Text style={{
                    fontSize: 13,
                    color: "#CC6600",
                    fontFamily: "OpenSans-Regular",
                }}>{"Tới hạn trong: " + -day + " ngày"}</Text>
            )
        } else if (day === 0) {
            return (
                <Text style={{
                    fontSize: 13,
                    color: "#66FF00",
                    fontFamily: "OpenSans-Regular",
                }}>{"Hạn xử lý hôm nay"}</Text>
            )
        } else {
            return null;
        }
    }

}
 export const getTimeDifference = (timeNotify) => {
   const currentTime = new Date(); // Lấy thời gian hiện tại
   const notifyTime = new Date(timeNotify); // Chuyển đổi thời gian từ dữ liệu timeNotify

   const timeDifference = currentTime - notifyTime; // Tính khoảng cách thời gian

   const millisecondsInMinute = 60 * 1000; // Số mili giây trong một phút
   const minutesDifference = timeDifference / millisecondsInMinute; // Chuyển đổi khoảng cách thời gian sang phút

   if (minutesDifference < 60) {
     // Nếu khoảng cách thời gian nhỏ hơn 1 giờ
     return `${Math.floor(minutesDifference)} phút trước`;
   } else if (minutesDifference < 24 * 60) {
     // Nếu khoảng cách thời gian lớn hơn 1 giờ nhưng nhỏ hơn 24 giờ
     const hoursDifference = Math.floor(minutesDifference / 60); // Chuyển đổi khoảng cách thời gian sang giờ
     return `${hoursDifference} giờ trước`;
   } else {
     // Nếu khoảng cách thời gian lớn hơn hoặc bằng 24 giờ
     const formattedTime = notifyTime.toLocaleString('vi-VN', {
       day: 'numeric',
       month: 'numeric',
       hour: 'numeric',
       minute: 'numeric',
     });
     return `Lúc ${formattedTime}`;
   }
};
