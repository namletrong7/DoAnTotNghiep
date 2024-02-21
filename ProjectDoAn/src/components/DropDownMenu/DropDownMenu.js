import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Platform } from "react-native";

function DropDownMenu(props) {

  const [value, setValue] = useState('');

  const handleItemChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.options[0].value)
  }, [])

  return (
    <DropDownPicker
      open={props.isOpen}
      setOpen={props.setOpen}
      setValue={setValue}
      items={props.options.map(option => ({ label: option.label, value: option.value }))}
      value={value}
      onChangeItem={item => handleItemChange(item.value)}
      maxHeight={Platform.OS == 'android' ? 225 : 300}
      listMode="SCROLLVIEW"
      scrollViewProps={{ nestedScrollEnabled: true }}
      style={{
        zIndex: props.zIndex,
        zIndexInverse: props.zIndexInverse,
      }}
      selectedItemLabelStyle={{ color: 'red' }}
      dropDownContainerStyle={{ backgroundColor: '#ffffff', }}
    />
  )
}

export default DropDownMenu;
