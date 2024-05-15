import notifee, {RepeatFrequency, TriggerType} from "@notifee/react-native";
import {randomKeyComment} from "./RandomKeyComment";


   const PushNotify =()=>{

    async  function displayNotify(idNotify:string,title:string, body:any,data:any ) {
        const channelId = await notifee.createChannel({
            id: randomKeyComment().toString(),
            name: 'Custom Channel',
        });

        const date = new Date(Date.now() + (60000 * 60 * 24));

        const trigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime(),
            repeatFrequency: RepeatFrequency.DAILY,
            alarmManager: {
                allowWhileIdle: true,
            },
        };

     const notify=   await notifee.displayNotification({
                id: idNotify,
                title:title,
                body: body,
                android: {
                    channelId,
                },
               data:data
            },

        );

     return notify
    }

  return {
        displayNotify
  }
}
export default PushNotify;
