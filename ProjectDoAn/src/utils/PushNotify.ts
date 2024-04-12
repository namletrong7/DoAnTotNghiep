import notifee, {RepeatFrequency, TriggerType} from "@notifee/react-native";
import {getRandomColor} from "./GetPriority";
import {randomKeyComment} from "./RandomKeyComment";

export   const PushNotify =()=>{

    async  function displayNotify() {
        await notifee.requestPermission()
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
                id: "1",
                title:"ccc",
                body: "fffffffff",
                android: {
                    channelId,
                },
            },

        );

     return notify
    }

  return {
        displayNotify
  }
}
