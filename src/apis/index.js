import request from "@/utils/request";


export const loginApi = (data) => {
    return request({
        url: "/login",
        method: "post",
        data
    })
}