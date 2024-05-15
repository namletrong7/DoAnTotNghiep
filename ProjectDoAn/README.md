fix 1 số lỗi trên IOS đẻ chạy dc app :
1: fix lỗi  Incompatible function pointer types passing 'YGSize (YGNodeRef, float, YGMeasureMode, float, YGMeasureMode)' 
    file : /node_modules/@react-native-community/datetimepicker/ios
   tại dòng : static YGSize RNDateTimePickerShadowViewMeasure 
   chỉnh : YGNodeRef -> YGNodeConstRef
