import IconClose from "../../assets/icon/IconClose";
import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from './ModalAddDepartment.module.scss'
import {dataListPosititon} from "../../unitl/GetValuePosition";
import {baseUrlAvatarUser, baseUrlLinkFile} from "../../api/ConstBaseUrl";
import IconSwitchOn from "../../assets/icon/IconSwitchOn";
import IconSwitchOff from "../../assets/icon/IconSwitchOff";


 export const ModalAddJobtitle=React.memo((props)=>{
    const {isVisible, onClose} = props
    const cx = classNames.bind(styles);
    const [content, setContent] = useState('');

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
                        <div onClick={onClose}>
                            <IconClose />
                        </div>
                        <div className={cx('flex')}>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>Tên chuyên môn: </div>
                                       <input value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder={"Nhập tên phòng ban"} className={cx('input')}/>
                                   </div>
                        </div>
                        <div>
                            <div style={style.buttonEdit}>
                                <div style={style.textEdit}>Thêm phòng ban</div>
                            </div>
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
        width:"60%",
        maxHeight:'80%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
         overflow:'auto'
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
        alignSelf:'center',
        paddingTop:5,
        marginLeft:"45%",
        paddingBottom:5,
    },
    textEdit:{
          fontSize: 16,
          color:"black",
          fontWeight:600
    }
};
