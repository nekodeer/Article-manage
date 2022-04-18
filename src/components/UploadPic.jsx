import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser, setUserAvatar } from '../redux/actions/setUser';
import { UploadAvatar } from '../request/api';

export default function UploadPic() {
  const [image,setImage] = useState([])
  const [imgURL,setImgURL] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    if(image.length<1)
    return;
    const newImgURL = [];
    image.forEach((imageObg) => {
      newImgURL.push(URL.createObjectURL(imageObg))
    })
    setImgURL(newImgURL)
  },[image])

  const changeImage = (e) => {
    setImage([...e.target.files])
  }
  const uploadAvatar = () => {
    console.log(image);
    UploadAvatar(image).then((res) => {
      localStorage.setItem('avatar',res.data.filePath)
      dispatch(setUserAvatar({avatar:localStorage.avatar}))
    })
  }
  return (
    <>
      <input type="file" accept='image' onChange={changeImage} />
      <div className='mb-3'>{imgURL.map(imageSRC => <img key={Math.random()*1000} src={imageSRC} alt='...'/>)}</div>
      <button className='btn btn-primary' onClick={uploadAvatar}>Confirm Upload</button>
    </>
  )
}
