import service from '../api/request'



export const getCode = (data) => {
    return service.post('/data/sms/sendMail'+data).then(res => res).catch(err => err)
}

export const register = (code, data) => {
    return service.post('/member/member/register?code='+code, data).then(res => res).catch(err => err)
}

export const login = (data) => {
    return service.post('/member/member/login?'+data).then(res => res).catch(err => err)
}

export const getBalance = (data) => {
    return service.get('/member/balance/getBalanceList?'+data).then(res => res).catch(err => err)
}

export const getCoin = (data) => {
    return service.get('/member/balance/getWalletPackage?'+data).then(res => res).catch(err => err)
}