import IconClose from "../../assets/icon/IconClose";
import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "../../screen/Admin/Employee/EmployeeManager.module.css";
import {dataListPosititon} from "../../unitl/GetValuePosition";
import {baseUrlAvatarUser, baseUrlLinkFile} from "../../api/ConstBaseUrl";

 export const ModalEditEmployee=React.memo((props)=>{
    const {item, isShowModalEditUser, onClose} = props
    const cx = classNames.bind(styles);
     const [username, setUserName] = useState('');
     const [firstName, setfirstName] = useState('');
     const [lastName, setlastName] = useState('');
     const [email, setEmail] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [image, setImage] = useState(null)

     const onImageChange = (event) => {
         if (event.target.files && event.target.files[0]) {
             setImage(URL.createObjectURL(event.target.files[0]));
         }
     }
     useEffect(()=>{
         setUserName(item?.userName);
         setfirstName(item?.firstName)
         setlastName(item?.lastName)
         setEmail(item?.email)
         setPhoneNumber(item?.phoneNumber)
         setImage(baseUrlAvatarUser+item?.avatarUser)
     },[item])

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
                            <div style={{width:'50%'}}>
                               <div style={{flexDirection:'row'}}>
                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>User Name</div>
                                       <input value={username} onChange={(e)=>{setUserName(e.target.value)}} className={cx('input')}/>
                                   </div>

                                   <div className={cx('itemInput')}>
                                       <div className={cx('textInput')}>First Name</div>
                                       <input  value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} className={cx('input')}  />
                                   </div>
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
                                    <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className={cx('input')} onChange={(value)=>{console.log(value)}} />
                                </div>

                                <div style={{marginBottom:16}}>
                                    <div className={cx('textInput')}>Chức vụ</div>
                                    <select style={{padding:10, fontSize:16, borderRadius:10,width:'50%'}}>
                                        {dataListPosititon.map(item => (
                                            <option value={item.id} >{item.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={cx('select', 'selectImg', 'itemInput')} style={{flexDirection:'row'}} >
                                    <div className={cx('selectInput')}>
                                        <div className={cx('textInput')}>Ảnh nhân viên</div>
                                        <input onChange={onImageChange} className={cx('inputImg')} type={'file'} />
                                    </div>
                                    <img src={image} style={{width:100, height:100, borderRadius:100/2}} alt={'ảnh nhân viên'} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div> : null}
        </div>
    )
})
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
        transform: 'translate(-50%, -50%)',
        zIndex: 1001
    }
};
