import request from '@/utils/request'
import BASE_URL from '@/utils/common'

export default {
    getscriptList(pageSize, currentPage, scriptVO) {
        return request({
            url: BASE_URL + 'api/scripts/queryScripts',
            method: 'POST',
            data: {
                scriptQueryVO: {
                    name: scriptVO.name,
                    pageSize: pageSize,
                    currentPage: currentPage,
                }
            },
            dataType: 'json',
            //contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    }
}
