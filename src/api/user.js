// import request from '@/utils/request'

export function login(data) {
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data
  // })
  console.log(data);
  if(data.username === 'admin'){
    return Promise.resolve({data:{token:"helloworld"}});
  }else{
    return Promise.reject('用户名错误');
  }
}

export function getInfo(token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  console.log('getInfo token: ' + token);
  return Promise.resolve({data:{}});
}

export function logout() {
  // return request({
  //   url: '/user/logout',
  //   method: 'post'
  // })
  return Promise.resolve({data:{}});
}
