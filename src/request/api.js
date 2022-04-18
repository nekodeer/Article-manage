import request from './request'


export const RegisterApi = (params) => request.post('/register',params)

export const LoginApi = (params) => request.post('/login',params)

//get article list from server
export const GetArticle = (params) => request.get('/article',{params})

//add a new article to server
export const AddNewArticle = (params) => request.post('/article/add',params)

//查看文章内容
export const GetArticleContent = (params) => request.get(`/article/${params.id}`)

//edit article content request to server
export const UpdateArticle = (params) => request.put('article/update',params)

//delete article
export const DeleteArticle = (params) => request.post('article/remove',params)

//get user info
export const GetUserInfo = () => request.get('/info')

//update user information
export const ChangeUserInfo = (params) => request.put('/info',params)

//upload user avatar
export const UploadAvatar = (params) => request.post('/upload',params)