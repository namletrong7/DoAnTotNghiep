/**
 * Màn hình chương trình họp
 */
// components/YourComponent.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, Button, FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Modal from "react-native-modal";

import { StyleSheet } from "react-native";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconClose from "../../assets/icons/IconClose";
import IconGroupPeople from "../../assets/icons/IconGroupPeople";
import DetailCTKH from "../../components/DetailCTKH";
import HeaderComponent from "../../components/header/HeaderComponent";


//NamLTc: tạo để test call api bất kỳ
const MettingScheduleScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  const [isConnected, setIsConnected] = useState(true);
  const [isShowModalCTKHS, SetIsShowModalCTKHS] = useState(false);//NamLTc : biến mở hoặc tắt modal chọn CTKHS
  const [selectedCTKHS, SetSelectedCTKHS] = useState("");  //NamLTc: CTKHS đuọc chọn
  const [selectedDayCTKHS, setSelectedDayCTKHS] = useState(null);
  const [dataDetailCTKH, setDataDetailCTKH] = useState([]);  // nội dung họp của từng ngày cụ thể
  var fakeDataDayCTKHS = [
    {
      "NgayHop": "2024-01-08T00:00:00",
      "INDID": 35,
      "PhienID": 3,
      "TGBD": "2024-01-08T09:30:00",
      "TGKT": "2024-01-08T12:00:00",
      "DiaDiem": null,
      "NoiDungTomTat": "",
      "NoiDung": "nội dung 8/1 làn 1",
      "LoaiTLKHID": 2,
      "TLKHID": 1018,
      "TenTL": "Giấy mời họp",
    },
    {
      "NgayHop": "2024-01-08T00:00:00",
      "INDID": 36,
      "PhienID": 2,
      "TGBD": "2024-01-08T12:00:00",
      "TGKT": "2024-01-08T19:00:00",
      "DiaDiem": null,
      "NoiDungTomTat": "",
      "NoiDung": "nội dung 8/1 làn 2 ",
      "LoaiTLKHID": 2,
      "TLKHID": 1019,
      "TenTL": "Tài liệu họp",
    },
    {
      "NgayHop": "2024-01-26T00:00:00",
      "INDID": 43,
      "PhienID": 3,
      "TGBD": "2024-01-26T08:30:00",
      "TGKT": "2024-01-26T12:00:00",
      "DiaDiem": null,
      "NoiDungTomTat": "Nội dung 1",
      "NoiDung": "<p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-weight: 700;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">I. Buổi sáng ngày 07/12/2023<o:p></o:p></font></span></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 26.95pt; line-height: 17pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">&nbsp; - Từ 07 giờ 30 phút đến 08 giờ 00 phút: Họp trù bị.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 17pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt; letter-spacing: -0.2pt;\">- Từ 08 giờ&nbsp;</span><span style=\"font-size: 14pt;\">00 phút<span style=\"letter-spacing: -0.2pt;\">&nbsp;đến 11 giờ 30 phút&nbsp;</span></span><i><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">(</span></i><i><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">Truyền hình trực tiếp trên sóng Đài PT-TH tỉnh).</span></i><span style=\"font-weight: 700;\"><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\"><o:p></o:p></span></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 17pt;\"><font face=\"Times New Roman\"><span style=\"font-weight: 700;\"><span lang=\"VI\" style=\"font-size: 14pt;\">1.&nbsp;</span></span><span style=\"font-size: 14pt;\">Khai mạc kỳ họp.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 17pt;\"><font face=\"Times New Roman\"><span style=\"font-weight: 700;\"><span style=\"font-size: 14pt;\">2.&nbsp;</span></span><span lang=\"VI\" style=\"font-size: 14pt;\">HĐND tỉnh làm việc tại hội trường nghe các</span><span style=\"font-size: 14pt;\">&nbsp;báo cáo,</span><span style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size: 14pt;\">tờ trình:</span><span lang=\"VI\" style=\"font-size: 14pt;\"><o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"DA\" style=\"font-size: 14pt;\">2.1. Báo cáo tóm tắt về tình hình thực hiện kế hoạch phát triển kinh tế - xã hội, đảm bảo quốc phòng - an ninh năm 2023; dự kiến kế hoạch phát triển kinh tế - xã hội năm 2024 trên địa bàn tỉnh Bắc Kạn và Tờ trình dự thảo Nghị quyết&nbsp;</span><span style=\"font-size: 14pt; letter-spacing: -0.3pt;\">của UBND tỉnh&nbsp;</span><span lang=\"DA\" style=\"font-size: 14pt;\">về kế hoạch phát triển kinh tế - xã hội, đảm bảo quốc phòng - an ninh năm 2024.</span><o:p></o:p></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.2. Báo cáo tổng hợp chung kết quả thẩm tra của 04 Ban HĐND tỉnh đối với Báo cáo về&nbsp;</span><span lang=\"DA\" style=\"font-size: 14pt;\">về tình hình thực hiện kế hoạch phát triển kinh tế - xã hội, đảm bảo quốc phòng - an ninh năm 2023; dự kiến kế hoạch phát triển kinh tế - xã hội năm 2024 trên địa bàn tỉnh Bắc Kạn; Tờ trình dự thảo Nghị quyết&nbsp;</span><span style=\"font-size: 14pt; letter-spacing: -0.3pt;\">của UBND tỉnh&nbsp;</span><span lang=\"DA\" style=\"font-size: 14pt;\">về kế hoạch phát triển kinh tế - xã hội, đảm bảo quốc phòng - an ninh năm 2024 và</span><span lang=\"DA\" style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size: 14pt; letter-spacing: -0.2pt;\">kiểm điểm công tác chỉ đạo, điều hành của UBND tỉnh năm 2023; phương hướng, nhiệm vụ năm 2024</span><span style=\"font-size: 14pt;\">&nbsp;<i>(Ban Dân tộc HĐND tỉnh tổng hợp chung).</i></span><o:p></o:p></font></p><p class=\"MsoBodyText\" style=\"margin: 6pt 0cm; text-indent: 35.45pt; line-height: 17pt;\"><span style=\"letter-spacing: -0.5pt;\"><font face=\"Times New Roman\">2.3. Dự thảo báo cáo hoạt động của HĐND tỉnh năm 2023, nhiệm vụ năm 2024.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.4. Thông báo của UBMTTQVN tỉnh về công tác tham gia xây dựng chính quyền năm 2023.&nbsp;&nbsp;<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.5. Bí thư Tỉnh uỷ phát biểu chỉ đạo kỳ họp.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 17pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.6.&nbsp;</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">Báo cáo kết quả giám sát của Đoàn giám sát HĐND tỉnh về việc quản lý, khai thác các công trình thủy lợi, nước sinh hoạt tập trung trên địa bàn tỉnh.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.8pt;\">2.7.<span style=\"font-weight: 700;\">&nbsp;</span></span><span style=\"font-size: 14pt; letter-spacing: -0.8pt;\">&nbsp;Báo cáo công tác giải quyết khiếu nại, tố cáo năm 2023; nhiệm vụ năm 2024.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.8. Báo cáo công tác phòng, chống tham nhũng năm 2023; phương hướng, nhiệm vụ năm 2024.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.9. Báo cáo công tác năm 2023, nhiệm vụ chủ yếu năm 2024 của Viện Kiểm sát nhân dân, Tòa án nhân dân, Cục thi hành án dân sự tỉnh.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">2.10.&nbsp;</span><span style=\"font-size: 14pt;\">Tờ trình dự thảo Nghị quyết quyết định tạm thời biên chế công chức; phê duyệt tạm thời tổng số lượng người làm việc hưởng lương từ ngân sách nhà nước trên địa bàn tỉnh Bắc Kạn năm 2024.</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\"><o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.11. Tờ trình dự thảo Nghị quyết quyết định số lượng cán bộ, công chức cấp xã và số lượng người hoạt động không chuyên trách ở cấp xã năm 2024 đối với các huyện, thành phố thuộc tỉnh Bắc Kạn.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.12. Báo cáo thẩm tra của Ban Pháp chế HĐND tỉnh đối với các báo cáo, tờ trình:<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">- Công tác giải quyết khiếu nại, tố cáo năm 2023, nhiệm vụ năm 2024;<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">- Công tác&nbsp;</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">phòng, chống tham nhũng năm 2023; phương hướng, nhiệm vụ năm 2024.</span><span style=\"font-size: 14pt;\"><o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">-&nbsp;</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">Công tác năm 2023, nhiệm vụ chủ yếu năm 2024 của Viện Kiểm sát nhân dân, Tòa án nhân dân, Cục thi hành án dân sự tỉnh.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">-&nbsp;</span><span style=\"font-size: 14pt;\">Tờ trình dự thảo Nghị quyết quyết định tạm thời biên chế công chức; phê duyệt tạm thời tổng số lượng người làm việc hưởng lương từ ngân sách nhà nước trên địa bàn tỉnh Bắc Kạn năm 2024.</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\"><o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">-&nbsp;</span><span style=\"font-size: 14pt;\">Tờ trình dự thảo Nghị quyết quyết định số lượng cán bộ, công chức cấp xã và số lượng người hoạt động không chuyên trách ở cấp xã năm 2024 đối với các huyện, thành phố thuộc tỉnh Bắc Kạn</span><span lang=\"VI\" style=\"font-size: 14pt;\">.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 34.2pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">2.13.&nbsp;</span><span style=\"font-size: 14pt;\">Báo cáo, Tờ trình quyết toán ngân sách địa phương năm 2022 tỉnh Bắc Kạn.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 34.2pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.14. Báo cáo, Tờ trình đánh giá tình hình thực hiện ngân sách năm 2023, dự toán ngân sách địa phương và phương án phân bổ dự toán ngân sách cấp tỉnh năm 2024 và xây dựng kế hoạch tài chính - ngân sách 03 năm giai đoạn 2024 - 2026.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.15. Tờ trình dự thảo Nghị quyết quy định mức thu, đơn vị tính phí bảo vệ môi trường đối với khai thác khoáng sản trên địa bàn tỉnh Bắc Kạn.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 34.2pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">2.16.&nbsp;</span><span style=\"font-size: 14pt;\">B</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">áo cáo thẩm tra của Ban Kinh tế - Ngân sách HĐND tỉnh đối với các Báo cáo, Tờ trình</span><span lang=\"VI\" style=\"font-size: 14pt;\">:<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 34.2pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"VI\" style=\"font-size: 14pt;\">- Q</span><span style=\"font-size: 14pt;\">uyết toán ngân sách địa phương năm 2022 tỉnh Bắc Kạn.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 34.2pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"VI\" style=\"font-size: 14pt;\">- Đ</span><span style=\"font-size: 14pt;\">ánh giá tình hình thực hiện ngân sách năm 2023, dự toán ngân sách địa phương và phương án phân bổ dự toán ngân sách cấp tỉnh năm 2024 và xây dựng kế hoạch tài chính - ngân sách 03 năm giai đoạn 2024 - 2026.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"VI\" style=\"font-size: 14pt;\">- Q</span><span style=\"font-size: 14pt;\">uy định mức thu, đơn vị tính phí bảo vệ môi trường đối với khai thác khoáng sản trên địa bàn tỉnh Bắc Kạn.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.17. Tờ trình dự thảo Nghị quyết về việc sửa đổi, bổ sung một số nội dung của Quy định nguyên tắc, tiêu chí và định mức phân bổ nguồn ngân sách nhà nước thực hiện Chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2021-2025 trên địa bàn tỉnh ban hành kèm theo Nghị quyết số 03/2022/NQ-HĐND ngày 27/4/2022 của Hội đồng nhân dân tỉnh.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.18. Tờ trình</span><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">&nbsp;dự thảo&nbsp;</span><span style=\"font-size: 14pt;\">Nghị quyết về phân bổ kế hoạch đầu tư công năm 2024 nguồn vốn ngân sách địa phương<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.19. Tờ trình</span><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">&nbsp;dự thảo Nghị&nbsp;</span><span style=\"font-size: 14pt;\">quyết về phân bổ kế hoạch đầu tư công năm 2024 thực hiện các Chương trình mục tiêu quốc gia.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">2.20.&nbsp;</span><span style=\"font-size: 14pt;\">Tờ trình</span><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">&nbsp;dự thảo Nghị quyết&nbsp;</span><span style=\"font-size: 14pt;\">sửa đổi, bổ sung Nghị quyết số 12/2022/NQ-HĐND ngày 29/8/2022 của HĐND tỉnh Bắc Kạn quy định mức hỗ trợ từ ngân sách nhà nước thực hiện Chương trình MTQG xây dựng nông thôn mới trên địa bàn tỉnh Bắc Kạn đến năm 2025&nbsp;<i>(nguồn vốn sự nghiệp).</i><o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">2.21. Tờ trình dự thảo Nghị quyết phê duyệt chủ trương chuyển mục đích sử dụng rừng sang mục đích khác để thực hiện các công trình, dự án&nbsp;<i>(bổ sung)&nbsp;</i>năm 2023 trên địa bàn tỉnh Bắc Kạn.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.22. B</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">áo cáo thẩm tra của Ban Kinh tế - Ngân sách HĐND tỉnh đối với các Tờ trình:<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"PT-BR\" style=\"font-size: 14pt;\">-&nbsp;</span><span style=\"font-size: 14pt;\">Sửa đổi, bổ sung một số nội dung của Quy định nguyên tắc, tiêu chí và định mức phân bổ nguồn ngân sách nhà nước thực hiện Chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2021-2025 trên địa bàn tỉnh ban hành kèm theo Nghị quyết số 03/2022/NQ-HĐND ngày 27/4/2022 của Hội đồng nhân dân tỉnh.<o:p></o:p></span></font></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt; letter-spacing: -0.2pt;\"><font face=\"Times New Roman\">- Phân bổ kế hoạch đầu tư công năm 2024 nguồn vốn ngân sách địa phương.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">- Phân bổ kế hoạch đầu tư công năm 2024 thực hiện các Chương trình mục tiêu quốc gia.<o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><span style=\"font-size: 14pt;\"><font face=\"Times New Roman\">- Sửa đổi, bổ sung Nghị quyết số 12/2022/NQ-HĐND ngày 29/8/2022 của HĐND tỉnh Bắc Kạn quy định mức hỗ trợ từ ngân sách nhà nước thực hiện Chương trình MTQG xây dựng nông thôn mới trên địa bàn tỉnh Bắc Kạn đến năm 2025&nbsp;<i>(nguồn vốn sự nghiệp).</i><o:p></o:p></font></span></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span lang=\"VI\" style=\"font-size: 14pt;\">2.</span><span style=\"font-size: 14pt;\">22. Tờ trình</span><span lang=\"PT-BR\" style=\"font-size: 14pt; letter-spacing: -0.2pt;\">&nbsp;dự thảo Nghị quyết</span><span style=\"font-size: 14pt;\">&nbsp;sửa đổi, bổ sung một số điều Nghị quyết số 02/2019/NQ-HĐND ngày 17/4/2019 của HĐND tỉnh về chính sách hỗ trợ cho học sinh, sinh viên học trung cấp, cao đẳng trên địa bàn tỉnh Bắc Kạn.<o:p></o:p></span></font></p><p></p><p class=\"MsoNormal\" style=\"margin: 6pt 0cm; text-align: justify; text-indent: 35.45pt; line-height: 18pt;\"><font face=\"Times New Roman\"><span style=\"font-size: 14pt;\">2.23. B</span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">áo cáo thẩm tra của Ban Văn hoá - Xã hội HĐND tỉnh đối với Tờ trình&nbsp;<span style=\"letter-spacing: -0.2pt;\">dự thảo Nghị quyết</span></span><span lang=\"PT-BR\" style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size: 14pt;\">sửa đổi, bổ sung một số điều Nghị quyết số 02/2019/NQ-HĐND ngày 17/4/2019 của HĐND tỉnh về chính sách hỗ trợ cho học sinh, sinh viên học trung cấp, cao đẳng trên địa bàn tỉnh Bắc Kạn</span></font><span lang=\"VI\" style=\"font-size: 14pt;\"><font face=\"Times New Roman\">.</font></span></p>",
      "LoaiTLKHID": 2,
      "TLKHID": 1015,
      "TenTL": "1. Tờ trình số 232_TTr-UBND ngày 28_11_2023 của UBND tỉnh dự thảo Nghị quyết điều chỉnh tên danh mục dự án được giao kế hoạch vốn tại Nghị quyết số 13_NQ-HĐND ngày 10_3_2023 và Nghị quyết số 26_NQ-HĐND ngày 26_4_202",
    },
    {
      "NgayHop": "2024-01-09T00:00:00",
      "INDID": 37,
      "PhienID": 2,
      "TGBD": "2024-01-09T07:00:00",
      "TGKT": "2024-01-09T12:00:00",
      "DiaDiem": null,
      "NoiDungTomTat": "",
      "NoiDung": "Nội dung chương trình buổi sáng ngày thứ 2<p style=\"font-size: 14px; font-family: Arial\"></p>",
      "LoaiTLKHID": 0,
      "TLKHID": 0,
      "TenTL": null,
    },
    {
      "NgayHop": "2024-01-09T00:00:00",
      "INDID": 38,
      "PhienID": 2,
      "TGBD": "2024-01-09T12:00:00",
      "TGKT": "2024-01-09T19:00:00",
      "DiaDiem": null,
      "NoiDungTomTat": "",
      "NoiDung": "Nội dung chương trình buổi chiều ngày thứ 2<p style=\"font-size: 14px; font-family: Arial\"></p>",
      "LoaiTLKHID": 2,
      "TLKHID": 1020,
      "TenTL": "Kết luận họp",
    },
  ];
//NamLTc: Phân vung cho CTKHS
  //Hành động khi chọn CTKHS
  function selecCTKHS(item) {
    SetIsShowModalCTKHS(!isShowModalCTKHS);
    SetSelectedCTKHS(item.TenChuongTrinh);
  }

  //NamLTc: item cho chươgn trình ky họp
  const ItemCTKHS = ({ item }) => (
    <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => {
      selecCTKHS(item);
    }}>
      <Text style={{ color: "black", marginLeft: 20, marginBottom: 12, fontSize: 18 }}>{item.TenChuongTrinh}</Text>
      <View style={{ backgroundColor: "black", height: 1, width: "100%", opacity: 0.2 }} />
    </TouchableOpacity>
  );

  //NamLTc: tạo 1 modal chứa danh sách chươgn trình kỳ họp
  const ModalCTKHS = ({ show, onRetry, isRetrying }) => {
    var fakeDataCTKHS = [
      {
        "CTKHID": 41,
        "TenChuongTrinh": "Test 3",
        "PBID": 0,
      },
      {
        "CTKHID": 40,
        "TenChuongTrinh": "Kiểm thử hệ thống 29/01/2024",
        "PBID": 0,
      },
      {
        "CTKHID": 39,
        "TenChuongTrinh": "Giới thiệu phần mềm họp không giấy",
        "PBID": 0,
      },

      {
        "CTKHID": 29,
        "TenChuongTrinh": "05/01/2024 kiểm thử",
        "PBID": 0,
      },
      {
        "CTKHID": 23,
        "TenChuongTrinh": "Kiểm thử hệ thống 10.1",
        "PBID": 0,
      },
      {
        "CTKHID": 2333,
        "TenChuongTrinh": "Kiểm thử hệ thống lịch 0801",
        "PBID": 0,
      },
      {
        "CTKHID": 454,
        "TenChuongTrinh": "abc",
        "PBID": 0,
      },
      {
        "CTKHID": 97,
        "TenChuongTrinh": "05/01/2024 kiểm thử",
        "PBID": 0,
      },
    ];

    return (
      <Modal
        isVisible={isShowModalCTKHS}
        style={styles.modalCTKHS}
      >
        <View style={styles.modalContainerCTKHS}>
          <TouchableOpacity y onPress={() => {
            SetIsShowModalCTKHS(!isShowModalCTKHS);
          }} style={{ alignSelf: "flex-end" }}>
            <IconClose height={40} width={40} />
          </TouchableOpacity>
          <View style={[styles.modalContainerCTKHS, { marginTop: 20 }]}>
            <FlatList
              data={fakeDataCTKHS}
              renderItem={({ item }) => <ItemCTKHS item={item} />}
              keyExtractor={item => item.CTKHID}
            />
          </View>
        </View>

      </Modal>
    );
  };
