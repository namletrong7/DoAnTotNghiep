
import React, {useEffect, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
 export const LoadingComponent=(props)=>{

    return (
        <Player
            autoplay
            loop
            src={require("../../assets/animation/loading.json")}
            style={{ height: '300px', width: '300px' }}
        />
    )
}
