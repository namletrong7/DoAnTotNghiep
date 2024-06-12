import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const ProjectChartComponet = () => {
    const dataNumProject = useSelector(state => state.auth.dataNumProject);

    const pieData = [
        {
            value: parseFloat(((dataNumProject?.numProjectUnfulfilled ?? 0) / (dataNumProject?.totalProject ?? 1) * 100).toFixed(2)),
            color: '#181818'
        },
        {
            value: parseFloat(((dataNumProject?.numProjectDoing ?? 0) / (dataNumProject?.totalProject ?? 1) * 100).toFixed(2)),
            color: '#4191df'
        },
        {
            value: parseFloat(((dataNumProject?.numProjectPause ?? 0) / (dataNumProject?.totalProject ?? 1) * 100).toFixed(2)),
            color: '#ecae36'
        },
        {
            value: parseFloat(((dataNumProject?.numProjectDone ?? 0) / (dataNumProject?.totalProject ?? 1) * 100).toFixed(2)),
            color: '#62c241',
            focused: true
        }
    ];

  const renderDot = (color:string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            marginBottom: 10,
             flex:1,
              marginStart:10,
          }}>
          <Text style={{color: 'black',fontSize:15,marginBottom:10,flexWrap:'wrap'}}>{'Tổng số: '+dataNumProject?.totalProject+' dự án'}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderDot('#181818')}
            <Text style={{color: 'black'}}>{'Chưa thực hiện: '+dataNumProject?.numProjectUnfulfilled}</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
            {renderDot('#4191df')}
            <Text style={{color: 'black'}}>{'Đang thực hiện: '+dataNumProject?.numProjectDoing }</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex:1,
              marginRight: 20,
              marginTop:5
            }}>
            {renderDot('#ecae36')}
            <Text style={{color: 'black'}}>{'Tạm dừng: '+dataNumProject?.numProjectPause}</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
            {renderDot('#62c241')}
            <Text style={{color: 'black'}}>{"Hoàn thành: "+dataNumProject?.numProjectDone}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
      <View
        style={{
          margin:5,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#e7effb',
        }}>
        <Text
          style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
          Tiến độ thực hiện các dự án
        </Text>
        <View style={{padding: 5, alignItems: 'center',flexDirection:'row',justifyContent:'space-around'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={50}
            innerRadius={40}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>
                    47%
                  </Text>
                  <Text style={{fontSize: 10, color: 'white'}}>Đã hoàn thành</Text>
                </View>
              );
            }}
          />
          {renderLegendComponent()}
        </View>
    </View>);
}
export default React.memo(ProjectChartComponet)
