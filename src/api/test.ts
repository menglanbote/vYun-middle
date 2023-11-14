import request from "@/utils/request";


/**
 * 封装api方法
 * @returns promise
 */
export function test2() {
    return request({
        url: '/mock-login',
        method: 'GET'
    });
}