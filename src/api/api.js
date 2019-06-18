import fetch from './axios'

// const hosturl = process.env.NODE_ENV == "development" ? "//test.amazing.com/api/" : "https://www.uniqorn.vip/api/"

const hosturl = process.env.NODE_ENV === "development" ? "https://www.uniqorn.vip/api/" : "https://www.uniqorn.vip/api/"

//web_from参数配置 新印尼 'id' 新印度 'nindia' 台湾 'tw' 新分销项目 mee

export const _getBanner = () => {
    const url = hosturl + 'list/indexconfig';
    return fetch.get(url, {}, 'noLoading')
}

//首页列表
export const _getGroupList = (params) => {
    const url = hosturl + 'list/listsku';
    return fetch.get(url, params, 'noLoading')
}

//商品详情
export const _getGoodsDetail = (params) => {
    const url = hosturl + 'goods/detail';
    return fetch.get(url, params)
}

//喜欢
export const _addWish = (params) => {
    const url = hosturl + 'user/addWish';
    return fetch.get(url, params, 'noLoading')
}

//取消喜欢
export const _delWish = (params) => {
    const url = hosturl + 'user/delWish';
    return fetch.get(url, params, 'noLoading')
}

//登录
export const _login = (params) => {
    const url = hosturl + 'user/login';
    return fetch.get(url, params)
}

//注册
export const _register = (params) => {
    const url = hosturl + 'user/register';
    return fetch.post(url, params)
}

//用户个人信息
export const _userInfo = (params) => {
    const url = hosturl + 'user/info';
    return fetch.post(url, params)
}

//编辑用户个人信息 user_name email bank_num bank_name bank_holder user_picture password
export const _userEdit = (params) => {
    const url = hosturl + 'user/edit';
    return fetch.post(url, params)
}

//忘记密码提交邮箱
export const _forget = (params) => {
    const url = hosturl + 'user/forget';
    return fetch.post(url, params)
}

//用户反馈
export const _userFeedback = (params) => {
    const url = hosturl + 'user/feedback';
    return fetch.get(url, params)
}

//喜欢列表
export const _getWishlist = (params) => {
    const url = hosturl + 'user/wishlist';
    return fetch.post(url, params)
}

//添加分享
export const _addShare = (params) => {
    const url = hosturl + 'user/addShare';
    return fetch.post(url, params)
}

//分享列表
export const _sharelist = (params) => {
    const url = hosturl + 'user/sharelist';
    return fetch.get(url, params)
}

//获取收入
export const _getRise = (params) => {
    const url = hosturl + 'user/rise';
    return fetch.get(url, params)
}

//order list
export const _getOrderList = (params) => {
    const url = hosturl + 'user/orderlist';
    return fetch.get(url, params)
}

//order list
export const _cancelorder = (params) => {
    const url = hosturl + 'user/cancelorder';
    return fetch.post(url, params)
}

//下单 goods_id num arrt_id webfrom message rcv_info fise  mobile rise

export const _createorder = (params) => {
    const url = hosturl + 'user/create';
    return fetch.post(url, params)
}

//获取地址
export const _getAddress = (params) => {
    const url = hosturl + 'region/address';
    return fetch.get(url, params)
}

//获取邮费 area_id=16&goods_id=1043 num
export const _getRegionPrice = (params) => {
    const url = hosturl + 'user/getRegionPrice';
    return fetch.get(url, params)
}

// PayMessage: /user/getPayMsg?phone=113
export const _getPayMessage = (params) => {
    const url = hosturl + 'user/getPayMsg';
    return fetch.get(url, params)
}

//获取sku
export const getSkuData = (params) => {
    const url = hosturl + 'goods/detail';
    return fetch.get(url, params)
}

//埋点 1-注册 2-登录 3-分享 4-下单
export const postPoint = (id, content) => {
    const params = {
        event_id: id,
        url: window.location.href,
        content: content
    };
    const url = hosturl + 'event';
    return fetch.get(url, params, 'noLoading')
}

