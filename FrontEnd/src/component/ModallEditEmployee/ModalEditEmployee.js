import IconClose from "../../assets/icon/IconClose";
import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from './ModalEditEmployee.module.scss'
import {dataListPosititon, getValuePositionLevel} from "../../unitl/GetValuePosition";
import {baseUrlAvatarUser, baseUrlLinkFile} from "../../api/ConstBaseUrl";
import IconSwitchOn from "../../assets/icon/IconSwitchOn";
import IconSwitchOff from "../../assets/icon/IconSwitchOff";
import {isVisible} from "@testing-library/user-event/dist/utils";
import {Player} from "@lottiefiles/react-lottie-player";
import {useSelector} from "react-redux";

 export const ModalEditEmployee=React.memo((props)=>{
    const {item, isShowModalEditUser, onClose} = props
    const cx = classNames.bind(styles);
     const [username, setUserName] = useState('');
     const [firstName, setfirstName] = useState('');
     const [lastName, setlastName] = useState('');
     const [email, setEmail] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [isAdmin, setIsAdmin] = useState(null);
     const [isActive, setIsActive] = useState(null);
     const [jobTitleId, setJobTitleId] = useState(null);
     const [departmentId, setDepartmentId] = useState(null);
     const [positionLevel, setPositionLevel] = useState(null);
     const [image, setImage] = useState(null)
     const dataListDepartment = useSelector(state => state.reducerDepartment?.dataListDepartment);
     const dataListJobtitle = useSelector(state => state.reducerJobtitle?.dataListJobtitle);
     const onImageChange = (event) => {
         if (event.target.files && event.target.files[0]) {
             setImage(URL.createObjectURL(event.target.files[0]));
             console.log(event);
         }
     }
     useEffect(()=>{
         console.log("mout modal eidt user")
         setUserName(item?.userName);
         setfirstName(item?.firstName)
         setlastName(item?.lastName)
         setEmail(item?.email)
         setPhoneNumber(item?.phoneNumber)
         setImage(baseUrlAvatarUser+item?.avatarUser)
         setIsActive(item?.isActive)
         setIsAdmin(item?.isAdmin)
         setJobTitleId(item?.jobtitleId)
         setDepartmentId(item?.departmentId)
         setPositionLevel(item?.positionLevel)
     },[item,isShowModalEditUser])
    const handleSetAdmin=()=>{
         setIsAdmin(!isAdmin)
    }
     const handleSetActive=()=>{
         setIsActive(!isActive)
     }
     // "userId": "1",
     //     "userName": "namltc",
     //     "firstName": "John",
     //     "lastName": "Doe",
     //     "fullName": "Lê Trọng Nam",
     //     "email": "john.doe@example.com",
     //     "phoneNumber": "123456789",
     //     "gender": "1",
     //     "isActive": "1",
     //     "passWord": "password123",
     //     "createdByUserid": "admin_user",
     //     "avatarUser": "namltc.png",
     //     "positionLevel": "2",
     //     "birthDay": "1990-01-01 00:00:00",
     //     "isAdmin": "1",
     //     "jobtitleName": "Chuyên viên phân tích dữ liệu",
     //     "departmentName": "Phòng phát triển hệ thống"

    return (
        <div>
            {isShowModalEditUser ?
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
                            <div style={{width:'100%'}}>
                               <div className={cx('rowInput')}>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>User Name</div>
                                       <input value={username} onChange={(e)=>{setUserName(e.target.value)}} className={cx('input')}/>
                                   </div>

                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>First Name</div>
                                       <input  value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} className={cx('input')}  />
                                   </div>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>Last name</div>
                                       <input value={lastName} onChange={(e)=>{setlastName(e.target.value)}} className={cx('input')} />
                                   </div>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>Email</div>
                                       <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className={cx('input')} />
                                   </div>

                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>Số điện thoại</div>
                                       <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className={cx('input')}  />
                                   </div>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>Chức vụ</div>
                                       <select value={positionLevel}  onChange={e=>{setPositionLevel(e.target.value)}} style={style.dropDown}>
                                           {dataListPosititon.map(item => (
                                               <option value={item.id} >{item.name}</option>
                                           ))}
                                       </select>
                                   </div>
                               </div>



                                <div className={cx('rowInput')}>
                                    <div className={cx('itemInput')}>
                                        <div className={cx('textInput')}>Phòng ban</div>
                                        <select value={departmentId} onChange={(e)=>{setDepartmentId(e.target.value)}} style={style.dropDown}>
                                            {dataListDepartment.map(item => (
                                                <option value={item?.departmentId} >{item?.departmentName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={cx('itemInput')}>
                                        <div className={cx('textInput')}>Chuyên môn</div>
                                        <select  value={jobTitleId} onChange={(e)=>{setJobTitleId(e.target.value)}} style={style.dropDown}>
                                            {dataListJobtitle.map(item => (
                                                <option value={item?.jobtitleId} >{item?.jobtitleName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={cx('rowInput')}>
                                    <div className={cx('itemInput',"flex")}>
                                        <div className={cx('textInput')}>Quyền Admin</div>
                                        <div onClick={handleSetAdmin}>
                                            {isAdmin==1?<IconSwitchOn style={{marginLeft:40}}/>:<IconSwitchOff style={{marginLeft:40}}/>}
                                        </div>

                                    </div>
                                    <div className={cx('itemInput',"flex")}>
                                        <div className={cx('textInput')}>Tình trạng hoạt động</div>
                                        <div onClick={handleSetActive}>
                                            {isActive==1?<IconSwitchOn style={{marginLeft:40}}/>:<IconSwitchOff style={{marginLeft:40}}/>}
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('select', 'selectImg', 'itemInput')} style={{flexDirection:'row'}} >
                                    <div className={cx('selectInput')}>
                                        <div className={cx('textInput')}>Ảnh nhân viên</div>
                                        <input onChange={onImageChange} className={cx('inputImg')} type={'file'} accept="image/*" />
                                    </div>
                                    <img src={image} style={{width:100, height:100, borderRadius:100/2}} alt={'ảnh nhân viên'} />
                                </div>
                            </div>

                        </div>
                           <div style={style.buttonEdit}>
                               <div style={style.textEdit}>Chỉnh sửa</div>
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
        paddingTop:5,
        paddingBottom:5,
    },
    textEdit:{
          fontSize: 16,
          color:"black",
          fontWeight:600
    }
};
