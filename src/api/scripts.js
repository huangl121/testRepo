import request from '@/utils/request'
import BASE_URL from '@/utils/common'

export default {
    getscriptList(pageSize,currentPage,scriptsVO){
        return request({
            url: BASE_URL +'/api/scripts/queryScripts',
            method: 'post',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            params:{
                currentPage,
                pageSize
            },
            data:scriptsVO
        })
    }
}
