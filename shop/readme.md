# skr-shop 来自于抖音电商

## 订单

## 模块化
- 地址表
     设计这个表
     需求
     consignee 收货人姓名   String
     mongodb 存入JSON会自动创建
     mobile string 手机
     {
         id : 86,
         name : '中国'
     }
     coutry object id int64 国家ID
     country object name string 国家名称
     province object id int64 省ID
     province object name String 省名称
     city
     county
     street
     detailed_address   用户填写
     postal_code string 邮编
     address_id 地址ID int64
     时间戳 + 随机数4位