// NamLTc: vùng Detal CTKH hiển thị thứ và ngày cho mỗi CTKHS
  //NamLTc: hàm lấy thứ trong tuần
  function getDayOfWeek(timestamp) {
    const date = new Date(timestamp);
    const dayOfWeekIndex = date.getDay();
    return dayOfWeekIndex + 1;
  }

  //NamLTc: hàm hỗ trợ fomaat lại date
  function formatDate(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0"); // Ngày
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng (lưu ý rằng tháng trong JavaScript bắt đầu từ 0)
    const year = date.getFullYear().toString().slice(-2); // Năm (lấy hai chữ số cuối cùng)

    return `${day}/${month}/${year}`;
  }

  //NamLTc: hàm hỗ trợ láy ra các nội dung họp của tưng ngày cụ thể
  const getDetailCTKH = (item) => {
    setSelectedDayCTKHS(item.NgayHop);
    const filteredArray = fakeDataDayCTKHS.filter((itemDay) => itemDay.NgayHop === item.NgayHop);
    setDataDetailCTKH(filteredArray);
  };

  //NamLTc: item cho thứ và ngày cho 1 CTKHS
  const ItemDayCTKHS = ({ item }) => {
    const isSelected = selectedDayCTKHS === item.NgayHop;
    return (
      <TouchableOpacity style={{ flexDirection: "row", backgroundColor: isSelected ? "#fa6501" : "#db461f" }}
                        onPress={() => getDetailCTKH(item)}>
        <View style={{ paddingVertical: 5, paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 12, color: "white", alignSelf: "center" }}>{"T" + getDayOfWeek(item.NgayHop)}</Text>
          <Text style={{ fontSize: 12, color: "white" }}>{formatDate(item.NgayHop)}</Text>
        </View>
        <View style={{ width: "1%", marginVertical: 4, backgroundColor: "white", marginLeft: 10 }} />
      </TouchableOpacity>
    );
  };

  const DayCTKHS = () => {

    // Lọc ra các object có ngày họp duy nhất
    const uniqueDay = fakeDataDayCTKHS.filter((obj, index, self) =>
      index === self.findIndex((o) => o.NgayHop === obj.NgayHop),
    );
    return (
      <View style={{ backgroundColor: "#db461f" }}>
        <FlatList
          data={uniqueDay}
          renderItem={({ item }) => <ItemDayCTKHS item={item} />}
          keyExtractor={item => item.NgayHop}
          horizontal={true}
        />
      </View>
    );
  };

  return (
    <View>
      <HeaderComponent navigation={navigation} title={"CHƯƠNG TRÌNH HỌP"} back />

      <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
        <View>
          <View style={{ flexDirection: "row", marginHorizontal: 20, height: 70, backgroundColor: "white", flex: 1 }}>
            <Text style={{ color: "red", alignSelf: "center", fontWeight: "bold" }}>CHỌN : </Text>
            <TouchableOpacity onPress={() => {
              SetIsShowModalCTKHS(!isShowModalCTKHS);
            }} style={{
              flexDirection: "row",
              borderWidth: 1,
              height: 50,
              flex: 1,
              borderColor: "black",
              marginLeft: 10,
              borderRadius: 4,
              alignSelf: "center",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <View style={{ maxWidth: "90%" }}>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>{selectedCTKHS}</Text>
              </View>
              <View>
                <IconArrowDown />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "red" }} />
          <DayCTKHS />
          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
            <IconGroupPeople />
            <Text style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: 10,
            }}>{"Chương trình ngày " + formatDate(selectedDayCTKHS)}</Text>
          </View>
          <DetailCTKH data={dataDetailCTKH} />
          <View style={{ height: 1000 }} />
          <ModalCTKHS />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({

  modalCTKHS: {
    width: "80%",
    alignSelf: "center",
  },
  modalContainerCTKHS: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    height: 100,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  modalText: {
    fontSize: 18,
    color: "#555",
    marginTop: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
export default MettingScheduleScreen;

