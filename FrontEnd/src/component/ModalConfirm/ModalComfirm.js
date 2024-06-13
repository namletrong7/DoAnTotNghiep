
import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from './ModalComfirm.module.scss'


 export const ModalComfirm=React.memo((props)=>{
    const {content, onClose, isVisible, onConfirm} = props
      const cx = classNames.bind(styles);

    return (
        <div>
            {isVisible ?
                <div style={{   backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000}}>
                    <div style={style.modalContent}>
                         <div style={style.content}>{content}</div>
                          <div style={style.rowContent}>
                              <div onClick={onClose} style={style.contentCancel}>Hủy bỏ</div>
                              <div onClick={onConfirm} style={style.contentConfirm}>Xác nhận</div>
                          </div>
                    </div>
                </div> : null}

        </div>
    )
});
const style = {
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width:"30%",
        maxHeight:'80%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
         overflow:'auto',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropDown:{
        padding:10, fontSize:16, borderRadius:10,width:'100%'
    },
    buttonEdit:{
        backgroundColor:'#45b2fb',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        width:100,
        paddingTop:5,
        paddingBottom:5,
    },
    content:{
          fontSize: 16,
          color:"black",
          fontWeight:600
    },
    contentConfirm:{
        color: "#207ac1",
        backgroundColor:'#a3d8f1',
        borderRadius:11,
        fontSize:19,
        fontWeight: 700,
        padding:10
    },
    contentCancel:{
        color: "#207ac1",
        backgroundColor:'#DDDDDD',
        borderRadius:11,
        fontSize:19,
        fontWeight: 700,
        padding:10
    },
    rowContent:{
        display:'flex',
        justifyContent:'space-around',
        marginTop:20,
    }
};
