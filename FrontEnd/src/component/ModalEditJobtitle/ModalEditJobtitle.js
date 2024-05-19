import IconClose from "../../assets/icon/IconClose";
import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from './ModalEditJobtitle.module.scss'
import {useDispatch} from "react-redux";
import {actionEditJobtitle} from "../../redux-store/action/actionJobtitle";


const checkValidation=(content)=>{
    const error = {};
    if(content===null || content.trim()===''){
        error.value='Xin vui lòng chuyên môn!'
    }
    return error ;


}
 export const ModalEditJobtitle=React.memo((props)=>{
    const {item,isVisible, onClose} = props
     const dispatch = useDispatch();
    const cx = classNames.bind(styles);
    const [content, setContent] = useState(null);
     const [errors, setErrors] = useState({});
    useEffect(()=>{
        setContent(item?.jobtitleName)
    },[item,isVisible])
    const handleEdit=async (event) => {
        event.preventDefault();
        const error = {};
        if(content===null || content.trim()===''){
            error.value='Xin vui lòng nhập chuyên môn!'
            setErrors(error)
        }
        else{
            setErrors(error)
        }
        if(Object.keys(error).length === 0){
           await dispatch(actionEditJobtitle(content,item?.jobtitleId))
            onClose();
        }
    }
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
                                       <input value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder={"Nhập nội dung chuyên môn"} className={cx('input')}/>
                                   </div>
                            {errors.value?<div style={{fontSize:15, color:'red', marginLeft:"10%"}}>{errors.value}</div>:null}
                        </div>
                        <div>
                            <div onClick={handleEdit} style={style.buttonEdit}>
                                <div style={style.textEdit}>Chỉnh sửa</div>
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
